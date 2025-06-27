import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('OperacionesController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  //SUMA
  it('SUMA OK', async() => {
    const response = await request(app.getHttpServer())
      .get('/operaciones?operacion=suma&a=10&b=4')
      .expect(200);

      expect(response.body.resultado).toEqual(14);
  });


  //RESTA
  it('RESTA OK', async() => {
      const response = await request(app.getHttpServer())
      .get('/operaciones?operacion=resta&a=12&b=4')
      .expect(200);

      expect(response.body.resultado).toEqual(8);
  });


  //MULTIPLICACIÓN
  it('MULTIPLICACION OK', async() => {
      const response = await request(app.getHttpServer())
      .get('/operaciones?operacion=multiplicacion&a=3&b=3')
      .expect(200);

      expect(response.body.resultado).toEqual(9);
  });

  //DIVISIÓN
  it('DIVISIÓN OK', async() => {
      const response = await request(app.getHttpServer())
      .get('/operaciones?operacion=division&a=10&b=5')
      .expect(200);

      expect(response.body.resultado).toEqual(2);
  });

  //POTENCIA
  it('debería devolver la potencia correcta', async () => {
        const response = await request(app.getHttpServer())
          .get('/operaciones?operacion=potencia&a=2&b=3')
          .expect(200);

        expect(response.body.resultado).toEqual(8);
    });

  //FACTORIAL
  it('debería devolver el factorial correcto', async () => {
        const response = await request(app.getHttpServer())
          .get('/operaciones?operacion=factorial&a=5')
          .expect(200);

        expect(response.body.resultado).toEqual(120);
  });

});