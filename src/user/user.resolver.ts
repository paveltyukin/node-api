import { Query, Resolver } from '@nestjs/graphql'
import { User } from './user'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Resolver(() => User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  @Query(() => [User], { nullable: true })
  async getAllUsers() {
    return this.prisma.user.findMany()
  }
}
