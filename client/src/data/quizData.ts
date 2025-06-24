export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
  timeLimit: number;
  subject?: string;
  topic?: string;
}

export interface QuizTopic {
  id: string;
  name: string;
  description: string;
  subtopics: string[];
  questions: QuizQuestion[];
  roundType: 'observe-reflect' | 'scientific-puzzle';
}

export interface QuizSubject {
  id: string;
  name: string;
  description?: string;
  topics: QuizTopic[];
}

export interface QuizExam {
  id: string;
  name: string;
  description: string;
  subjects: QuizSubject[];
}

// Common questions that can be reused
const commonPhysicsQuestions: QuizQuestion[] = [
  {
    id: 'phy-1',
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
    explanation: 'Force has both magnitude and direction, making it a vector quantity.',
    subject: 'Physics',
    topic: 'Vectors'
  },
  {
    id: 'phy-2',
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
    explanation: 'The SI unit of electric current is Ampere (A).',
    subject: 'Physics',
    topic: 'Electricity'
  },
  {
    id: 'phy-3',
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
    explanation: 'The centripetal force is always perpendicular to the displacement, so work done is zero.',
    subject: 'Physics',
    topic: 'Circular Motion'
  },
  {
    id: 'phy-4',
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
    explanation: 'Diffraction is the bending of light around obstacles or through small openings.',
    subject: 'Physics',
    topic: 'Wave Optics'
  },
  {
    id: 'phy-5',
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
    explanation: 'According to Planck\'s equation, E = hν, where ν is the frequency.',
    subject: 'Physics',
    topic: 'Quantum Physics'
  }
];

const commonChemistryQuestions: QuizQuestion[] = [
  {
    id: 'chem-1',
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
    explanation: 'Fluorine is the most electronegative element with a value of 3.98 on the Pauling scale.',
    subject: 'Chemistry',
    topic: 'Periodic Table'
  },
  {
    id: 'chem-2',
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
    explanation: 'Krypton (Kr) is a noble gas in Group 18 of the periodic table.',
    subject: 'Chemistry',
    topic: 'Periodic Table'
  },
  {
    id: 'chem-3',
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
    explanation: 'A pH of 7 is neutral at 25°C, indicating equal concentrations of H⁺ and OH⁻ ions.',
    subject: 'Chemistry',
    topic: 'Acids and Bases'
  },
  {
    id: 'chem-4',
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
    explanation: 'The four fundamental states of matter are solid, liquid, gas, and plasma. Energy is not a state of matter.',
    subject: 'Chemistry',
    topic: 'States of Matter'
  },
  {
    id: 'chem-5',
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
    explanation: 'Water is composed of two hydrogen atoms and one oxygen atom, hence H₂O.',
    subject: 'Chemistry',
    topic: 'Chemical Formulas'
  }
];

const commonMathsQuestions: QuizQuestion[] = [
  {
    id: 'math-1',
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
    explanation: 'The value of π to two decimal places is 3.14.',
    subject: 'Mathematics',
    topic: 'Constants'
  },
  {
    id: 'math-2',
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
    explanation: '12 × 12 = 144, so the square root of 144 is 12.',
    subject: 'Mathematics',
    topic: 'Square Roots'
  },
  {
    id: 'math-3',
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
    explanation: '2x + 5 = 15 → 2x = 15 - 5 → 2x = 10 → x = 5',
    subject: 'Mathematics',
    topic: 'Linear Equations'
  },
  {
    id: 'math-4',
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
    explanation: 'Area of rectangle = length × width = 8 × 5 = 40',
    subject: 'Mathematics',
    topic: 'Geometry'
  },
  {
    id: 'math-5',
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
    explanation: '25% of 200 = (25/100) × 200 = 50',
    subject: 'Mathematics',
    topic: 'Percentages'
  }
];

const commonBiologyQuestions: QuizQuestion[] = [
  {
    id: 'bio-1',
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
    explanation: 'Mitochondria are known as the powerhouse of the cell because they generate most of the cell\'s supply of ATP.',
    subject: 'Biology',
    topic: 'Cell Biology'
  },
  {
    id: 'bio-2',
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
    explanation: 'Photosynthesis occurs in the chloroplasts of plant cells, which contain the green pigment chlorophyll.',
    subject: 'Biology',
    topic: 'Plant Biology'
  },
  {
    id: 'bio-3',
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
    explanation: 'Osteocytes are bone cells, not blood cells. The three main types of blood cells are erythrocytes (red blood cells), leukocytes (white blood cells), and thrombocytes (platelets).',
    subject: 'Biology',
    topic: 'Human Physiology'
  },
  {
    id: 'bio-4',
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
    explanation: 'A gene is the basic physical and functional unit of heredity, made up of DNA.',
    subject: 'Biology',
    topic: 'Genetics'
  },
  {
    id: 'bio-5',
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
    explanation: 'The endocrine system is responsible for producing and secreting hormones that regulate various bodily functions.',
    subject: 'Biology',
    topic: 'Human Physiology'
  }
];

// Puzzle questions for scientific thinking
const puzzleQuestions: QuizQuestion[] = [
  {
    id: 'puzzle-1',
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
    id: 'puzzle-2',
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
    id: 'puzzle-3',
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
];

export const quizExams: Record<string, QuizExam> = {
  foundation: {
    id: 'foundation',
    name: 'Foundation (Class 9-10)',
    description: 'Build strong conceptual understanding in core subjects',
    subjects: [
      {
        id: 'science',
        name: 'Science',
        description: 'Explore the fundamentals of Physics, Chemistry, and Biology',
        topics: [
          {
            id: 'observe-reflect',
            name: 'Observe & Reflect',
            description: 'Conceptual rapid-fire questions to test your understanding',
            subtopics: ['Physics', 'Chemistry', 'Biology'],
            roundType: 'observe-reflect',
            questions: [
              ...commonPhysicsQuestions.slice(0, 2),
              ...commonChemistryQuestions.slice(0, 2),
              ...commonBiologyQuestions.slice(0, 2)
            ]
          },
          {
            id: 'scientific-puzzle',
            name: 'Scientific Puzzle',
            description: 'Critical thinking challenges to develop problem-solving skills',
            subtopics: ['Problem Solving', 'Analysis'],
            roundType: 'scientific-puzzle',
            questions: puzzleQuestions
          }
        ]
      },
      {
        id: 'mathematics',
        name: 'Mathematics',
        description: 'Master the fundamentals of numbers and problem-solving',
        topics: [
          {
            id: 'math-basics',
            name: 'Math Basics',
            description: 'Fundamental mathematical concepts and operations',
            subtopics: ['Arithmetic', 'Algebra', 'Geometry'],
            roundType: 'observe-reflect',
            questions: commonMathsQuestions
          },
          {
            id: 'math-puzzles',
            name: 'Math Puzzles',
            description: 'Challenging problems to enhance logical thinking',
            subtopics: ['Logic', 'Patterns', 'Problem Solving'],
            roundType: 'scientific-puzzle',
            questions: puzzleQuestions
          }
        ]
      }
    ]
  },
  jee: {
    id: 'jee',
    name: 'JEE (Joint Entrance Examination)',
    description: 'Prepare for engineering entrance with advanced concepts',
    subjects: [
      {
        id: 'physics',
        name: 'Physics',
        description: 'Master the principles of Physics for engineering entrance',
        topics: [
          {
            id: 'physics-concepts',
            name: 'Physics Concepts',
            description: 'Core concepts and theories in Physics',
            subtopics: ['Mechanics', 'Electrodynamics', 'Modern Physics'],
            roundType: 'observe-reflect',
            questions: commonPhysicsQuestions
          },
          {
            id: 'physics-problems',
            name: 'Physics Problems',
            description: 'Challenging numerical problems and derivations',
            subtopics: ['Problem Solving', 'Numericals'],
            roundType: 'scientific-puzzle',
            questions: [
              ...commonPhysicsQuestions.slice(2),
              ...puzzleQuestions.slice(0, 2)
            ]
          }
        ]
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        description: 'In-depth study of Physical, Organic and Inorganic Chemistry',
        topics: [
          {
            id: 'chemistry-concepts',
            name: 'Chemistry Concepts',
            description: 'Fundamental concepts in Chemistry',
            subtopics: ['Physical', 'Organic', 'Inorganic'],
            roundType: 'observe-reflect',
            questions: commonChemistryQuestions
          },
          {
            id: 'chemistry-problems',
            name: 'Chemistry Problems',
            description: 'Challenging problems and mechanisms',
            subtopics: ['Reactions', 'Mechanisms', 'Numericals'],
            roundType: 'scientific-puzzle',
            questions: [
              ...commonChemistryQuestions.slice(2),
              ...puzzleQuestions.slice(1, 3)
            ]
          }
        ]
      },
      {
        id: 'mathematics-jee',
        name: 'Mathematics',
        description: 'Advanced Mathematics for engineering entrance',
        topics: [
          {
            id: 'math-concepts',
            name: 'Math Concepts',
            description: 'Advanced mathematical concepts',
            subtopics: ['Calculus', 'Algebra', 'Coordinate Geometry'],
            roundType: 'observe-reflect',
            questions: commonMathsQuestions
          },
          {
            id: 'math-problems',
            name: 'Math Problems',
            description: 'Challenging mathematical problems',
            subtopics: ['Problem Solving', 'Derivations'],
            roundType: 'scientific-puzzle',
            questions: [
              ...commonMathsQuestions.slice(2),
              ...puzzleQuestions
            ]
          }
        ]
      }
    ]
  },
  neet: {
    id: 'neet',
    name: 'NEET (National Eligibility cum Entrance Test)',
    description: 'Prepare for medical entrance with comprehensive study material',
    subjects: [
      {
        id: 'biology-neet',
        name: 'Biology',
        description: 'In-depth study of Botany and Zoology',
        topics: [
          {
            id: 'botany',
            name: 'Botany',
            description: 'Study of plant life',
            subtopics: ['Plant Physiology', 'Genetics', 'Ecology'],
            roundType: 'observe-reflect',
            questions: commonBiologyQuestions
          },
          {
            id: 'zoology',
            name: 'Zoology',
            description: 'Study of animal life',
            subtopics: ['Human Physiology', 'Genetics', 'Evolution'],
            roundType: 'scientific-puzzle',
            questions: [
              ...commonBiologyQuestions.slice(2),
              ...puzzleQuestions
            ]
          }
        ]
      },
      {
        id: 'physics-neet',
        name: 'Physics',
        description: 'Physics concepts for medical entrance',
        topics: [
          {
            id: 'physics-concepts-neet',
            name: 'Physics Concepts',
            description: 'Core physics concepts for medical entrance',
            subtopics: ['Mechanics', 'Thermodynamics', 'Optics'],
            roundType: 'observe-reflect',
            questions: commonPhysicsQuestions
          },
          {
            id: 'physics-applications',
            name: 'Physics Applications',
            description: 'Application of physics in medical field',
            subtopics: ['Medical Instruments', 'Diagnostics', 'Therapy'],
            roundType: 'scientific-puzzle',
            questions: [
              ...commonPhysicsQuestions.slice(2),
              ...puzzleQuestions
            ]
          }
        ]
      },
      {
        id: 'chemistry-neet',
        name: 'Chemistry',
        description: 'Chemistry for medical sciences',
        topics: [
          {
            id: 'chemistry-concepts-neet',
            name: 'Chemistry Concepts',
            description: 'Core chemistry concepts for medical entrance',
            subtopics: ['Organic', 'Inorganic', 'Physical'],
            roundType: 'observe-reflect',
            questions: commonChemistryQuestions
          },
          {
            id: 'biochemistry',
            name: 'Biochemistry',
            description: 'Chemistry of living organisms',
            subtopics: ['Biomolecules', 'Metabolism', 'Enzymes'],
            roundType: 'scientific-puzzle',
            questions: [
              ...commonChemistryQuestions.slice(2),
              ...puzzleQuestions
            ]
          }
        ]
      }
    ]
  }
};