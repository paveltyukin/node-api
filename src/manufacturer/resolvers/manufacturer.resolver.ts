import { Query, Resolver } from '@nestjs/graphql'
import { Manufacturer } from '../manufacturer'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../../prisma/prisma.service'

@Resolver()
export class ManufacturerResolver {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  @Query(() => [Manufacturer], { nullable: true })
  async getAllManufacturers() {
    return this.prisma.manufacturer.findMany()
  }
}
