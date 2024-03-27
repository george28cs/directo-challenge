import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeService } from './challenge.service';

describe('ChallengeService', () => {
  let service: ChallengeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChallengeService],
    }).compile();

    service = module.get<ChallengeService>(ChallengeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('processNumber', () => {
    it('should return correct data for an even number', () => {
      const result = service.processNumber({ number: 4 });
      expect(result.isPair).toBe(true);
      expect(result.isPrime).toBe(false);
      expect(result.factorial).toBe(24);
      expect(result.sumN).toBe(10);
      expect(result.factors).toEqual([1, 2, 4]);
      expect(result.fibonacci).toBe(3);
    });

    it('should return correct data for an odd number', () => {
      const result = service.processNumber({ number: 7 });
      expect(result.isPair).toBe(false);
      expect(result.isPrime).toBe(true);
      expect(result.factorial).toBe(5040);
      expect(result.sumN).toBe(28);
      expect(result.factors).toEqual([1, 7]);
      expect(result.fibonacci).toBe(13);
    });
  });

  describe('isPrime', () => {
    it('should return true for prime numbers', () => {
      expect(service.isPrime(2)).toBe(true);
      expect(service.isPrime(3)).toBe(true);
      expect(service.isPrime(5)).toBe(true);
      expect(service.isPrime(7)).toBe(true);
      expect(service.isPrime(11)).toBe(true);
    });

    it('should return false for non-prime numbers', () => {
      expect(service.isPrime(4)).toBe(false);
      expect(service.isPrime(6)).toBe(false);
      expect(service.isPrime(8)).toBe(false);
      expect(service.isPrime(9)).toBe(false);
      expect(service.isPrime(10)).toBe(false);
    });
  });

  describe('calculateFactorial', () => {
    it('should return correct factorial', () => {
      expect(service.calculateFactorial(4)).toBe(24);
      expect(service.calculateFactorial(5)).toBe(120);
      expect(service.calculateFactorial(6)).toBe(720);
    });
  });

  describe('calculateSumN', () => {
    it('should return correct sum', () => {
      expect(service.calculateSumN(4)).toBe(10);
      expect(service.calculateSumN(5)).toBe(15);
      expect(service.calculateSumN(6)).toBe(21);
    });
  });

  describe('findFactors', () => {
    it('should return correct factors', () => {
      expect(service.findFactors(4)).toEqual([1, 2, 4]);
      expect(service.findFactors(5)).toEqual([1, 5]);
      expect(service.findFactors(6)).toEqual([1, 2, 3, 6]);
    });
  });

  describe('calculateFibonacci', () => {
    it('should return correct Fibonacci number', () => {
      expect(service.calculateFibonacci(4)).toBe(3);
      expect(service.calculateFibonacci(5)).toBe(5);
      expect(service.calculateFibonacci(6)).toBe(8);
    });
  });
});
