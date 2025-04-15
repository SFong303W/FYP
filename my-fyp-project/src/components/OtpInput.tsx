'use client';

import { useRef } from 'react';

export default function OtpInput() {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = value;

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-sm text-slate-600">
        Enter the 6-digit OTP sent to <span className="font-bold">+1 123-456-7890</span>
      </p>

      <div className="flex items-center space-x-2">
        {[...Array(6)].map((_, i) =>
          i === 3 ? (
            <span key="dash" className="text-2xl mx-2 text-slate-700">-</span>
          ) : (
            <input
              key={i}
              type="text"
              maxLength={1}
              ref={(el) => {
                if (el) inputsRef.current[i] = el;
              }}
              className="w-10 h-10 bg-transparent text-center placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleBackspace(e, i)}
            />
          )
        )}
      </div>

      <p className="text-xs text-slate-400 mt-4">
        Did not receive the code? <span className="font-bold cursor-pointer">Resend</span>
      </p>
    </div>
  );
}
