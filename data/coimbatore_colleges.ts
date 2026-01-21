import { College } from "../types";

export const COLLEGES: College[] = [
  // --- Engineering (Tier 1) ---
  {
    id: "psg-tech",
    name: "PSG College of Technology",
    tier: 1,
    location: "Peelamedu, Coimbatore",
    website: "https://www.psgtech.edu/",
    courses: [
      { name: "B.E. Computer Science", category: "Engineering", minPercentage: 96, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Computer/IT"] },
      { name: "B.E. Mechanical", category: "Engineering", minPercentage: 94, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Mechanical"] },
      { name: "B.Tech IT", category: "Engineering", minPercentage: 95, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Computer/IT"] },
      { name: "B.E. ECE", category: "Engineering", minPercentage: 95, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Electronics"] },
      { name: "B.E. Robotics", category: "Engineering", minPercentage: 93, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Electronics", "Mechanical"] },
    ]
  },
  {
    id: "cit",
    name: "Coimbatore Institute of Technology (CIT)",
    tier: 1,
    location: "Avinashi Road, Coimbatore",
    website: "https://www.cit.edu.in/",
    courses: [
      { name: "B.E. Civil Engineering", category: "Engineering", minPercentage: 90, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Mechanical"] },
      { name: "B.E. EEE", category: "Engineering", minPercentage: 92, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Electronics"] },
      { name: "B.Tech Chemical", category: "Engineering", minPercentage: 88, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Teaching/Research"] },
    ]
  },
  {
    id: "skct",
    name: "Sri Krishna College of Technology",
    tier: 2,
    location: "Kovaipudur, Coimbatore",
    website: "http://www.skct.edu.in/",
    courses: [
      { name: "B.E. Computer Science", category: "Engineering", minPercentage: 85, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Computer/IT"] },
      { name: "B.Tech AI & DS", category: "Engineering", minPercentage: 86, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Computer/IT", "Teaching/Research"] },
      { name: "B.E. Mechatronics", category: "Engineering", minPercentage: 80, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Mechanical", "Electronics"] },
    ]
  },
  {
    id: "kct",
    name: "Kumaraguru College of Technology",
    tier: 1,
    location: "Saravanampatti, Coimbatore",
    website: "https://www.kct.ac.in/",
    courses: [
      { name: "B.E. Automobile", category: "Engineering", minPercentage: 88, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Mechanical"] },
      { name: "B.E. Aeronautical", category: "Engineering", minPercentage: 90, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Mechanical"] },
      { name: "B.Tech Fashion Tech", category: "Engineering", minPercentage: 85, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Design/Media"] },
    ]
  },
  {
    id: "karpagam-eng",
    name: "Karpagam College of Engineering",
    tier: 2,
    location: "Othakkalmandapam, Coimbatore",
    website: "https://kce.ac.in/",
    courses: [
      { name: "B.E. ECE", category: "Engineering", minPercentage: 75, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Electronics"] },
      { name: "B.Tech IT", category: "Engineering", minPercentage: 78, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Computer/IT"] },
    ]
  },
   {
    id: "sns-tech",
    name: "SNS College of Technology",
    tier: 3,
    location: "Saravanampatti, Coimbatore",
    website: "https://snsct.org/",
    courses: [
      { name: "B.E. CSE", category: "Engineering", minPercentage: 70, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Computer/IT"] },
      { name: "B.E. Biomedical", category: "Engineering", minPercentage: 65, requiredStream: ["Science"], requiredSubjects: ["Maths"], tags: ["Biology/Medicine", "Electronics"] },
    ]
  },

  // --- Arts & Science ---
  {
    id: "psg-cas",
    name: "PSG College of Arts and Science",
    tier: 1,
    location: "Civil Aerodrome Post, Coimbatore",
    website: "https://www.psgcas.ac.in/",
    courses: [
      { name: "B.Com Professional Accounting", category: "Arts & Science", minPercentage: 95, requiredStream: ["Commerce"], tags: ["Business/Management"] },
      { name: "B.Sc Visual Communication", category: "Arts & Science", minPercentage: 85, tags: ["Design/Media"] },
      { name: "B.Sc Psychology", category: "Arts & Science", minPercentage: 88, tags: ["Teaching/Research", "Biology/Medicine"] },
      { name: "B.Sc Computer Science", category: "Arts & Science", minPercentage: 92, tags: ["Computer/IT"] },
    ]
  },
  {
    id: "grd-cas",
    name: "Dr. G.R. Damodaran College of Science",
    tier: 2,
    location: "Avinashi Road, Coimbatore",
    website: "https://www.grd.org/grdcs/",
    courses: [
      { name: "B.Sc Bio-Technology", category: "Arts & Science", minPercentage: 80, requiredStream: ["Science"], tags: ["Biology/Medicine"] },
      { name: "B.Com IB", category: "Arts & Science", minPercentage: 82, tags: ["Business/Management"] },
      { name: "B.Sc CS", category: "Arts & Science", minPercentage: 78, tags: ["Computer/IT"] },
    ]
  },
  {
    id: "skasc",
    name: "Sri Krishna Arts and Science College",
    tier: 1,
    location: "Kuniamuthur, Coimbatore",
    website: "http://skasc.ac.in/",
    courses: [
      { name: "B.Com IT", category: "Arts & Science", minPercentage: 88, tags: ["Business/Management", "Computer/IT"] },
      { name: "BBA Logistics", category: "Arts & Science", minPercentage: 80, tags: ["Business/Management"] },
      { name: "B.Sc Data Science", category: "Arts & Science", minPercentage: 85, tags: ["Computer/IT"] },
    ]
  },
  {
    id: "hindusthan-cas",
    name: "Hindusthan College of Arts and Science",
    tier: 2,
    location: "Nava India, Coimbatore",
    website: "https://hicas.ac.in/",
    courses: [
      { name: "B.Sc Microbiology", category: "Arts & Science", minPercentage: 70, requiredStream: ["Science"], tags: ["Biology/Medicine"] },
      { name: "B.Sc Animation", category: "Arts & Science", minPercentage: 60, tags: ["Design/Media"] },
      { name: "B.Com CA", category: "Arts & Science", minPercentage: 75, tags: ["Business/Management", "Computer/IT"] },
    ]
  },
    {
    id: "ngp-cas",
    name: "Dr. N.G.P. Arts and Science College",
    tier: 2,
    location: "Kalapatti Road, Coimbatore",
    website: "https://www.drngpasc.ac.in/",
    courses: [
      { name: "B.Sc Clinical Lab Technology", category: "Arts & Science", minPercentage: 75, requiredStream: ["Science"], tags: ["Biology/Medicine"] },
      { name: "B.Sc Forensic Science", category: "Specialized", minPercentage: 80, requiredStream: ["Science"], tags: ["Forensics", "Law/Politics"] },
      { name: "B.Com Finance", category: "Arts & Science", minPercentage: 82, tags: ["Business/Management"] },
    ]
  },

  // --- Medical / Allied Health ---
  {
    id: "cmch",
    name: "Coimbatore Medical College",
    tier: 1,
    location: "Avinashi Road, Coimbatore",
    website: "http://www.cmccbe.ac.in/",
    courses: [
      { name: "MBBS", category: "Medical", minPercentage: 90, requiredStream: ["Science"], requiredSubjects: ["Biology"], entranceRequired: "NEET", tags: ["Biology/Medicine"] },
    ]
  },
  {
    id: "kmch-allied",
    name: "KMCH Institute of Allied Health Sciences",
    tier: 1,
    location: "Kalapatti, Coimbatore",
    website: "https://kmch.ac.in/",
    courses: [
      { name: "B.Sc Physician Assistant", category: "Medical", minPercentage: 85, requiredStream: ["Science"], requiredSubjects: ["Biology"], tags: ["Biology/Medicine"] },
      { name: "B.Sc Operation Theatre Tech", category: "Medical", minPercentage: 80, requiredStream: ["Science"], requiredSubjects: ["Biology"], tags: ["Biology/Medicine"] },
      { name: "B.Sc Radiography", category: "Medical", minPercentage: 78, requiredStream: ["Science"], requiredSubjects: ["Biology"], tags: ["Biology/Medicine", "Electronics"] },
    ]
  },
  {
    id: "ppg-physio",
    name: "PPG College of Physiotherapy",
    tier: 2,
    location: "Saravanampatti, Coimbatore",
    website: "https://ppg.edu.in/",
    courses: [
      { name: "BPT (Physiotherapy)", category: "Medical", minPercentage: 70, requiredStream: ["Science"], requiredSubjects: ["Biology"], tags: ["Biology/Medicine"] },
    ]
  },

  // --- Law ---
  {
    id: "glc-cbe",
    name: "Government Law College, Coimbatore",
    tier: 1,
    location: "Marudhamalai, Coimbatore",
    website: "http://glccbe.ac.in/",
    courses: [
      { name: "B.A. LL.B.", category: "Law", minPercentage: 85, entranceRequired: "CLAT", tags: ["Law/Politics"] },
    ]
  },
];
