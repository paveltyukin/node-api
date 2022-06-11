import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: number

  @Field()
  guid: string

  @Field()
  name: string

  @Field()
  surname: string

  @Field()
  patronymic: string
}
