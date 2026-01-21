import React, { useState } from 'react';
import { StudentProfile, Stream, SubjectGroup, Interest, Recommendation } from './types';
import { getRecommendations, groupRecommendations } from './services/recommendationService';
import { BookOpenIcon, AcademicCapIcon, MapPinIcon, CheckBadgeIcon, ExclamationTriangleIcon, ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const STREAMS: Stream[] = ['Science', 'Commerce', 'Arts', 'Vocational'];
const SUBJECTS: SubjectGroup[] = ['PCM', 'PCB', 'PCMB', 'Commerce+Maths', 'Commerce+Comp', 'Arts+History', 'Other'];
const INTERESTS: Interest[] = [
  'Computer/IT', 'Electronics', 'Mechanical', 'Business/Management', 
  'Biology/Medicine', 'Law/Politics', 'Forensics', 'Design/Media', 'Teaching/Research'
];

const INITIAL_PROFILE: StudentProfile = {
  name: '',
  tenthPercentage: 0,
  twelfthPercentage: 0,
  stream: 'Science',
  subjectGroup: 'PCM',
  entranceExams: {},
  interests: []
};

const App: React.FC = () => {
  const [step, setStep] = useState<'form' | 'results' | 'about'>('form');
  const [profile, setProfile] = useState<StudentProfile>(INITIAL_PROFILE);
  const [results, setResults] = useState<{ Safe: Recommendation[], Target: Recommendation[], Reach: Recommendation[] } | null>(null);

  const handleInputChange = (field: keyof StudentProfile, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleEntranceChange = (exam: 'jee' | 'neet' | 'clat', value: string) => {
    setProfile(prev => ({
      ...prev,
      entranceExams: {
        ...prev.entranceExams,
        [exam]: value ? Number(value) : undefined
      }
    }));
  };

  const toggleInterest = (interest: Interest) => {
    setProfile(prev => {
      const current = prev.interests;
      if (current.includes(interest)) {
        return { ...prev, interests: current.filter(i => i !== interest) };
      }
      return { ...prev, interests: [...current, interest] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recs = getRecommendations(profile);
    const grouped = groupRecommendations(recs);
    setResults(grouped);
    setStep('results');
    window.scrollTo(0,0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setStep('form')}>
              <AcademicCapIcon className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent hidden sm:block">
                CBE College Guide
              </span>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep('form')} className={`text-sm font-medium hover:text-indigo-400 transition ${step === 'form' ? 'text-indigo-400' : 'text-slate-400'}`}>Predictor</button>
              <button onClick={() => setStep('about')} className={`text-sm font-medium hover:text-indigo-400 transition ${step === 'about' ? 'text-indigo-400' : 'text-slate-400'}`}>About</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {step === 'form' && (
          <div className="animate-fade-in space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Find Your Dream College in Coimbatore</h1>
              <p className="text-slate-400 max-w-lg mx-auto">Enter your academic details and interests to get personalized college and course recommendations categorized by admission probability.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
              
              {/* Personal & Marks */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">1</span>
                  Academic Profile
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                    <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" 
                      value={profile.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="e.g. Aditi Rao" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-300">10th %</label>
                      <input required type="number" min="0" max="100" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" 
                        value={profile.tenthPercentage || ''} onChange={(e) => handleInputChange('tenthPercentage', Number(e.target.value))} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-slate-300">12th %</label>
                      <input required type="number" min="0" max="100" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" 
                        value={profile.twelfthPercentage || ''} onChange={(e) => handleInputChange('twelfthPercentage', Number(e.target.value))} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stream & Exams */}
              <div className="space-y-4">
                 <h3 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">2</span>
                  Stream & Exams
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-300">12th Stream</label>
                    <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                      value={profile.stream} onChange={(e) => handleInputChange('stream', e.target.value)}>
                      {STREAMS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-slate-300">Subject Group</label>
                    <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                      value={profile.subjectGroup} onChange={(e) => handleInputChange('subjectGroup', e.target.value)}>
                      {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                
                {/* Optional Entrance Exams */}
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                  <span className="text-xs text-slate-400 uppercase tracking-wide font-semibold block mb-3">Entrance Scores (Optional)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                     <input type="number" placeholder="JEE Score" className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                      onChange={(e) => handleEntranceChange('jee', e.target.value)} />
                     <input type="number" placeholder="NEET Score" className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                      onChange={(e) => handleEntranceChange('neet', e.target.value)} />
                     <input type="number" placeholder="CLAT Rank" className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
                      onChange={(e) => handleEntranceChange('clat', e.target.value)} />
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-indigo-400 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 text-xs">3</span>
                  Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {INTERESTS.map(interest => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                        profile.interests.includes(interest)
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2">
                Predict My Colleges <ArrowRightIcon className="h-5 w-5" />
              </button>

            </form>
          </div>
        )}

        {step === 'results' && results && (
          <div className="animate-fade-in-up space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Recommended for {profile.name}</h2>
                <p className="text-slate-400 text-sm">Based on {profile.twelfthPercentage}% in {profile.stream}</p>
              </div>
              <button onClick={() => setStep('form')} className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition">
                <ArrowPathIcon className="h-4 w-4" /> Modify Search
              </button>
            </div>

            {/* SAFE */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckBadgeIcon className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-emerald-400">Safe <span className="text-slate-500 text-sm font-normal ml-2">(High Probability)</span></h3>
              </div>
              <div className="grid gap-4">
                {results.Safe.length === 0 ? <p className="text-slate-500 italic ml-2">No colleges match the "Safe" criteria broadly. Try improving marks or checking Target.</p> : 
                  results.Safe.map((rec, i) => <ResultCard key={i} rec={rec} />)}
              </div>
            </section>

            {/* TARGET */}
            <section>
               <div className="flex items-center gap-3 mb-4">
                <div className="h-6 w-6 rounded-full border-4 border-amber-400"></div>
                <h3 className="text-xl font-bold text-amber-400">Target <span className="text-slate-500 text-sm font-normal ml-2">(Good Match)</span></h3>
              </div>
              <div className="grid gap-4">
                {results.Target.length === 0 ? <p className="text-slate-500 italic ml-2">No colleges found in the "Target" range.</p> : 
                  results.Target.map((rec, i) => <ResultCard key={i} rec={rec} />)}
              </div>
            </section>

            {/* REACH */}
            <section>
               <div className="flex items-center gap-3 mb-4">
                <ExclamationTriangleIcon className="h-6 w-6 text-rose-400" />
                <h3 className="text-xl font-bold text-rose-400">Reach <span className="text-slate-500 text-sm font-normal ml-2">(Ambitious)</span></h3>
              </div>
              <div className="grid gap-4">
                 {results.Reach.length === 0 ? <p className="text-slate-500 italic ml-2">No colleges categorized as "Reach".</p> : 
                  results.Reach.map((rec, i) => <ResultCard key={i} rec={rec} />)}
              </div>
            </section>
            
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg text-center text-xs text-slate-500 mt-12">
              Disclaimer: This tool provides guidance only based on past trends and simplified logic. Final admission depends on official counselling, cutoff fluctuations, and college discretion.
            </div>
          </div>
        )}

        {step === 'about' && (
           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-2xl mx-auto animate-fade-in">
             <h2 className="text-2xl font-bold mb-4">About the Predictor</h2>
             <div className="space-y-4 text-slate-300">
                <p>This application helps students in Coimbatore find colleges that match their academic profile and personal interests.</p>
                <h3 className="font-semibold text-white">How it works:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-emerald-400">Safe:</strong> Your marks are likely well above the previous year's cutoffs (>8% buffer).</li>
                  <li><strong className="text-amber-400">Target:</strong> Your marks are competitive and close to the expected requirement (within ±7%).</li>
                  <li><strong className="text-rose-400">Reach:</strong> Admission is difficult due to high cutoffs or missing entrance exam scores.</li>
                </ul>
                <p>We analyze 40+ top colleges in Coimbatore including PSG, CIT, KCT, and more across Engineering, Arts, and Medical streams.</p>
                <button onClick={() => setStep('form')} className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-medium">Back to Predictor</button>
             </div>
           </div>
        )}

      </main>
    </div>
  );
};

const ResultCard: React.FC<{ rec: Recommendation }> = ({ rec }) => {
  const borderColor = rec.chance === 'Safe' ? 'border-emerald-500/30 hover:border-emerald-500/50' : 
                    rec.chance === 'Target' ? 'border-amber-500/30 hover:border-amber-500/50' : 
                    'border-rose-500/30 hover:border-rose-500/50';

  return (
    <div className={`bg-slate-900 border ${borderColor} rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:bg-slate-800/80 group`}>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-bold text-slate-100 group-hover:text-white">{rec.college.name}</h4>
          <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
            <MapPinIcon className="h-3 w-3" /> {rec.college.location}
            <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
            <span className={`${rec.college.tier === 1 ? 'text-yellow-500' : 'text-slate-400'}`}>Tier {rec.college.tier}</span>
          </div>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded border ${
          rec.course.category === 'Engineering' ? 'bg-blue-900/30 border-blue-800 text-blue-400' : 
          rec.course.category === 'Medical' ? 'bg-pink-900/30 border-pink-800 text-pink-400' :
          'bg-purple-900/30 border-purple-800 text-purple-400'
        }`}>
          {rec.course.category}
        </span>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-indigo-300 font-medium">{rec.course.name}</div>
          <div className="text-xs text-slate-500 mt-1">
             Eligibility: {rec.course.minPercentage}% {rec.course.entranceRequired ? `+ ${rec.course.entranceRequired}` : ''}
          </div>
          <div className="text-xs text-slate-400 mt-1 italic">
             {rec.reason}
          </div>
        </div>
        
        {rec.college.website && (
          <a href={rec.college.website} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            Visit Website <ArrowRightIcon className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default App;
