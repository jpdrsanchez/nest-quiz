import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('api/questions')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.quizService.findOne(id);
  }
}
