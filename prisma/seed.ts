import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const isQuizTableEmpty = await prisma.quiz.count();
  const isQuestionTableEmpty = await prisma.question.count();

  if (!isQuestionTableEmpty) {
    await prisma.question.createMany({
      data: [
        {
          category: 'Entertainment: Video Games',
          type: 'MULTIPLE',
          difficulty: 'HARD',
          question:
            "What was the name of the hero in the 80s animated video game 'Dragon's Lair'?",
          correctAnswer: 'Dirk the Daring',
          incorrectAnswers: ['Arthur', 'Sir Toby Belch', 'Guy of Gisbourne'],
        },
        {
          category: 'Animals',
          type: 'MULTIPLE',
          difficulty: 'EASY',
          question: 'What is the scientific name for modern day humans?',
          correctAnswer: 'Homo Sapiens',
          incorrectAnswers: [
            'Homo Ergaster',
            'Homo Erectus',
            'Homo Neanderthalensis',
          ],
        },
        {
          category: 'Entertainment: Books',
          type: 'MULTIPLE',
          difficulty: 'HARD',
          question: "What is Ron Weasley's middle name?",
          correctAnswer: 'Bilius',
          incorrectAnswers: ['Arthur', 'John', 'Dominic'],
        },
        {
          category: 'Entertainment: Comics',
          type: 'MULTIPLE',
          difficulty: 'EASY',
          question:
            'Who is the creator of the comic series "The Walking Dead"?',
          correctAnswer: 'Robert Kirkman',
          incorrectAnswers: [
            'Stan Lee',
            'Malcolm Wheeler-Nicholson',
            'Robert Crumb',
          ],
        },
        {
          category: 'Entertainment: Board Games',
          type: 'MULTIPLE',
          difficulty: 'MEDIUM',
          question:
            'At the start of a standard game of the Monopoly, if you throw a double six, which square would you land on?',
          correctAnswer: 'Electric Company',
          incorrectAnswers: ['Water Works', 'Chance', 'Community Chest'],
        },
        {
          category: 'Geography',
          type: 'MULTIPLE',
          difficulty: 'EASY',
          question: 'What is the capital of Jamaica?',
          correctAnswer: 'Kingston',
          incorrectAnswers: ['Rio de Janeiro', 'Dar es Salaam', 'Kano'],
        },
        {
          category: 'History',
          type: 'MULTIPLE',
          difficulty: 'MEDIUM',
          question: 'When did Jamaica recieve its independence from England?',
          correctAnswer: '1962',
          incorrectAnswers: ['1492', '1963', '1987'],
        },
        {
          category: 'Animals',
          type: 'BOOLEAN',
          difficulty: 'EASY',
          question:
            'Kangaroos keep food in their pouches next to their children.',
          correctAnswer: 'False',
          incorrectAnswers: ['True'],
        },
        {
          category: 'General Knowledge',
          type: 'MULTIPLE',
          difficulty: 'MEDIUM',
          question: 'In 2013 how much money was lost by Nigerian scams?',
          correctAnswer: '$12.7 Billion',
          incorrectAnswers: ['$95 Million', '$956 Million', '$2.7 Billion'],
        },
        {
          category: 'History',
          type: 'MULTIPLE',
          difficulty: 'MEDIUM',
          question:
            'How old was Lyndon B. Johnson when he assumed the role of President of the United States?',
          correctAnswer: '55',
          incorrectAnswers: ['50', '60', '54'],
        },
        {
          category: 'Entertainment: Video Games',
          type: 'MULTIPLE',
          difficulty: 'HARD',
          question:
            'In World of Warcraft lore, who organized the creation of the Paladins?',
          correctAnswer: 'Alonsus Faol',
          incorrectAnswers: [
            'Uther the Lightbringer',
            'Alexandros Mograine',
            'Sargeras, The Daemon Lord',
          ],
        },
        {
          category: 'Entertainment: Video Games',
          type: 'BOOLEAN',
          difficulty: 'MEDIUM',
          question:
            'In the game "Subnautica", a "Cave Crawler" will attack you.',
          correctAnswer: 'True',
          incorrectAnswers: ['False'],
        },
        {
          category: 'Entertainment: Japanese Anime & Manga',
          type: 'MULTIPLE',
          difficulty: 'MEDIUM',
          question:
            'What is the name of the device that allows for infinite energy in the anime "Dimension W"?',
          correctAnswer: 'Coils',
          incorrectAnswers: ['Wires', 'Collectors', 'Tesla'],
        },
        {
          category: 'Entertainment: Video Games',
          type: 'MULTIPLE',
          difficulty: 'MEDIUM',
          question: `What is the name of Cream the Rabbit's mom in the "Sonic the Hedgehog" series?`,
          correctAnswer: 'Vanilla',
          incorrectAnswers: ['Peach', 'Strawberry', 'Mint'],
        },
        {
          category: 'History',
          type: 'MULTIPLE',
          difficulty: 'EASY',
          question: `These two countries held a commonwealth from the 16th to 18th century.`,
          correctAnswer: 'Poland and Lithuania',
          incorrectAnswers: [
            'Hutu and Rwanda',
            'North Korea and South Korea',
            'Bangladesh and Bhutan',
          ],
        },
        {
          category: 'Entertainment: Television',
          type: 'MULTIPLE',
          difficulty: 'HARD',
          question: `Which of these voices wasn't a choice for the House AI in "The Simpsons Treehouse of Horror" short, House of Whacks?`,
          correctAnswer: 'George Clooney',
          incorrectAnswers: [
            'Matthew Perry',
            'Dennis Miller',
            'Pierce Brosnan',
          ],
        },
        {
          category: 'Entertainment: Music',
          type: 'MULTIPLE',
          difficulty: 'MEDIUM',
          question: `From which album is the Gorillaz song, "On Melancholy Hill" featured in?`,
          correctAnswer: 'Plastic Beach',
          incorrectAnswers: ['Demon Days', 'Humanz', 'The Fall'],
        },
        {
          category: 'General Knowledge',
          type: 'BOOLEAN',
          difficulty: 'EASY',
          question: `Scotland voted to become an independent country during the referendum from September 2014.`,
          correctAnswer: 'False',
          incorrectAnswers: ['True'],
        },
        {
          category: 'Entertainment: Video Games',
          type: 'MULTIPLE',
          difficulty: 'MEDIUM',
          question: `In Left 4 Dead, which campaign has the protagonists going through a subway in order to reach a hospital for evacuation?`,
          correctAnswer: 'No Mercy',
          incorrectAnswers: [
            'Subway Sprint',
            'Hospital Havoc',
            'Blood Harvest',
          ],
        },
        {
          category: 'History',
          type: 'MULTIPLE',
          difficulty: 'HARD',
          question: `What was the last colony the UK ceded marking the end of the British Empire?`,
          correctAnswer: 'Hong Kong',
          incorrectAnswers: ['India', 'Australia', 'Ireland'],
        },
      ],
    });
  }

  if (!isQuizTableEmpty) {
    await prisma.quiz.create({
      data: {
        title: 'Quiz 1',
        questions: {
          create: Array.from({ length: 20 })
            .fill('.')
            .map((_, index) => ({ question: { connect: { id: index + 1 } } })),
        },
      },
    });
    await prisma.quiz.create({
      data: {
        title: 'Quiz 2',
        questions: {
          create: Array.from({ length: 20 })
            .fill('.')
            .map((_, index) => ({ question: { connect: { id: index + 1 } } })),
        },
      },
    });
    await prisma.quiz.create({
      data: {
        title: 'Quiz 3',
        questions: {
          create: Array.from({ length: 20 })
            .fill('.')
            .map((_, index) => ({ question: { connect: { id: index + 1 } } })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
