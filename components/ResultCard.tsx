import React from 'react';
import { PredictionResult } from '../types';

interface ResultCardProps {
  result: PredictionResult;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  // Calculate circumference for SVG circle
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (result.chance / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm animate-fade-in-up">
      <h2 className="text-xl font-semibold text-slate-200 mb-6">Prediction Result</h2>
      
      <div className="relative flex items-center justify-center w-40 h-40 mb-6">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="currentColor"
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="text-slate-700"
          />
          <circle
            stroke="currentColor"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transition: 'stroke-dashoffset 1s ease-in-out' }}
            strokeLinecap="round"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className={result.color}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className={`text-3xl font-bold ${result.color}`}>
            {result.chance}%
          </span>
        </div>
      </div>

      <div className={`text-2xl font-bold mb-2 ${result.color}`}>
        {result.label}
      </div>
      <p className="text-slate-400 text-sm text-center max-w-xs">
        Based on our algorithm, you have a <strong>{result.label.toLowerCase()}</strong> of admission.
      </p>
    </div>
  );
};
