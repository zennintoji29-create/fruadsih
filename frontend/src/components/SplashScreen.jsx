import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onComplete }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Hold animation for 1.8s, then smooth fade out over 450ms
    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 450);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#040d1a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        fontFamily: "'Outfit', 'Inter', sans-serif",
        padding: '24px',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        userSelect: 'none',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @keyframes verixEmblemPulse {
          0% {
            transform: scale(0.88);
            opacity: 0;
            filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.3));
          }
          40% {
            transform: scale(1.04);
            opacity: 1;
            filter: drop-shadow(0 0 35px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 60px rgba(0, 150, 255, 0.4));
          }
          100% {
            transform: scale(1);
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(0, 212, 255, 0.6)) drop-shadow(0 0 45px rgba(0, 150, 255, 0.3));
          }
        }
        @keyframes verixTextSlide {
          0% {
            opacity: 0;
            transform: translateY(16px);
            letter-spacing: 6px;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            letter-spacing: 4px;
          }
        }
        @keyframes radarRipple {
          0% {
            transform: scale(0.7);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        .anim-emblem {
          animation: verixEmblemPulse 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .anim-text {
          animation: verixTextSlide 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
        .anim-ripple {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 212, 255, 0.4);
          animation: radarRipple 2s ease-out infinite;
        }
      `}</style>

      {/* Cyber Ripple Backdrops */}
      <div className="anim-ripple" />
      <div 
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(4, 13, 26, 0) 70%)',
          filter: 'blur(30px)',
          zIndex: 1
        }}
      />

      {/* Center Brand Group */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}
      >
        {/* Clean Geometric Emblem */}
        <div 
          className="anim-emblem"
          style={{
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src="/emblem.png" 
            alt="Verix Emblem" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        {/* Brand Typography */}
        <div className="anim-text" style={{ textAlign: 'center' }}>
          <h1 
            style={{
              fontSize: '34px',
              fontWeight: '900',
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: '0',
              fontFamily: "'Outfit', sans-serif",
              background: 'linear-gradient(180deg, #ffffff 40%, #8ae2ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 25px rgba(0, 212, 255, 0.35)'
            }}
          >
            VERIX
          </h1>
          <p 
            style={{
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '2px',
              color: '#00d4ff',
              fontFamily: "'JetBrains Mono', monospace",
              textTransform: 'uppercase',
              margin: '6px 0 0 0',
              opacity: 0.95
            }}
          >
            Explainable Real-Time Fraud Detection
          </p>
        </div>
      </div>
    </div>
  );
}
