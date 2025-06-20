var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Common = Matter.Common,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

// create an engine
var engine = Engine.create();

// 设置重力 - 电脑端1.5倍重力
if (!isMobile()) {
    engine.world.gravity.y = 1.5;
}

// 检测设备类型
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 根据设备类型获取物体数量倍数
function getMultiplier() {
    return isMobile() ? 1 : 2;
}

// 创建多种形状的物体 - 调整颜色和大小以匹配图片
function createRandomBody(x, y) {
    var shapes = [
        // 矩形
        () => Bodies.rectangle(x, y, Common.random(15, 45), Common.random(15, 45), {
            render: {
                fillStyle: 'transparent',
                strokeStyle: `hsl(${Common.random(0, 30)}, 50%, 40%)`,
                lineWidth: 1.5
            },
            // 添加交互属性
            restitution: 0.6,
            friction: 0.4,
            frictionAir: 0.01
        }),
        // 圆形
        () => Bodies.circle(x, y, Common.random(12, 30), {
            render: {
                fillStyle: 'transparent',
                strokeStyle: `hsl(${Common.random(0, 30)}, 50%, 40%)`,
                lineWidth: 1.5
            },
            restitution: 0.8,
            friction: 0.3,
            frictionAir: 0.01
        }),
        // 多边形
        () => Bodies.polygon(x, y, Common.random(5, 8), Common.random(12, 25), {
            render: {
                fillStyle: 'transparent',
                strokeStyle: `hsl(${Common.random(0, 30)}, 50%, 40%)`,
                lineWidth: 1.5
            },
            restitution: 0.7,
            friction: 0.35,
            frictionAir: 0.01
        })
    ];
    
    var randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    return randomShape();
}

// 等待DOM加载完成，然后找到about section
function initMatter() {
    var aboutSection = document.getElementById('about');
    if (!aboutSection) {
        console.error('找不到id为about的元素');
        return;
    }

    // 检查是否已经初始化过了
    if (aboutSection.querySelector('canvas')) {
        console.log('Matter.js 已经初始化过了');
        return;
    }

    var canvasWidth = Math.min(aboutSection.clientWidth, 1200);
    var canvasHeight = 700;
    var multiplier = getMultiplier();

    // create a renderer
    var render = Render.create({
        element: aboutSection,
        engine: engine,
        options: {
            width: canvasWidth,
            height: canvasHeight,
            wireframes: false,
            background: 'transparent',
            showAngleIndicator: false,
            showVelocity: false,
            pixelRatio: window.devicePixelRatio || 1
        }
    });

    // 设置canvas样式 - 启用交互但不阻止滚动
    var canvas = render.canvas;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1';
    // 启用交互但不阻止页面滚动
    canvas.style.pointerEvents = 'auto';
    
    // 添加鼠标/触摸控制
    var mouse = Mouse.create(render.canvas);
    var mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });
    
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;
    
    // 防止canvas阻止页面滚动
    canvas.addEventListener('wheel', function(event) {
        // 不阻止滚轮事件冒泡，允许页面滚动
    }, { passive: true });
    
    canvas.addEventListener('touchmove', function(event) {
        // 只有在拖拽物体时才阻止默认行为
        if (mouseConstraint.body) {
            event.preventDefault();
        }
    }, { passive: false });

    // 创建边界墙壁
    var ground = Bodies.rectangle(canvasWidth / 2, canvasHeight - 30, canvasWidth, 60, { 
        isStatic: true,
        render: {
            fillStyle: 'transparent'
        }
    });
    
    var leftWall = Bodies.rectangle(-30, canvasHeight / 2, 60, canvasHeight, { 
        isStatic: true,
        render: {
            fillStyle: 'transparent'
        }
    });
    
    var rightWall = Bodies.rectangle(canvasWidth + 30, canvasHeight / 2, 60, canvasHeight, { 
        isStatic: true,
        render: {
            fillStyle: 'transparent'
        }
    });

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // 创建初始物体 - 根据设备调整数量
    var initialBodies = [];
    var initialCount = 40 * multiplier;
    for (var i = 0; i < initialCount; i++) {
        var x = Common.random(50, canvasWidth - 50);
        var y = Common.random(-400, -50);
        initialBodies.push(createRandomBody(x, y));
    }
    
    Composite.add(engine.world, initialBodies);

    // 定期添加新物体
    var dropInterval = setInterval(function() {
        var maxBodies = 80 * multiplier;
        if (engine.world.bodies.length < maxBodies) {
            var x = Common.random(50, canvasWidth - 50);
            var y = -50;
            var newBody = createRandomBody(x, y);
            Composite.add(engine.world, newBody);
        }
        
        // 清理掉落到底部很久的物体
        var bodiesToRemove = [];
        engine.world.bodies.forEach(function(body) {
            if (body.position.y > canvasHeight + 200 && !body.isStatic) {
                bodiesToRemove.push(body);
            }
        });
        
        if (bodiesToRemove.length > 0) {
            Composite.remove(engine.world, bodiesToRemove);
        }
    }, 800);

    // 添加爆炸效果 - 电脑端和手机端都启用
    function addExplosionEffect(clientX, clientY) {
        var rect = canvas.getBoundingClientRect();
        var x = (clientX - rect.left) * (canvasWidth / rect.width);
        var y = (clientY - rect.top) * (canvasHeight / rect.height);
        
        // 对附近的物体施加爆炸力
        engine.world.bodies.forEach(function(body) {
            if (!body.isStatic) {
                var distance = Math.sqrt(
                    Math.pow(body.position.x - x, 2) + 
                    Math.pow(body.position.y - y, 2)
                );
                
                if (distance < 150) {
                    var force = {
                        x: (body.position.x - x) * 0.0008,
                        y: (body.position.y - y) * 0.0008
                    };
                    Matter.Body.applyForce(body, body.position, force);
                }
            }
        });
    }
    
    // 双击/双击触摸爆炸效果
    var lastClickTime = 0;
    canvas.addEventListener('click', function(event) {
        var currentTime = Date.now();
        if (currentTime - lastClickTime < 300) {
            // 双击触发爆炸
            addExplosionEffect(event.clientX, event.clientY);
        }
        lastClickTime = currentTime;
    });
    
    // 触摸双击效果
    var lastTouchTime = 0;
    canvas.addEventListener('touchend', function(event) {
        var currentTime = Date.now();
        if (currentTime - lastTouchTime < 300 && event.changedTouches.length === 1) {
            var touch = event.changedTouches[0];
            addExplosionEffect(touch.clientX, touch.clientY);
        }
        lastTouchTime = currentTime;
    });

    // run the renderer
    Render.run(render);

    // create runner
    var runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);

    console.log('Matter.js 多物体掉落效果初始化完成 - 设备倍数:', multiplier);
    
    // 清理函数
    window.matterCleanup = function() {
        clearInterval(dropInterval);
        Render.stop(render);
        Runner.stop(runner);
        Engine.clear(engine);
    };
}

// 延迟一点时间确保DOM完全准备好
setTimeout(function() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMatter);
    } else {
        initMatter();
    }
}, 100);