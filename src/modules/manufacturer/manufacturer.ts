import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Manufacturer {
  @Field(() => ID)
  id: number

  @Field()
  title: string

  @Field({ nullable: true })
  description: string
}
