import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Logger, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaService } from '../prisma/prisma.service'
import { join } from 'path'
import { UserModule } from './modules/user/user.module'
import { ManufacturerModule } from './modules/manufacturer/manufacturer.module'
import { DeviceModule } from './modules/device/device.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'prisma/schema.gql'),
      debug: true,
      playground: true,
    }),
    UserModule,
    ManufacturerModule,
    DeviceModule,
  ],
  controllers: [],
  providers: [Logger, PrismaService],
})
export class AppModule {}
