import { Injectable } from '@nestjs/common';

@Injectable()
export class OperacionesService {
  operar(operacion: string = '', a: number, b: number) {
    if (operacion === 'suma') {
      return this.#suma(a, b);
    } else if (operacion === 'resta') {
      return this.#resta(a, b);
    } else if (operacion === 'multiplicacion') {
      return this.#multiplicacion(a, b);
    } else if (operacion === 'division') {
      return this.#division(a, b);
    } else if (operacion === 'potencia') {
      return this.#potencia(a, b);
    } else if (operacion === 'factorial') {
      return this.#factorial(a);
    }

  }

  #suma(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a + b;
  }

  #resta(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a - b;
  }

  #multiplicacion(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a * b;
  }

  #division(a: number, b: number) {
    if (a === undefined || b === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
      return NaN;
    }
    return a / b;
  }

  #potencia(base: number, exponente: number){
    if (base === undefined || exponente === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof base !== 'number' || typeof exponente !== 'number') {
      return NaN;
    }

    return Math.pow(base, exponente);
  }

  #factorial(x: number){
    if (x === undefined) {
      throw new Error('No se puede llamar con numeros indefinidos.');
    }

    if (typeof x !== 'number') {
      return NaN;
    }

    if (!Number.isInteger(x)) {
      throw new Error('Debe utilizar número entero');
    } 

    if (x < 0) {
      throw new Error('El número debe ser mayor o igual a 0');
    }
    let rFinal = 1;
    for (let i = 2; i <= x; i++) {
       rFinal *= i;
    }
    return rFinal;
  }
}
