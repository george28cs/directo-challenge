import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeController } from './challenge.controller';
import { ChallengeService } from './challenge.service';

describe('ChallengeController', () => {
  let controller: ChallengeController;
  let service: ChallengeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengeController],
      providers: [ChallengeService],
    }).compile();

    controller = module.get<ChallengeController>(ChallengeController);
    service = module.get<ChallengeService>(ChallengeService);
  });

  describe('create', () => {
    it('should return the processed number', () => {
      // Remove async here
      const createChallengeDto = { number: 5 };
      const expectedResult = {
        isPair: false,
        isPrime: true,
        factorial: 120,
        sumN: 15,
        factors: [1, 5],
        fibonacci: 5,
      };

      jest
        .spyOn(service, 'processNumber')
        .mockImplementation(() => expectedResult);

      expect(controller.create(createChallengeDto)).toEqual(expectedResult);
      expect(service.processNumber).toHaveBeenCalledWith(createChallengeDto);
    });
  });
});
