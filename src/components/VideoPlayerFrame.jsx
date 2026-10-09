import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export default function VideoPlayerFrame({ src, title = "soccervision_cv_feed.mp4", label = "LIVE CV INFERENCE" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <div className="video-player-frame" style={{
      background: '#0a0b0e',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.06)',
      position: 'relative',
      width: '100%',
    }}>
      {/* Window Frame Header */}
      <div style={{
        background: '#111318',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}>
        {/* macOS-style Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', opacity: 0.85, display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', opacity: 0.85, display: 'inline-block' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', opacity: 0.85, display: 'inline-block' }} />
          <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
            {title}
          </span>
        </div>

        {/* Live Pill Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(34, 197, 94, 0.08)',
          border: '1px solid rgba(34, 197, 94, 0.25)',
          padding: '2px 8px',
          borderRadius: '999px',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--green)',
            display: 'inline-block',
            boxShadow: '0 0 8px var(--green)',
            animation: 'pulse 2s infinite ease-in-out',
          }} />
          <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--green)', letterSpacing: '0.05em', fontWeight: 600 }}>
            {label}
          </span>
        </div>
      </div>

      {/* Video Content */}
      <div style={{ position: 'relative', width: '100%', background: '#000000', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
            background: '#000',
          }}
        />

        {/* Quick Floating Controls (hover-friendly overlay) */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          display: 'flex',
          gap: '8px',
          zIndex: 10,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          padding: '4px 8px',
          borderRadius: '6px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <button
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
            }}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={toggleMute}
            title={isMuted ? "Unmute" : "Mute"}
            style={{
              background: 'none',
              border: 'none',
              color: isMuted ? 'var(--text-muted)' : 'var(--green)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
            }}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <button
            onClick={handleFullscreen}
            title="Fullscreen"
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '2px',
            }}
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
