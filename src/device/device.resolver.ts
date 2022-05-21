import { Query, Resolver } from '@nestjs/graphql'
import { Device } from './device'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Resolver(() => Device)
export class DeviceResolver {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  @Query(() => [Device], { nullable: true })
  async getAllDevices() {
    return this.prisma.device.findMany()
  }
}
