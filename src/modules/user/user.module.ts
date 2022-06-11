import { Module } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { UserResolver } from './user.resolver'
import { PrismaService } from '../../../prisma/prisma.service'

@Module({
  providers: [UserRepository, UserResolver, PrismaService],
})
export class UserModule {}
