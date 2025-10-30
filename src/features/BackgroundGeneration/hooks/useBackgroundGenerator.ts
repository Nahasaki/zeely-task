'use client';

import { create } from 'zustand';

type BackgroundGeneratorState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleSidebar: () => void;
};

export const useBackgroundGenerator = create<BackgroundGeneratorState>(
  (set, get) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
    toggleSidebar: () => set({ open: !get().open }),
  })
);
