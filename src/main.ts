import {HttpAdapterHost, NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {NestExpressApplication} from '@nestjs/platform-express'
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
import {Logger} from '@nestjs/common'
import * as morgan from 'morgan'
import {corsOptions} from './core/utils/corsOptions'
import {ValidationPipe} from './core/pipes/validation.pipe'
import {AllExceptionsFilter} from './core/exceptions/all-exceptions-filter'

const HOST = process.env.HOST
const PORT = process.env.PORT

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  })

  const logger = app.get(Logger)
  app.use(morgan(process.env.MORGAN_ENV))

  app.enableCors(corsOptions)

  app.useGlobalPipes(new ValidationPipe())
  const adapterHost = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(adapterHost))

  const config = new DocumentBuilder()
    .setTitle('Node API')
    .setDescription('REST API')
    .setVersion('1.0')
    .addTag('api')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(PORT, HOST)
  logger.log(`Server start on host = ${HOST}, port = ${PORT}`)
}

start().catch(err => console.log(`Server err: ${err}`))
