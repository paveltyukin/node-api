import { Args, Query, Resolver } from '@nestjs/graphql'
import { Manufacturer } from './manufacturer'
import { ManufacturerRepository } from './manufacturer.repository'

@Resolver()
export class ManufacturerResolver {
  constructor(private manufacturerRepository: ManufacturerRepository) {}

  @Query(() => [Manufacturer], { nullable: true })
  async getAllManufacturers(): Promise<Manufacturer[]> {
    return this.manufacturerRepository.getAllManufacturers()
  }

  @Query(() => [Manufacturer], { nullable: true })
  async searchManufacturers(@Args('search') search: string): Promise<Manufacturer[]> {
    return this.manufacturerRepository.searchManufacturers(search)
  }
}
