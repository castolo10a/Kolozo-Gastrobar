import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

/**
 * Video sin sonido en bucle que solo se carga y reproduce mientras está en pantalla.
 * Si el sistema pide reducir el movimiento, muestra la imagen de portada con controles.
 */
export default function AutoplayVideo({ src, poster, label, className = '' }) {
  const videoRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    if (inView) {
      // play() puede rechazarse si el navegador bloquea la reproducción; no es un error.
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, reduceMotion]);

  return (
    <div ref={ref} className={className}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={label}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        controls={reduceMotion || undefined}
      />
    </div>
  );
}
