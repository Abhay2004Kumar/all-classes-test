export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
  timeLimit: number;
  roundType: 'observe-reflect' | 'scientific-puzzle';
  subject: string;
  image?: string; // Optional image URL for question illustration
}

export interface QuizExam {
  id: string;
  name: string;
  description: string;
  questions: QuizQuestion[];
  timeLimit: number; // Total time limit in seconds
  subjectInfo: {
    name: string;
    description: string;
  };
}

// Helper function to create questions with consistent structure
const createQuestions = (baseId: string, subject: string, questions: Array<{
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
  timeLimit?: number;
}>): QuizQuestion[] => {
  return questions.map((q, i) => ({
    id: `${baseId}-${i + 1}`,
    question: q.question,
    options: q.options,
    correctAnswer: q.correctAnswer,
    difficulty: q.difficulty,
    explanation: q.explanation,
    timeLimit: q.timeLimit || 30,
    roundType: Math.random() > 0.5 ? 'observe-reflect' : 'scientific-puzzle',
    subject: subject
  }));
};

// Function to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Common questions that can be reused
const commonPhysicsQuestions = createQuestions('phy', 'Physics Fundamentals', [
  {
    question: 'Which of the following is a vector quantity?',
    options: [
      'Temperature',
      'Mass',
      'Force',
      'Energy'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 30,
    explanation: 'Force has both magnitude and direction, making it a vector quantity.'
  },
  {
    question: 'The SI unit of electric current is:',
    options: [
      'Volt',
      'Ohm',
      'Ampere',
      'Watt'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 25,
    explanation: 'The SI unit of electric current is Ampere (A).'
  },
  {
    question: 'A body is moving with constant speed in a circular path. What is the work done by the centripetal force?',
    options: [
      'Positive',
      'Negative',
      'Zero',
      'Depends on the radius of the path'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    timeLimit: 45,
    explanation: 'The centripetal force is always perpendicular to the displacement, so work done is zero.'
  },
  {
    question: 'The phenomenon of light bending around obstacles is called:',
    options: [
      'Reflection',
      'Refraction',
      'Diffraction',
      'Dispersion'
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    timeLimit: 35,
    explanation: 'Diffraction is the bending of light around obstacles or through small openings.'
  },
  {
    question: 'The energy of a photon is directly proportional to its:',
    options: [
      'Wavelength',
      'Frequency',
      'Amplitude',
      'Speed'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 30,
    explanation: 'According to Planck\'s equation, E = hν, where ν is the frequency.'
  }
]);

const commonChemistryQuestions = createQuestions('chem', 'Chemistry Basics', [
  {
    question: 'The most electronegative element is:',
    options: [
      'Fluorine',
      'Chlorine',
      'Oxygen',
      'Nitrogen'
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    timeLimit: 25,
    explanation: 'Fluorine is the most electronegative element with a value of 3.98 on the Pauling scale.'
  },
  {
    question: 'Which of the following is a noble gas?',
    options: [
      'Chlorine',
      'Bromine',
      'Krypton',
      'Phosphorus'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 20,
    explanation: 'Krypton (Kr) is a noble gas in Group 18 of the periodic table.'
  },
  {
    question: 'The pH of a neutral solution at 25°C is:',
    options: [
      '0',
      '7',
      '14',
      '1'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 20,
    explanation: 'A pH of 7 is neutral at 25°C, indicating equal concentrations of H⁺ and OH⁻ ions.'
  },
  {
    question: 'Which of the following is NOT a state of matter?',
    options: [
      'Solid',
      'Liquid',
      'Gas',
      'Energy'
    ],
    correctAnswer: 3,
    difficulty: 'easy',
    timeLimit: 25,
    explanation: 'The four fundamental states of matter are solid, liquid, gas, and plasma. Energy is not a state of matter.'
  },
  {
    question: 'The chemical formula of water is:',
    options: [
      'CO₂',
      'H₂O',
      'NaCl',
      'O₂'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 20,
    explanation: 'Water is composed of two hydrogen atoms and one oxygen atom, hence H₂O.'
  }
]);

const commonMathsQuestions = createQuestions('math', 'Mathematics', [
  {
    question: 'What is the value of π (pi) to two decimal places?',
    options: [
      '3.12',
      '3.14',
      '3.16',
      '3.18'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 20,
    explanation: 'The value of π to two decimal places is 3.14.'
  },
  {
    question: 'What is the square root of 144?',
    options: [
      '10',
      '11',
      '12',
      '13'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 20,
    explanation: '12 × 12 = 144, so the square root of 144 is 12.'
  },
  {
    question: 'Solve for x: 2x + 5 = 15',
    options: [
      '5',
      '10',
      '15',
      '20'
    ],
    correctAnswer: 0,
    difficulty: 'easy',
    timeLimit: 25,
    explanation: '2x + 5 = 15 → 2x = 15 - 5 → 2x = 10 → x = 5'
  },
  {
    question: 'What is the area of a rectangle with length 8 and width 5?',
    options: [
      '13',
      '26',
      '35',
      '40'
    ],
    correctAnswer: 3,
    difficulty: 'easy',
    timeLimit: 20,
    explanation: 'Area of rectangle = length × width = 8 × 5 = 40'
  },
  {
    question: 'What is 25% of 200?',
    options: [
      '25',
      '50',
      '75',
      '100'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 20,
    explanation: '25% of 200 = (25/100) × 200 = 50'
  }
]);

const commonBiologyQuestions = createQuestions('bio', 'Biology Fundamentals', [
  {
    question: 'Which organelle is known as the powerhouse of the cell?',
    options: [
      'Nucleus',
      'Mitochondria',
      'Ribosome',
      'Golgi Apparatus'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 25,
    explanation: 'Mitochondria are known as the powerhouse of the cell because they generate most of the cell\'s supply of ATP.'
  },
  {
    question: 'Photosynthesis occurs in which organelle?',
    options: [
      'Mitochondria',
      'Chloroplast',
      'Nucleus',
      'Vacuole'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 25,
    explanation: 'Photosynthesis occurs in the chloroplasts of plant cells, which contain the green pigment chlorophyll.'
  },
  {
    question: 'Which of the following is NOT a type of blood cell?',
    options: [
      'Erythrocyte',
      'Leukocyte',
      'Thrombocyte',
      'Osteocyte'
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    timeLimit: 30,
    explanation: 'Osteocytes are bone cells, not blood cells. The three main types of blood cells are erythrocytes (red blood cells), leukocytes (white blood cells), and thrombocytes (platelets).'
  },
  {
    question: 'Which of these is the basic unit of heredity?',
    options: [
      'Cell',
      'Gene',
      'Protein',
      'Enzyme'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 25,
    explanation: 'A gene is the basic physical and functional unit of heredity, made up of DNA.'
  },
  {
    question: 'Which system in the human body is responsible for producing hormones?',
    options: [
      'Nervous system',
      'Endocrine system',
      'Digestive system',
      'Respiratory system'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 25,
    explanation: 'The endocrine system is responsible for producing and secreting hormones that regulate various bodily functions.'
  }
]);

// Puzzle questions for scientific thinking
const puzzleQuestions = createQuestions('puzzle', 'Puzzles', [
  {
    question: 'If all trees were cut down in your locality, what would happen to the temperature and rainfall patterns?',
    options: [
      'No change',
      'Temperature rises, rainfall decreases',
      'Temperature drops, rainfall increases',
      'Both temperature and rainfall increase'
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    timeLimit: 60,
    explanation: 'Trees maintain microclimate through transpiration and shade - their loss leads to higher temperatures and reduced rainfall.'
  },
  {
    question: 'A farmer has 17 sheep and all but 9 die. How many are left?',
    options: [
      '8',
      '9',
      '17',
      '0'
    ],
    correctAnswer: 1,
    difficulty: 'easy',
    timeLimit: 45,
    explanation: 'The phrase "all but 9 die" means 9 sheep are still alive.'
  },
  {
    question: 'Which number should come next in the series: 2, 4, 8, 16, ___',
    options: [
      '18',
      '24',
      '32',
      '64'
    ],
    correctAnswer: 2,
    difficulty: 'easy',
    timeLimit: 40,
    explanation: 'Each number is multiplied by 2 to get the next number: 2×2=4, 4×2=8, 8×2=16, 16×2=32.'
  }
]);

// Helper function to create exam data
const createExam = (
  id: string,
  name: string,
  description: string,
  timeLimit: number,
  subjectName: string,
  subjectDescription: string,
  subjectQuestions: Array<{subject: string; questions: QuizQuestion[]}>
): QuizExam => {
  // Group questions by subject
  const questionsBySubject = new Map<string, QuizQuestion[]>();
  
  subjectQuestions.forEach(({subject, questions}) => {
    if (!questionsBySubject.has(subject)) {
      questionsBySubject.set(subject, []);
    }
    questionsBySubject.get(subject)?.push(...questions);
  });
  
  // Flatten the questions while maintaining subject grouping
  const questions: QuizQuestion[] = [];
  questionsBySubject.forEach((subjectQs, subject) => {
    questions.push(...subjectQs);
  });

  return {
    id,
    name,
    description,
    timeLimit,
    subjectInfo: {
      name: subjectName,
      description: subjectDescription
    },
    questions
  };
};

export const quizExams: Record<string, QuizExam> = {
  foundation: createExam(
    'foundation',
    'Foundation (Class 9-10)',
    'Build strong conceptual understanding in core subjects',
    1800, // 30 minutes
    'Science & Mathematics',
    'Combined questions from Science and Mathematics for Class 9-10 students',
    [
      { subject: 'Physics', questions: [...commonPhysicsQuestions] },
      { subject: 'Chemistry', questions: [...commonChemistryQuestions] },
      { subject: 'Mathematics', questions: [...commonMathsQuestions] },
      { subject: 'Biology', questions: [...commonBiologyQuestions] }
    ]
  ),
  jee: createExam(
    'jee',
    'JEE (Joint Entrance Examination)',
    'Prepare for engineering entrance with comprehensive study material',
    3600, // 60 minutes
    'PCM (Physics, Chemistry, Mathematics)',
    'Combined questions from Physics, Chemistry, and Mathematics for JEE preparation',
    [
      { subject: 'Physics', questions: [...commonPhysicsQuestions] },
      { subject: 'Chemistry', questions: [...commonChemistryQuestions] },
      { subject: 'Mathematics', questions: [...commonMathsQuestions] }
    ]
  ),
  neet: createExam(
    'neet',
    'NEET (National Eligibility cum Entrance Test)',
    'Prepare for medical entrance with comprehensive study material',
    3600, // 60 minutes
    'PCB (Physics, Chemistry, Biology)',
    'Combined questions from Physics, Chemistry, and Biology for NEET preparation',
    [
      { subject: 'Physics', questions: [...commonPhysicsQuestions] },
      { subject: 'Chemistry', questions: [...commonChemistryQuestions] },
      { subject: 'Biology', questions: [...commonBiologyQuestions] }
    ]
  )
};