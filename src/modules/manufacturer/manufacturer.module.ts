import { Module } from '@nestjs/common'
import { ManufacturerRepository } from './manufacturer.repository'
import { ManufacturerResolver } from './manufacturer.resolver'
import { PrismaService } from '../../core/prisma/prisma.service'

@Module({
  providers: [ManufacturerRepository, ManufacturerResolver, PrismaService],
})
export class ManufacturerModule {}
