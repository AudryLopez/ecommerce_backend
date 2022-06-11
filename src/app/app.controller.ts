import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/modules/auth/auth.service';
import { LocalAuthGuard } from 'src/modules/auth/guards/local-auth.guard';

class Response {
  @ApiProperty()
  status: 'UP';
}

@ApiResponse({
  type: Response,
})
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @Get('/readiness')
  readiness() {
    return { status: 'UP' };
  }

  @Get('/liveness')
  liveness() {
    return { status: 'UP' };
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
