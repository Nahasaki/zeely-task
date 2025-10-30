import { cn } from '@/lib/utils';

type Props = {
  src: string;
};

export default function BackgroundItem({ src }: Props) {
  return (
    <button
      className={cn(
        'group relative',
        'flex h-[198px] w-28 flex-none items-center justify-center overflow-hidden rounded-xl border',
        'bg-muted'
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
    </button>
  );
}
