import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="146"
      height="129"
      viewBox="-40 0 120 110"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            d="M 63 54 L 58.5 54 L 58.5 58.5 L 54 63 L 45 63 L 45 67.5 L 27 67.5 L 22.5 63 L 13.5 63 L 13.5 58.5 L 9 58.5 L 4.5 54 L 4.5 45 L 22.5 45 L 27 49.5 L 45 49.5 L 45 40.5 L 27 40.5 L 22.5 36 L 13.5 36 L 13.5 31.5 L 9 31.5 L 9 22.5 L 4.5 22.5 L 4.5 13.5 L 9 13.5 L 9 9 L 13.5 4.5 L 18 4.5 L 18 0 L 9 0 L 9 4.5 L 4.5 9 L 0 9 L 0 27 L 4.5 27 L 4.5 36 L 9 36 L 13.5 40.5 L 4.5 40.5 L 0 45 L 0 54 L 4.5 58.5 L 4.5 63 L 9 63 L 13.5 67.5 L 22.5 67.5 L 22.5 72 L 45 72 L 49.5 67.5 L 58.5 67.5 L 58.5 63 L 63 58.5 L 67.5 58.5 L 63 54 Z M 128.8 40.5 L 128.8 45 L 97.3 45 L 97.3 31.5 L 133.3 31.5 L 133.3 27 L 97.3 27 L 92.8 31.5 L 92.8 49.5 L 128.8 49.5 L 133.3 45 L 128.8 40.5 Z M 63 18 L 40.5 18 L 40.5 13.5 L 31.5 13.5 L 27 18 L 31.5 22.5 L 36 22.5 L 36 27 L 54 27 L 58.5 31.5 L 63 31.5 L 63 36 L 67.5 36 L 67.5 31.5 L 63 27 L 58.5 27 L 58.5 22.5 L 67.5 22.5 L 63 18 Z M 58.5 9 L 54 9 L 54 4.5 L 49.5 0 L 54 0 L 58.5 4.5 L 63 4.5 L 63 9 L 67.5 13.5 L 67.5 18 L 63 18 L 63 13.5 L 58.5 9 Z M 67.5 54 L 63 54 L 63 45 L 67.5 49.5 L 67.5 54 Z M 133.3 40.5 L 128.8 40.5 L 128.8 31.5 L 133.3 36 L 133.3 40.5 Z"
            vectorEffect="non-scaling-stroke"
          />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
