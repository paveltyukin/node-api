import { Controller, Post } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  // constructor() {}
  // @Post('login')
  // async login(req, res, next) {
  //   try {
  //     const { email, password } = req.body
  //     const userData = await userService.login(email, password)
  //     res.cookie('refreshToken', userData.refreshToken, {
  //       maxAge: 30 * 24 * 60 * 60 * 1000,
  //       httpOnly: true,
  //     })
  //     return res.json(userData)
  //   } catch (e) {
  //     next(e)
  //   }
  // }
  //
  // @Post('logout')
  // async logout(req, res, next) {
  //   try {
  //     const { refreshToken } = req.cookies
  //     const token = await userService.logout(refreshToken)
  //     res.clearCookie('refreshToken')
  //     return res.json(token)
  //   } catch (e) {
  //     next(e)
  //   }
  // }
  //
  // @Post('activate')
  // async activate(req, res, next) {
  //   try {
  //     const activationLink = req.params.link
  //     await userService.activate(activationLink)
  //     return res.redirect(process.env.CLIENT_URL)
  //   } catch (e) {
  //     next(e)
  //   }
  // }
  //
  // @Post('refresh')
  // async refresh(req, res, next) {
  //   try {
  //     const { refreshToken } = req.cookies
  //     const userData = await userService.refresh(refreshToken)
  //     res.cookie('refreshToken', userData.refreshToken, {
  //       maxAge: 30 * 24 * 60 * 60 * 1000,
  //       httpOnly: true,
  //     })
  //     return res.json(userData)
  //   } catch (e) {
  //     next(e)
  //   }
  // }
}
