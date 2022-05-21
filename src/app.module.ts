import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      debug: false,
      playground: false,
    }),
  ],
  controllers: [],
  providers: [Logger, PrismaService],
})
export class AppModule {}
