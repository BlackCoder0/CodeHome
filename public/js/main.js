'use strict';
const MAX_PRECISION = false;
const precision = 2;
const gaussMatrix = [
    [0.0121, 0.0261, 0.0337, 0.0261, 0.0121],
    [0.0261, 0.0561, 0.0724, 0.0561, 0.0261],
    [0.0337, 0.0724, 0.0935, 0.0724, 0.0337],
    [0.0261, 0.0561, 0.0724, 0.0561, 0.0261],
    [0.0121, 0.0261, 0.0337, 0.0261, 0.0121]
];
const xMatrix = [[1, 0, -1], [2, 0, -2], [1, 0, -1]];
const yMatrix = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
const MAX_IMAGE_HEIGHT = 300;
function curry(f, n) {
    var args = Array.prototype.slice.call(arguments, 0);
    if (typeof n === 'undefined')
        args[1] = f.length;
    if (n === args.length - 2)
        return f.apply(undefined, args.slice(2));
    return function () {
        return curry.apply(undefined, args.concat(Array.prototype.slice.call(arguments, 0)));
    };
}
function loadImage(imageUrl) {
    return new Promise((resolve, reject) => {
        console.time('loadImage');
        const img = new Image();
        img.src = imageUrl;
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            console.timeEnd('loadImage');
            resolve(img);
        };
    });
}
function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.onloadend = function () {
            resolve(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
        else {
            reject('');
        }
    });
}
function _drawImageOnCanvas(canvas, image) {
    canvas.getContext('2d').drawImage(image, 0, 0);
    return image;
}
var drawImageOnCanvas = curry(_drawImageOnCanvas);
function _setCanvasSizeFromImage(canvas, image) {
    const ratio = image.naturalWidth / image.naturalHeight;
    canvas.style.width = '';
    canvas.getContext('2d').clearRect(0, 0, image.width, image.height);
    canvas.height = image.height;
    canvas.width = image.width;
    return image;
}
var setCanvasSizeFromImage = curry(_setCanvasSizeFromImage);
function _drawBytesOnCanvas(width, height, canvas, bytes) {
    canvas
        .getContext('2d')
        .putImageData(new ImageData(new Uint8ClampedArray(bytes), width, height), 0, 0);
}
var drawBytesOnCanvas = curry(_drawBytesOnCanvas);
function toGrayscale(bytes, width, height) {
    console.time('toGrayscale');
    const grayscale = [];
    for (let i = 0; i < bytes.length; i += 4) {
        var gray = .299 * bytes[i + 2] + .587 * bytes[i + 1] + .114 * bytes[i];
        grayscale.push(gray);
    }
    console.timeEnd('toGrayscale');
    return grayscale;
}
function _toConvolution(width, height, kernel, radius, bytes) {
    console.time('toConvolution');
    const convolution = [];
    let newValue, idxX, idxY, kernx, kerny;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            newValue = 0;
            for (let innerI = i - radius; innerI < i + radius + 1; innerI++) {
                for (let innerJ = j - radius; innerJ < j + radius + 1; innerJ++) {
                    idxX = (innerI + width) % width;
                    idxY = (innerJ + height) % height;
                    kernx = innerI - (i - radius);
                    kerny = innerJ - (j - radius);
                    newValue += bytes[idxY * width + idxX] * kernel[kernx][kerny];
                }
            }
            convolution[j * width + i] = newValue;
        }
    }
    console.timeEnd('toConvolution');
    return convolution;
}
var toConvolution = curry(_toConvolution);
function toPixels(bytes) {
    console.time('toPixels');
    const pixels = [];
    for (let i = 0; i < bytes.length; i++) {
        pixels.push(bytes[i], bytes[i], bytes[i], 255);
    }
    console.timeEnd('toPixels');
    return pixels;
}
function toNormalized(bytes) {
    console.time('toNormalized');
    let min = bytes[0], max = bytes[0];
    for (let i = 1; i < bytes.length; i++) {
        if (bytes[i] < min)
            min = bytes[i];
        if (bytes[i] > max)
            max = bytes[i];
    }
    const normalized = [];
    for (let i = 0; i < bytes.length; i++) {
        normalized[i] = (bytes[i] - min) / (max - min);
    }
    console.timeEnd('toNormalized');
    return normalized;
}
function toDenormalized(bytes) {
    console.time('toDenormalized');
    let min = bytes[0], max = bytes[0];
    for (let i = 1; i < bytes.length; i++) {
        if (bytes[i] < min)
            min = bytes[i];
        if (bytes[i] > max)
            max = bytes[i];
    }
    const denormalized = [];
    for (let i = 0; i < bytes.length; i++) {
        denormalized[i] = Math.round((bytes[i] - min) / (max - min) * 255);
    }
    console.timeEnd('toDenormalized');
    return denormalized;
}
function toGradientMagnitude(xDerived, yDerived, width, height, lt, ut) {
    console.time('toGradientMagnitude');
    const magnitude = [];
    const direction = [];
    let gx, gy, g;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            gx = xDerived[j * width + i];
            gy = yDerived[j * width + i];
            g = Math.sqrt(gx * gx + gy * gy);
            magnitude[j * width + i] = g;
            direction[j * width + i] = Math.atan2(gy, gx);
        }
    }
    const threshold = _getThreshold(magnitude, lt, ut);
    const nonMaxSuppression = _nonMaximumSuppression(magnitude, direction, width, height);
    const hysteresis = _hysteresis(nonMaxSuppression, width, height, threshold.lt, threshold.ut);
    console.timeEnd('toGradientMagnitude');
    return { data: hysteresis, threshold };
}
function _getThreshold(magnitude, lt, ut) {
    if (lt && ut) {
        return { lt, ut };
    }
    const sorted = magnitude.slice(0).sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    return {
        lt: median * 0.66,
        ut: median * 1.33
    };
}
function _nonMaximumSuppression(magnitude, direction, width, height) {
    console.time('_nonMaximumSuppression');
    const nms = [];
    let angle, q, r, p1, p2;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            angle = direction[j * width + i] * 180 / Math.PI;
            if (angle < 0)
                angle += 180;
            q = 255;
            r = 255;
            if ((0 <= angle && angle < 22.5) || (157.5 <= angle && angle <= 180)) {
                q = magnitude[j * width + i + 1];
                r = magnitude[j * width + i - 1];
            }
            else if (22.5 <= angle && angle < 67.5) {
                q = magnitude[(j + 1) * width + i - 1];
                r = magnitude[(j - 1) * width + i + 1];
            }
            else if (67.5 <= angle && angle < 112.5) {
                q = magnitude[(j + 1) * width + i];
                r = magnitude[(j - 1) * width + i];
            }
            else if (112.5 <= angle && angle < 157.5) {
                q = magnitude[(j - 1) * width + i - 1];
                r = magnitude[(j + 1) * width + i + 1];
            }
            if (magnitude[j * width + i] >= q && magnitude[j * width + i] >= r) {
                nms[j * width + i] = magnitude[j * width + i];
            }
            else {
                nms[j * width + i] = 0;
            }
        }
    }
    console.timeEnd('_nonMaximumSuppression');
    return nms;
}
function _hysteresis(nms, width, height, lt, ut) {
    console.time('_hysteresis');
    const hysteresis = [];
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (nms[j * width + i] > ut) {
                hysteresis[j * width + i] = 255;
            }
            else if (nms[j * width + i] < lt) {
                hysteresis[j * width + i] = 0;
            }
            else {
                let connected = false;
                for (let ni = i - 1; ni <= i + 1; ni++) {
                    for (let nj = j - 1; nj <= j + 1; nj++) {
                        if (ni >= 0 && ni < width && nj >= 0 && nj < height) {
                            if (nms[nj * width + ni] > ut) {
                                connected = true;
                                break;
                            }
                        }
                    }
                    if (connected)
                        break;
                }
                if (connected)
                    hysteresis[j * width + i] = 255;
                else
                    hysteresis[j * width + i] = 0;
            }
        }
    }
    console.timeEnd('_hysteresis');
    return hysteresis;
}