import { useEffect, useRef } from 'react';

const ProgressRing = ({
  percent,
  startColor,
  endColor,
  width,
  height,
  strokeWidth,
  cx,
  cy,
  r,
  transitionDuration,
  rotation,
  strokeLinecap,
  content
}) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const setProgress = (percent) => {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    };

    setProgress(percent);
  }, [percent]);

  return (
    <div style={{ position: 'relative', width, height }}>
      <svg className="progress-ring" width={width} height={height}>
        <defs>
          <linearGradient id="MyGradient">
            <stop offset="5%" stopColor={startColor} />
            <stop offset="95%" stopColor={endColor} />
          </linearGradient>
        </defs>
        <circle
          ref={circleRef}
          className="progress-ring__circle"
          stroke="url(#MyGradient)"
          strokeWidth={strokeWidth}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          strokeLinecap={strokeLinecap}
          style={{
            transformOrigin: 'center',
            transform: `rotate(${rotation})`,
            transition: `stroke-dashoffset ${transitionDuration}s`,
          }}
        />
      </svg>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {content}
      </div>
    </div>
  );
};

export default ProgressRing;
