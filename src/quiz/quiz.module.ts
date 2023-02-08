import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports: [PrismaModule],
  controllers: [QuizController],
  providers: [QuizService],
  exports: [],
})
export class QuizModule {}
