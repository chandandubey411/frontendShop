import React, { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";

export default function Toast({ message, onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setLeaving(true), 2600);
    const doneTimer = setTimeout(() => onDone?.(), 3000);
    return () => { clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, [onDone]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-20 right-4 z-50 flex items-center gap-3 bg-white border border-green-100 shadow-xl rounded-2xl px-4 py-3 min-w-[220px] max-w-xs ${
        leaving ? "animate-toast-out" : "animate-toast-in"
      }`}
    >
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-4 h-4 text-green-600" />
      </div>
      <p className="text-sm font-medium text-gray-800 flex-1">{message}</p>
      <button
        onClick={() => { setLeaving(true); setTimeout(() => onDone?.(), 350); }}
        className="text-gray-400 hover:text-gray-600 flex-shrink-0"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
