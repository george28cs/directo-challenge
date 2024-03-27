import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateChallengeDto {
  @IsNotEmpty()
  @IsNumber()
  number: number;
}
