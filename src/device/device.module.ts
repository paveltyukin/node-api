import { Module } from '@nestjs/common'
import { DeviceRepository } from './device.repository'
import { DeviceResolver } from './device.resolver'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [DeviceRepository, DeviceResolver, PrismaService],
})
export class DeviceModule {}
