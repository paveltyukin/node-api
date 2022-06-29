import { Module } from '@nestjs/common'
import { OauthController } from './oauth.controller'

@Module({
  controllers: [OauthController],
  providers: [OauthController],
})
export class OauthModule {}
