import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Inject, Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { UserModule } from './modules/user/user.module'
import { ManufacturerModule } from './modules/manufacturer/manufacturer.module'
import { DeviceModule } from './modules/device/device.module'
import { RedisModule } from './core/redis/redis.module'
import { REDIS } from './core/redis/redis.constants'
import { RedisClient } from 'redis'
import * as RedisStore from 'connect-redis'
import * as session from 'express-session'
import * as passport from 'passport'
import { PrismaModule } from './core/prisma/prisma.module'
import { CalcModule } from './modules/calc/calc.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'prisma/schema.gql'),
      debug: false,
      playground: true,
    }),
    UserModule,
    ManufacturerModule,
    DeviceModule,
    RedisModule,
    PrismaModule,
    CalcModule,
  ],
  providers: [Logger],
})
export class AppModule implements NestModule {
  constructor(@Inject(REDIS) private readonly redis: RedisClient) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new (RedisStore(session))({ client: this.redis, logErrors: true }),
          saveUninitialized: true,
          secret: 'sup3rs3cr3t',
          resave: false,
          cookie: {
            sameSite: true,
            httpOnly: true,
            maxAge: 60000000,
            domain: 'localhost',
          },
        }),
        passport.initialize(),
        passport.session()
      )
      .forRoutes('*')
  }
}
