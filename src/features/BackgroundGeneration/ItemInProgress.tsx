import { cn } from '@/lib/utils';

type Props = {
  progress: number;
};

export default function BackgroundItemInProgress({ progress }: Props) {
  const size = 65;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <button
      className={cn(
        'group relative',
        'flex h-[198px] w-28 flex-none items-center justify-center overflow-hidden rounded-xl border',
        'bg-black'
      )}
    >
      <div className="flex items-center justify-center">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="progressbar"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.20)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#5BF0A5"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <span className="absolute text-sm font-medium text-white">
          {Math.round(progress)}%
        </span>
      </div>
    </button>
  );
}
