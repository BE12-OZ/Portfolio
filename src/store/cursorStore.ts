import { create } from 'zustand';

type CursorState = {
  cursorType: 'default' | 'hovered';
  setCursorType: (type: 'default' | 'hovered') => void;
};

export const useCursorStore = create<CursorState>((set) => ({
  cursorType: 'default',
  setCursorType: (type) => set({ cursorType: type }),
}));
