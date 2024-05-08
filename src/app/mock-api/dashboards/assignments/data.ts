// assignments.data.ts

export interface Assignment {
    id: number;
    title: string;
    subtitle: string;
    subject: string;
    teacherId: number;  // Foreign key to reference a teacher
    description: string;
    date: string;       // Format YYYY-MM-DD for simplicity
    time: string;       // Time in HH:MM format
    status: 'active' | 'upcoming'; // Status of the assignment
  }
  
  // Sample data
  export const ASSIGNMENTS: Assignment[] = [
    {
      id: 1,
      title: "Introduction to Algebra",
      subtitle: "Basic Concepts",
      subject: "Mathematics",
      teacherId: 101,
      description: "This assignment covers the fundamental concepts of algebra including variables, equations, and simplification techniques.",
      date: "2024-05-10",
      time: "10:00",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Literature Essay",
      subtitle: "Character Analysis",
      subject: "English",
      teacherId: 102,
      description: "Write a detailed character analysis based on the assigned reading. Focus on character development and thematic significance.",
      date: "2024-05-08",
      time: "12:00",
      status: "active"
    },
    {
      id: 3,
      title: "Photosynthesis",
      subtitle: "Plant Biology",
      subject: "Biology",
      teacherId: 103,
      description: "Explore the process of photosynthesis in plants and explain its importance to the ecosystem.",
      date: "2024-05-15",
      time: "09:00",
      status: "upcoming"
    }
  ];
  
  