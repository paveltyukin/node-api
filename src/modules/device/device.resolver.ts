import { Args, Query, Resolver } from '@nestjs/graphql'
import { Device } from './device'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../../prisma/prisma.service'
import { SearchDeviceArgs } from './dto/search-device.args'

@Resolver(() => Device)
export class DeviceResolver {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  @Query(() => [Device], { nullable: true })
  async getAllDevices() {
    return this.prisma.device.findMany()
  }

  @Query(() => [Device], { nullable: true })
  async searchDevices(@Args() args: SearchDeviceArgs) {
    console.log(args)
    return this.prisma.device.findMany()
  }
}
