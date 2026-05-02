export interface Lesson {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  type: 'explanation' | 'demo' | 'practice' | 'challenge';
  content: string;
  code?: string;
  solution?: string;
  hints?: string[];
}

export interface UserProgress {
  lessonsCompleted: number;
  currentStreak: number;
  totalPoints: number;
  achievements: Achievement[];
  currentLesson?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}
