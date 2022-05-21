import { Module } from '@nestjs/common'
import { ManufacturerRepository } from './manufacturer.repository'

@Module({
  imports: [],
  providers: [ManufacturerRepository],
})
export class ManufacturerModule {}
