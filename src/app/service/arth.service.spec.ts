import { TestBed } from '@angular/core/testing';

import { ArthService } from './arth.service';
//describe is a test suite
//test suite is a group of test cases
//test case is it
describe('ArthService', () => {
  let service: ArthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ArthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add',()=>{
    
    it('should return a positive value when operands are positve',()=>{
      let result = service.add(10,10);
      expect(result).toBe(20); //toBe is a matcher
    });

    it('should return a negative value when operands are negative',()=>{
      expect(service.add(-10,-10)).toBe(-20);
    });

    it('should return a same non-zero value when one of operands is 0',()=>{
      expect(service.add(10,0)).toBe(10);
      expect(service.add(0,10)).toBe(10);
    });

  }); 
});
