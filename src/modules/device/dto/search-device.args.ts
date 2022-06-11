import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class SearchDeviceArgs {
  @Field()
  search: string

  @Field({ nullable: true })
  manufacturer_id: number
}
