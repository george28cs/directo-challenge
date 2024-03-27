import { Injectable } from '@nestjs/common';
import { CreateChallengeDto } from './dto/create-challenge.dto';

@Injectable()
export class ChallengeService {
  private factorialCache: Map<number, number> = new Map();
  private primeCache: Map<number, boolean> = new Map();

  processNumber(request: CreateChallengeDto) {
    const { number } = request;
    const isPair = number % 2 === 0,
      isPrime = this.isPrime(number),
      factorial = this.calculateFactorial(number),
      sumN = this.calculateSumN(number),
      factors = this.findFactors(number),
      fibonacci = this.calculateFibonacci(number);

    return {
      isPair,
      isPrime,
      factorial,
      sumN,
      factors,
      fibonacci,
    };
  }

  // Verify prime using memoization
  isPrime(num: number): boolean {
    if (this.primeCache.has(num)) return this.primeCache.get(num);

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        this.primeCache.set(num, false);
        return false;
      }
    }

    this.primeCache.set(num, true);
    return true;
  }

  // calculate factorial using memoization
  calculateFactorial(num: number): number {
    if (this.factorialCache.has(num)) {
      return this.factorialCache.get(num);
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }

    this.factorialCache.set(num, factorial);

    return factorial;
  }

  calculateSumN(num: number): number {
    return (num * (num + 1)) / 2;
  }

  findFactors(num: number): number[] {
    const factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  calculateFibonacci(num: number, memo: number[] = []): number {
    if (memo[num] !== undefined) {
      return memo[num];
    }

    if (num <= 1) {
      return num;
    }

    memo[num] =
      this.calculateFibonacci(num - 1, memo) +
      this.calculateFibonacci(num - 2, memo);
    return memo[num];
  }
}
