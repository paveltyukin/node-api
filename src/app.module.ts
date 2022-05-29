import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Inject, Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { PrismaService } from '../prisma/prisma.service'
import { join } from 'path'
import { UserModule } from './user/user.module'
import { ManufacturerModule } from './manufacturer/manufacturer.module'
import { DeviceModule } from './device/device.module'
import { RedisModule } from './redis/redis.module'
import { REDIS } from './redis/redis.constants'
import { RedisClient } from 'redis'
import * as RedisStore from 'connect-redis'
import * as session from 'express-session'
import { session as passportSession, initialize as passportInitialize } from 'passport'

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
    RedisModule,
  ],
  controllers: [],
  providers: [Logger, PrismaService],
})
export class AppModule implements NestModule {
  constructor(@Inject(REDIS) private readonly redis: RedisClient) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new (RedisStore(session))({ client: this.redis, logErrors: true }),
          saveUninitialized: false,
          secret: 'sup3rs3cr3t',
          resave: false,
          cookie: {
            sameSite: true,
            httpOnly: false,
            maxAge: 60000,
          },
        }),
        passportInitialize(),
        passportSession()
      )
      .forRoutes('*')
  }
}
