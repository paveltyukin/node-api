import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common'
import {customWriteLog} from '../utils/customWriteLog'
import {Response} from 'express'
import {HttpAdapterHost} from '@nestjs/core'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost

    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const url = httpAdapter.getRequestUrl(ctx.getRequest())

    let message
    if (exception instanceof HttpException && exception.message) {
      message = exception.message
    } else {
      message = 'Ошибка запроса, не заданы обязательные параметры.'
    }

    customWriteLog(`${url}: ${message}`)

    response.render('index', {
      message,
    })
  }
}
