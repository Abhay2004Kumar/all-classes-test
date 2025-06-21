export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty?: 'easy' | 'medium' | 'hard';
  explanation?: string;
}

export interface QuizTopic {
  id: string;
  name: string;
  description: string;
  subtopics: string[];
  questions?: QuizQuestion[];
}

export interface QuizSubject {
  id: string;
  name: string;
  topics: QuizTopic[];
}

export interface QuizExam {
  id: string;
  name: string;
  subjects: QuizSubject[];
}

export const quizExams: Record<string, QuizExam> = {
  jee: {
    id: 'jee',
    name: 'JEE',
    subjects: [
      {
        id: 'physics',
        name: 'Physics',
        topics: [
          {
            id: 'mechanics',
            name: 'Mechanics',
            description: 'Kinematics, Laws of Motion, Work, Energy and Power',
            subtopics: ['Kinematics', 'Laws of Motion', 'Work, Energy and Power', 'Rotational Motion'],
            questions: [
              {
                id: 'mech-1',
                question: 'What is Newton\'s first law of motion?',
                options: [
                  'An object will remain at rest unless acted upon by an external force',
                  'Force equals mass times acceleration',
                  'For every action there is an equal and opposite reaction',
                  'Energy cannot be created or destroyed'
                ],
                correctAnswer: 0,
                difficulty: 'easy',
                explanation: 'Newton\'s first law states that an object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.'
              },
              {
                id: 'mech-2',
                question: 'What is the unit of force?',
                options: ['Joule', 'Watt', 'Newton', 'Pascal'],
                correctAnswer: 2,
                difficulty: 'easy',
                explanation: 'The SI unit of force is Newton (N), named after Sir Isaac Newton.'
              },
              {
                id: 'mech-3',
                question: 'Which of these is NOT a vector quantity?',
                options: ['Velocity', 'Acceleration', 'Force', 'Mass'],
                correctAnswer: 3,
                difficulty: 'medium',
                explanation: 'Mass is a scalar quantity, while velocity, acceleration, and force are vector quantities.'
              },
              {
                id: 'mech-4',
                question: 'What is the moment of inertia of a solid sphere about its diameter?',
                options: ['2/5 MR²', '1/2 MR²', '2/3 MR²', '1/3 MR²'],
                correctAnswer: 0,
                difficulty: 'hard',
                explanation: 'The moment of inertia of a solid sphere about its diameter is given by the formula I = 2/5 MR², where M is the mass and R is the radius.'
              }
            ]
          },
          {
            id: 'thermodynamics',
            name: 'Thermodynamics',
            description: 'Heat, Temperature and Calorimetry',
            subtopics: ['Heat and Temperature', 'Thermodynamic Processes', 'Heat Engines'],
            questions: [
              {
                id: 'thermo-1',
                question: 'What is the SI unit of temperature?',
                options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'],
                correctAnswer: 2,
                difficulty: 'easy',
                explanation: 'The SI unit of temperature is Kelvin (K), named after Lord Kelvin.'
              },
              {
                id: 'thermo-2',
                question: 'What law states that heat flows from hotter to colder bodies?',
                options: ['First Law of Thermodynamics', 'Second Law of Thermodynamics', 'Third Law of Thermodynamics', 'Zeroth Law of Thermodynamics'],
                correctAnswer: 3,
                difficulty: 'medium',
                explanation: 'The Zeroth Law of Thermodynamics states that if two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each other.'
              }
            ]
          }
        ]
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        topics: [
          {
            id: 'physical',
            name: 'Physical Chemistry',
            description: 'States of Matter, Atomic Structure, Chemical Bonding',
            subtopics: ['States of Matter', 'Atomic Structure', 'Chemical Bonding'],
            questions: [
              {
                id: 'chem-1',
                question: 'What is the atomic number of Carbon?',
                options: ['6', '7', '8', '9'],
                correctAnswer: 0,
                difficulty: 'easy',
                explanation: 'Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus.'
              }
            ]
          },
          {
            id: 'organic',
            name: 'Organic Chemistry',
            description: 'Hydrocarbons, Functional Groups, Reactions',
            subtopics: ['Hydrocarbons', 'Functional Groups', 'Reactions'],
            questions: [
              {
                id: 'org-1',
                question: 'What is the functional group of alcohol?',
                options: ['-OH', '-COOH', '-NH2', '-C≡N'],
                correctAnswer: 0,
                difficulty: 'easy',
                explanation: 'The functional group of alcohol is the hydroxyl group (-OH).'
              }
            ]
          }
        ]
      },
      {
        id: 'mathematics',
        name: 'Mathematics',
        topics: [
          {
            id: 'algebra',
            name: 'Algebra',
            description: 'Polynomials, Quadratic Equations, Complex Numbers',
            subtopics: ['Polynomials', 'Quadratic Equations', 'Complex Numbers'],
            questions: [
              {
                id: 'math-1',
                question: 'What is the sum of roots of the equation x² - 5x + 6 = 0?',
                options: ['5', '-5', '6', '-6'],
                correctAnswer: 0,
                difficulty: 'easy',
                explanation: 'The sum of roots of a quadratic equation ax² + bx + c = 0 is given by -b/a. Here, -(-5)/1 = 5.'
              }
            ]
          }
        ]
      }
    ]
  },
  neet: {
    id: 'neet',
    name: 'NEET',
    subjects: [
      {
        id: 'physics',
        name: 'Physics',
        topics: [
          {
            id: 'mechanics',
            name: 'Mechanics',
            description: 'Kinematics, Laws of Motion, Work, Energy and Power',
            subtopics: ['Kinematics', 'Laws of Motion', 'Work, Energy and Power']
          },
          {
            id: 'thermodynamics',
            name: 'Thermodynamics',
            description: 'Heat, Temperature and Calorimetry',
            subtopics: ['Heat and Temperature', 'Thermodynamic Processes']
          }
        ]
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        topics: [
          {
            id: 'physical',
            name: 'Physical Chemistry',
            description: 'States of Matter, Atomic Structure, Chemical Bonding',
            subtopics: ['States of Matter', 'Atomic Structure', 'Chemical Bonding']
          },
          {
            id: 'organic',
            name: 'Organic Chemistry',
            description: 'Hydrocarbons, Haloalkanes, Haloarenes',
            subtopics: ['Hydrocarbons', 'Haloalkanes', 'Haloarenes']
          }
        ]
      },
      {
        id: 'biology',
        name: 'Biology',
        topics: [
          {
            id: 'botany',
            name: 'Botany',
            description: 'Plant Kingdom, Morphology, Taxonomy',
            subtopics: ['Plant Kingdom', 'Morphology', 'Taxonomy'],
            questions: [
              {
                id: 'bot-1',
                question: 'Which of these is a non-vascular plant?',
                options: [
                  'Fern',
                  'Moss',
                  'Pine tree',
                  'Rose plant'
                ],
                correctAnswer: 1,
                difficulty: 'easy',
                explanation: 'Mosses are non-vascular plants (bryophytes) that lack true roots, stems, and leaves.'
              },
              {
                id: 'bot-2',
                question: 'What is the male reproductive part of a flower called?',
                options: [
                  'Pistil',
                  'Stamen',
                  'Sepal',
                  'Petal'
                ],
                correctAnswer: 1,
                difficulty: 'easy',
                explanation: 'The stamen is the male reproductive organ of a flower, consisting of anther and filament.'
              },
              {
                id: 'bot-3',
                question: 'Which plant hormone promotes cell elongation?',
                options: [
                  'Abscisic acid',
                  'Cytokinin',
                  'Auxin',
                  'Ethylene'
                ],
                correctAnswer: 2,
                difficulty: 'medium',
                explanation: 'Auxins are plant hormones that promote cell elongation in stems and roots.'
              },
              {
                id: 'bot-4',
                question: 'What is the study of pollen and spores called?',
                options: [
                  'Pomology',
                  'Palynology',
                  'Phycology',
                  'Mycology'
                ],
                correctAnswer: 1,
                difficulty: 'hard',
                explanation: 'Palynology is the study of pollen grains and spores, both living and fossilized.'
              }
            ]
          },
          {
            id: 'zoology',
            name: 'Zoology',
            description: 'Animal Kingdom, Physiology, Genetics',
            subtopics: ['Animal Kingdom', 'Physiology', 'Genetics']
          }
        ]
      }
    ]
  }
};