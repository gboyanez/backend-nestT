import { Test, TestingModule } from '@nestjs/testing';
 import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('operacion deberia sumar', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = 50;
    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = -50;
    expect(service.operar('suma', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.operar('suma', a, b)).toBeCloseTo(33.14, 2);

    a = null;
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('suma', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  it('operacion deberia restar', () => {
    let a: any = 50;
    let b = 20;

    expect(service.operar('resta', a, b)).toBe(30);

    a = -10;
    b = 50;
    expect(service.operar('resta', a, b)).toBe(-60);

    a = 60;
    b = 50;
    expect(service.operar('resta', a, b)).not.toBe(-10);

    a = null;
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });

  it('operacion deberia multiplicar', () => {
    let a: any = 3;
    let b = 5;

    expect(service.operar('multiplicacion', a, b)).toBe(15);

    a = 2;
    b = 0;
    expect(service.operar('multiplicacion', a, b)).toBe(0);

    a = 5;
    b = 10;
    expect(service.operar('multiplicacion', a, b)).not.toBe(60);

    a = null;
    b = 2;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = '10';
    b = 6;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = undefined;
    b = 3;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });

  it('operacion deberia dividir', () => {
    let a: any = 10;
    let b = 5;

    expect(service.operar('division', a, b)).toBe(2);

    a = 12;
    b = 3;
    expect(service.operar('division', a, b)).toBe(4);

    a = 6;
    b = 2;
    expect(service.operar('division', a, b)).not.toBe(2);

    a = null;
    b = 8;
    expect(service.operar('division', a, b)).toBeNaN();

    a = '10';
    b = 6;
    expect(service.operar('division', a, b)).toBeNaN();

    a = undefined;
    b = 2;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });

  it('operacion deberia potenciar', () => {
    let a: any = 2;
    let b = 3;

    expect(service.operar('potencia', a, b)).toBe(8);

    a = 3;
    b = 3;
    expect(service.operar('potencia', a, b)).toBe(27);

    a = 2;
    b = 6;
    expect(service.operar('potencia', a, b)).not.toBe(60);

    a = null;
    b = 3;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = '2';
    b = 4;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = undefined;
    b = 2;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });

  it('operacion factorial', () => {
    let a: any = 0;
    let b = 1;

    expect(service.operar('factorial', a,b)).toBe(1);

    a = 4;
    expect(service.operar('factorial', a, b)).toBe(24);

    a = 3;
    expect(service.operar('factorial', a, b)).not.toBe(5);

    a = null;
    b = 3;
    expect(service.operar('factorial', a, b)).toBeNaN();

    a = '2';
    expect(service.operar('factorial', a, b)).toBeNaN();

    a = undefined;
    expect(() => {
      service.operar('factorial', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });
  
});
