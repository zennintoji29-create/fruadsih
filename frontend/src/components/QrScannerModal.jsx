import React, { useState, useEffect, useRef } from 'react';
import jsQR from 'jsqr';
import { QrCode, Camera, Upload, ArrowLeft, X, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';
import { translations } from '../translations';

export default function QrScannerModal({ onClose, onScanSuccess, lang = 'en' }) {
  const t = translations[lang] || translations.en;
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [decodingStatus, setDecodingStatus] = useState(null);
  const streamRef = useRef(null);

  // Start real Android / Web camera stream
  useEffect(() => {
    let isMounted = true;
    let animationFrameId = null;

    const startCamera = async () => {
      try {
        setCameraError(null);
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } }
        });
        
        if (!isMounted) {
          stream.getTracks().forEach(track => track.stop());
          return;
        }

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute('playsinline', 'true');
          videoRef.current.play();
          setCameraActive(true);
          scanFrame();
        }
      } catch (err) {
        console.warn('[Camera Access]:', err.message);
        if (isMounted) {
          setCameraError('Camera access unavailable. You can upload any QR image directly from your gallery.');
          setCameraActive(false);
        }
      }
    };

    const scanFrame = () => {
      if (!isMounted || !videoRef.current || !canvasRef.current) return;
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert'
        });

        if (code && code.data) {
          parseAndComplete(code.data);
          return;
        }
      }
      animationFrameId = requestAnimationFrame(scanFrame);
    };

    startCamera();

    return () => {
      isMounted = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const parseAndComplete = (rawText) => {
    try {
      // Decode standard NPCI UPI URI Scheme: upi://pay?pa=...&am=...&tn=...
      if (rawText.startsWith('upi://pay') || rawText.includes('pa=')) {
        const urlParams = new URLSearchParams(rawText.split('?')[1] || rawText);
        const vpa = urlParams.get('pa') || rawText;
        const amount = urlParams.get('am') || '';
        const note = urlParams.get('tn') || '';
        const payeeName = urlParams.get('pn') || '';

        onScanSuccess({
          vpa: vpa.trim(),
          amount: amount ? amount.toString() : '',
          note: note || (payeeName ? `Payment to ${payeeName}` : 'QR Scan'),
          isOnCall: false
        });
      } else {
        // Plain text or URL QR
        onScanSuccess({
          vpa: rawText.trim(),
          amount: '',
          note: 'Scanned from QR Code',
          isOnCall: false
        });
      }
      onClose();
    } catch (e) {
      onScanSuccess({
        vpa: rawText.trim(),
        amount: '',
        note: 'QR Code',
        isOnCall: false
      });
      onClose();
    }
  };

  // Decode from Gallery Image Upload
  const handleGalleryUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setDecodingStatus('Decoding QR image from gallery...');
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const offCanvas = document.createElement('canvas');
        offCanvas.width = img.width;
        offCanvas.height = img.height;
        const ctx = offCanvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, img.width, img.height);
        const code = jsQR(imgData.data, imgData.width, imgData.height);

        if (code && code.data) {
          parseAndComplete(code.data);
        } else {
          setDecodingStatus('No valid QR code found in this image. Please select a clearer QR picture.');
          setTimeout(() => setDecodingStatus(null), 3000);
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-5 text-white font-sans animate-fade-in">
      {/* Top Bar */}
      <div className="flex items-center justify-between pt-2">
        <button 
          onClick={onClose}
          className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-1 text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> {t.backBtn}
        </button>
        <h3 className="text-sm font-bold text-[#b9d175] font-heading flex items-center gap-1.5">
          <QrCode className="w-4 h-4" /> Live QR Scanner
        </h3>
        <button onClick={onClose} className="p-2 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Center Viewfinder */}
      <div className="my-auto flex flex-col items-center space-y-4">
        <div className="relative w-72 h-72 rounded-3xl border-2 border-[#b9d175] bg-black/60 overflow-hidden flex items-center justify-center shadow-2xl shadow-[#b9d175]/25">
          {/* Live Video Element */}
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
          />
          <canvas ref={canvasRef} className="hidden" />

          {/* Corner Markers */}
          <div className="absolute top-2 left-2 w-7 h-7 border-t-4 border-l-4 border-[#b9d175] rounded-tl-xl pointer-events-none" />
          <div className="absolute top-2 right-2 w-7 h-7 border-t-4 border-r-4 border-[#b9d175] rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-7 h-7 border-b-4 border-l-4 border-[#b9d175] rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-7 h-7 border-b-4 border-r-4 border-[#b9d175] rounded-br-xl pointer-events-none" />

          {/* Laser Scanning Beam */}
          <div 
            className="absolute inset-x-0 h-0.5 bg-[#b9d175] shadow-lg shadow-[#b9d175] animate-pulse pointer-events-none" 
            style={{ animationDuration: '1.5s', top: '50%' }} 
          />

          {!cameraActive && !cameraError && (
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-center">
              <Camera className="w-10 h-10 text-[#b9d175] mb-2 animate-bounce" />
              <p className="text-xs font-semibold text-slate-200">Initializing camera...</p>
            </div>
          )}

          {cameraError && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 text-center space-y-2">
              <Camera className="w-8 h-8 text-slate-500" />
              <p className="text-xs text-slate-300">{cameraError}</p>
            </div>
          )}
        </div>

        {decodingStatus ? (
          <p className="text-xs text-amber-300 font-medium text-center animate-pulse">{decodingStatus}</p>
        ) : (
          <p className="text-xs text-slate-300 text-center max-w-xs">
            Point your camera at any UPI QR Code or upload from Gallery.
          </p>
        )}
      </div>

      {/* Gallery QR Upload Button */}
      <div className="space-y-3 pb-6">
        <label className="w-full py-4 bg-[#450c3f] hover:bg-[#33082e] border border-[#b9d175]/40 text-[#f5fbda] rounded-2xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#450c3f]/40 active:scale-98 transition-all">
          <Upload className="w-4 h-4 text-[#b9d175]" />
          <span>Upload UPI QR from Gallery</span>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleGalleryUpload} 
            className="hidden" 
          />
        </label>
      </div>
    </div>
  );
}
