import {Logger, Module} from '@nestjs/common'

import {ConfigModule} from '@nestjs/config'
import {PrismaService} from '../prisma/prisma.service'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [Logger, PrismaService],
})
export class AppModule {}
