export type Stream = 'Science' | 'Commerce' | 'Arts' | 'Vocational';
export type SubjectGroup = 'PCM' | 'PCB' | 'PCMB' | 'Commerce+Maths' | 'Commerce+Comp' | 'Arts+History' | 'Other';
export type Interest = 
  | 'Computer/IT' 
  | 'Electronics' 
  | 'Mechanical' 
  | 'Business/Management' 
  | 'Biology/Medicine' 
  | 'Law/Politics' 
  | 'Forensics' 
  | 'Design/Media' 
  | 'Teaching/Research';

export interface StudentProfile {
  name: string;
  tenthPercentage: number;
  twelfthPercentage: number;
  stream: Stream;
  subjectGroup: SubjectGroup;
  entranceExams: {
    jee?: number;
    neet?: number;
    clat?: number; // Rank
  };
  interests: Interest[];
}

export type Category = 'Engineering' | 'Arts & Science' | 'Medical' | 'Law' | 'Management' | 'Specialized';

export interface Course {
  name: string;
  category: Category;
  minPercentage: number;
  requiredStream?: Stream[];
  requiredSubjects?: string[]; // Simplified check
  entranceRequired?: 'JEE' | 'NEET' | 'CLAT';
  tags: Interest[];
}

export interface College {
  id: string;
  name: string;
  tier: 1 | 2 | 3; // 1 = Top, 2 = Mid, 3 = Emerging
  location: string; // Defaults to Coimbatore
  website?: string;
  courses: Course[];
}

export type AdmissionChance = 'Safe' | 'Target' | 'Reach';

export interface Recommendation {
  college: College;
  course: Course;
  chance: AdmissionChance;
  reason: string;
  matchScore: number; // 0-100 based on interest + marks
}

export interface PredictionResult {
  chance: number;
  label: 'High Chance' | 'Medium Chance' | 'Low Chance';
  color: string;
}