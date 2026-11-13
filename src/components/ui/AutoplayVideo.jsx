import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { FaPlay } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

/**
 * Video sin sonido en bucle que se reproduce mientras está en pantalla.
 *
 * - iOS Safari solo permite reproducir automáticamente si el video tiene el
 *   atributo `muted` en el HTML; React no lo escribe, así que se fija a mano.
 * - Si el navegador bloquea la reproducción (modo ahorro de batería o de datos),
 *   se muestra un botón para reproducirlo con un toque.
 * - Si el sistema pide reducir el movimiento, no se reproduce solo.
 */
export default function AutoplayVideo({ src, poster, label, className = '' }) {
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [blocked, setBlocked] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!inView) {
      video.pause();
      return;
    }

    if (reduceMotion) {
      setBlocked(true);
      return;
    }

    const attempt = video.play();
    attempt?.then(() => setBlocked(false)).catch(() => setBlocked(true));
  }, [inView, reduceMotion]);

  const handlePlay = () => {
    videoRef.current
      ?.play()
      .then(() => setBlocked(false))
      .catch(() => {});
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={label}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
      />
      {blocked && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Reproducir video: ${label}`}
          className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors hover:bg-ink/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 text-ink shadow-lg">
            <FaPlay size={20} className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}
