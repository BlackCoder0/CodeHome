import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import './MusicControl.css';

interface Song {
  id: string;
  name: string;
  src: string;
  author?: string;
  album?: string;
  img?: string;
}

interface MusicControlProps {
  songs: Song[];
  className?: string;
}

const MusicControl: React.FC<MusicControlProps> = ({ songs, className = '' }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex] || null;

  // 播放/暂停切换
  const togglePlay = () => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 音频事件处理
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      // 循环播放当前歌曲
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // 当歌曲改变时重新加载
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.load();
    }
  }, [currentSong]);

  if (!currentSong) {
    return null;
  }

  return (
    <div className={`music-control ${className}`}>
      <div className="relative">
        {/* 音频元素 */}
        <audio ref={audioRef} preload="metadata">
          <source src={currentSong.src} type="audio/mpeg" />
          <source src={currentSong.src} type="audio/wav" />
          <source src={currentSong.src} type="audio/ogg" />
        </audio>

        {/* 歌曲封面和播放按钮 */}
        <div 
          className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer group"
          onClick={togglePlay}
        >
          {/* 封面图片 */}
          <div className={`w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center transition-transform duration-300 ${
            isPlaying ? 'animate-spin' : ''
          }`}>
            {currentSong.img ? (
              <img 
                src={currentSong.img} 
                alt={currentSong.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // 如果图片加载失败，隐藏图片元素
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {currentSong.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>

          {/* 播放/暂停图标覆盖层 */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {isPlaying ? (
              <Pause className="w-4 h-4 md:w-5 md:h-5 text-white" />
            ) : (
              <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicControl;