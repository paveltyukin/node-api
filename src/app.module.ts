import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaService } from '../prisma/prisma.service'
import { ManufacturerModule } from './manufacturer/manufacturer.module'
import { DeviceModule } from './device/device.module'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'prisma/schema.gql'),
      debug: true,
      playground: true,
    }),
    ManufacturerModule,
    DeviceModule,
  ],
  controllers: [],
  providers: [Logger, PrismaService],
})
export class AppModule {}
