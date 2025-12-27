"use client"

import { create } from "zustand"

interface Toast {
  id: string
  message: string
}

interface ToastStore {
  toasts: Toast[]
  showToast: (message: string) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  showToast: (message: string) => {
    const id = Math.random().toString(36).substring(7)
    set((state) => ({
      toasts: [...state.toasts, { id, message }],
    }))
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((toast) => toast.id !== id),
      }))
    }, 3000)
  },
  removeToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }))
  },
}))

export function useToast() {
  const showToast = useToastStore((state) => state.showToast)
  return { showToast }
}
