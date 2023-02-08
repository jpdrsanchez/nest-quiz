import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class QuizService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: number) {
    try {
      const quizzes = await this.prisma.quiz.findUniqueOrThrow({
        where: { id },
        include: {
          questions: {
            include: {
              question: {
                select: {
                  category: true,
                  type: true,
                  difficulty: true,
                  question: true,
                  correctAnswer: true,
                  incorrectAnswers: true,
                },
              },
            },
          },
        },
      });
      return quizzes.questions.map((question) => question.question);
    } catch {
      throw new NotFoundException();
    }
  }
}
