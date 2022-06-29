import { Controller, Get, Req } from '@nestjs/common'
import { Request } from 'express'

@Controller()
export class UserController {
  @Get('users')
  async getUsers(@Req() req: Request) {
    return {
      users: [1, 2, 3, 4, 5],
    }
  }
}
