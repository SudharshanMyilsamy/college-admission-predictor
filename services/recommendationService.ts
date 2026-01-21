import { StudentProfile, Recommendation, AdmissionChance, Course, College } from "../types";
import { COLLEGES } from "../data/coimbatore_colleges";

export const getRecommendations = (profile: StudentProfile): Recommendation[] => {
  const recommendations: Recommendation[] = [];

  for (const college of COLLEGES) {
    for (const course of college.courses) {
      // 1. Stream Check
      if (course.requiredStream && !course.requiredStream.includes(profile.stream)) {
        continue; // Skip if stream doesn't match
      }

      // 2. Subject Check (Simplified)
      if (course.requiredSubjects) {
        if (course.requiredSubjects.includes('Maths') && !profile.subjectGroup.includes('Math') && profile.subjectGroup !== 'PCM' && profile.subjectGroup !== 'PCMB') {
          // Allow some flexibility if user selected 'Other' but has relevant score, but strictly here:
          if (!['PCM', 'PCMB', 'Commerce+Maths'].includes(profile.subjectGroup)) continue;
        }
        if (course.requiredSubjects.includes('Biology') && !['PCB', 'PCMB'].includes(profile.subjectGroup)) {
           continue;
        }
      }

      // 3. Entrance Exam Check
      let isEntranceValid = true;
      if (course.entranceRequired) {
        if (course.entranceRequired === 'NEET') {
            if (!profile.entranceExams.neet || profile.entranceExams.neet < 300) isEntranceValid = false; // Mock threshold
        } else if (course.entranceRequired === 'JEE') {
            if (!profile.entranceExams.jee || profile.entranceExams.jee < 50) isEntranceValid = false; // Mock threshold
        } else if (course.entranceRequired === 'CLAT') {
            if (!profile.entranceExams.clat) isEntranceValid = false;
        }
      }

      // 4. Calculate Admission Chance
      let chance: AdmissionChance = 'Reach';
      let reason = "";

      // Delta between student marks and min percentage
      const delta = profile.twelfthPercentage - course.minPercentage;

      if (course.entranceRequired && !isEntranceValid) {
        chance = 'Reach';
        reason = `Requires valid ${course.entranceRequired} score.`;
      } else {
        if (delta >= 8) {
          chance = 'Safe';
          reason = `Your score is comfortably above the ${course.minPercentage}% cutoff.`;
        } else if (delta >= -5 && delta < 8) {
          chance = 'Target';
          reason = `Your score is close to the ${course.minPercentage}% requirement.`;
        } else {
          chance = 'Reach';
          reason = `Minimum requirement is ${course.minPercentage}%. It's a competitive stretch.`;
        }
      }

      // 5. Interest Matching
      let matchScore = 50; // Base score
      const matchingInterests = course.tags.filter(tag => profile.interests.includes(tag));
      matchScore += matchingInterests.length * 15;
      
      // Bonus for high marks
      if (profile.twelfthPercentage > course.minPercentage) matchScore += 10;
      
      // Tier bonus/penalty
      if (college.tier === 1) matchScore -= 5; // Harder to get in
      if (college.tier === 3) matchScore += 5;

      recommendations.push({
        college,
        course,
        chance,
        reason,
        matchScore: Math.min(matchScore, 100)
      });
    }
  }

  // Sort by Match Score then by Chance (Safe > Target > Reach)
  return recommendations.sort((a, b) => b.matchScore - a.matchScore);
};

export const groupRecommendations = (recs: Recommendation[]) => {
  return {
    Safe: recs.filter(r => r.chance === 'Safe'),
    Target: recs.filter(r => r.chance === 'Target'),
    Reach: recs.filter(r => r.chance === 'Reach')
  };
};
