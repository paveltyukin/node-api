import { Module } from '@nestjs/common'
import { DeviceRepository } from './device.repository'

@Module({
  imports: [],
  providers: [DeviceRepository],
})
export class DeviceModule {}
