import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class SearchManufacturerArgs {
  @Field()
  search: string
}
