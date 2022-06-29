import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { AppModule } from '../src/app.module'
import { NestExpressApplication } from '@nestjs/platform-express'

describe('AppController (e2e)', () => {
  let app: NestExpressApplication

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication<NestExpressApplication>()
    await app.init()
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(404)
      .expect('{"statusCode":404,"message":"Cannot GET /","error":"Not Found"}')
  })
})
