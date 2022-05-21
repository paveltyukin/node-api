import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Device {
  @Field(() => ID)
  id: number

  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  description: string

  @Field()
  manufacturer_id: number
}
