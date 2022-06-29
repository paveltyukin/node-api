import { Controller, Post } from '@nestjs/common'

@Controller()
export class OauthController {
  @Post('v1/oauth/authorize')
  async oauthAuthorize() {
    console.log(324234234)
  }
}
