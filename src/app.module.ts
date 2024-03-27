import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ChallengeModule } from './challenge/challenge.module';
import { LoggerMiddleware } from './middleware/LoggerMiddleware';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/config';

@Module({
  imports: [
    ChallengeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
