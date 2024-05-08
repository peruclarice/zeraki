// Student interface
export interface Student {
  id: number;
  name: string;
  avatar: string;
  contactInfo: ContactInfo;
  assessments: Assessment[];
  class: string;
  level: string;
  results: Result[];
  school: School;
  dateOfBirth: string; // Could be Date type if you prefer
  gender: string;
  enrollmentDate: string; // Could be Date type if you prefer
}

// Contact information interface
export interface ContactInfo {
  email: string;
  phone: string;
}

// Assessment details interface
export interface Assessment {
  subject: string;
  score: number;
  date: string; // Could be Date type if you prefer
}

// Annual or term results interface
export interface Result {
  year: number;
  finalGrade: string;
}

// School details interface
export interface School {
  name: string;
  class: string;
  level: string;
}
