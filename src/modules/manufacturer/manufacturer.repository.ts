import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from '../../../prisma/prisma.service'
import { Manufacturer } from './manufacturer'

@Injectable()
export class ManufacturerRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async getAllManufacturers(): Promise<Manufacturer[]> {
    return this.prisma.manufacturer.findMany()
  }

  async searchManufacturers(search: string): Promise<Manufacturer[]> {
    return this.prisma.manufacturer.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
            },
          },
          {
            description: {
              contains: search,
            },
          },
        ],
      },
    })
  }
}
