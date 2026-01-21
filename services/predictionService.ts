import { StudentProfile, PredictionResult } from '../types';

export const calculateAdmissionChance = (profile: StudentProfile): PredictionResult => {
  // Weighted algorithm to simulate a trained regression model
  // Weights adapted for available profile data:
  // 12th Grade: 70%
  // 10th Grade: 30%
  // Entrance exams provide bonus points

  const w12th = 0.70;
  const w10th = 0.30;

  // Normalize inputs to 0-1 scale
  const norm12th = Math.min(Math.max(profile.twelfthPercentage, 0), 100) / 100;
  const norm10th = Math.min(Math.max(profile.tenthPercentage, 0), 100) / 100;

  let rawScore = (norm12th * w12th) + (norm10th * w10th);

  // Entrance Exam Bonus
  if (profile.entranceExams.jee) {
    // Normalize JEE roughly (assuming score out of ~300)
    rawScore += Math.min(profile.entranceExams.jee / 300, 0.1); 
  }
  if (profile.entranceExams.neet) {
    // Normalize NEET roughly (score out of 720)
    rawScore += Math.min(profile.entranceExams.neet / 720, 0.1);
  }
  
  // Cap score at 1
  rawScore = Math.min(rawScore, 1);

  const percentage = Math.round(rawScore * 100);

  let label: PredictionResult['label'] = 'Low Chance';
  let color = 'text-red-400';

  if (percentage >= 80) {
    label = 'High Chance';
    color = 'text-emerald-400';
  } else if (percentage >= 50) {
    label = 'Medium Chance';
    color = 'text-amber-400';
  }

  return {
    chance: percentage,
    label,
    color
  };
};