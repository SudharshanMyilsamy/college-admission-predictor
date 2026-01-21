import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  placeholder?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  name, 
  type = "number", 
  value, 
  onChange, 
  min, 
  max, 
  placeholder,
  error
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        placeholder={placeholder}
        className={`bg-slate-800 border ${error ? 'border-red-500' : 'border-slate-700'} text-slate-100 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-slate-500`}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
};
