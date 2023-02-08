import { QuizModule } from './quiz/quiz.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [QuizModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
