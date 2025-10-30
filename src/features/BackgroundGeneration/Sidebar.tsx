'use client';

import { useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useBackgroundGenerator } from './hooks/useBackgroundGenerator';
import { useBackgroundsApi } from './hooks/useBackgroundsApi';
import PromptForm from './PromptForm';
import BackgroundItem from './BackgroundItem';
import BackgroundItemInProgress from './ItemInProgress';
import emptyState from './assets/empty-state.png';

export default function Sidebar() {
  const { open, setOpen } = useBackgroundGenerator();
  const panelRef = useRef<HTMLDivElement>(null);

  const { items, generate, isGenerating, progress } = useBackgroundsApi();
  const isEmpty = useMemo(() => items.length === 0, [items]);

  return (
    <div
      className={cn(
        'hidden md:block',
        'fixed inset-0 z-50',
        open ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      <div
        onClick={() => setOpen(false)}
        className={cn(
          'absolute inset-0 bg-black/70 transition-opacity',
          open ? 'opacity-100' : 'opacity-0'
        )}
      />

      <div
        ref={panelRef}
        className={cn(
          'absolute right-0 top-0 h-screen w-[400px] bg-background text-foreground shadow-xl',
          'flex flex-col px-5 pt-8',
          'transition-transform duration-300 will-change-transform',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[22px]">Change background</h2>
          <Button
            variant="ghost"
            size="icon"
            className="gap-0 size-6"
            onClick={() => setOpen(false)}
          >
            <X className="size-6" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <PromptForm onSubmit={generate} />

          <div className="mt-6 space-y-3">
            {!isEmpty || isGenerating ? (
              <>
                <div className="text-sm font-medium">Your backgrounds</div>
                <div className="flex flex-wrap gap-3">
                  {isGenerating && (
                    <BackgroundItemInProgress progress={progress} />
                  )}
                  {items.map(item => (
                    <BackgroundItem key={item.id} src={item.src} />
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>

        {isEmpty && !isGenerating && (
          <div className="mt-auto mb-5">
            <img
              src={emptyState}
              alt="Empty state"
              className="w-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

