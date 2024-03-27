import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ChallengeModule } from './challenge/challenge.module';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';

@Module({
  imports: [ChallengeModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
