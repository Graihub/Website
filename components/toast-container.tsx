"use client"

import { useToastStore } from "@/hooks/use-toast-message"

export function ToastContainer() {
  const { toasts } = useToastStore()

  return (
    <div className="fixed bottom-8 right-8 z-[2000] flex flex-col gap-2.5">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-[rgba(15,15,25,0.9)] text-white py-4 px-6 border-l-[5px] border-[#6c5ce7] rounded-lg flex items-center gap-2.5 backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.3)] animate-in slide-in-from-right-full duration-300"
        >
          <i className="fas fa-info-circle" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  )
}
