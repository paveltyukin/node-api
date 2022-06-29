import { Module } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { UserResolver } from './user.resolver'
import { UserController } from './user.controller'
import { RedisModule } from '../../core/redis/redis.module'
import { PrismaModule } from '../../core/prisma/prisma.module'

@Module({
  imports: [RedisModule, PrismaModule],
  controllers: [UserController],
  providers: [UserRepository, UserResolver],
})
export class UserModule {}
