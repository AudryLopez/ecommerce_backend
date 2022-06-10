import { Controller, Get } from '@nestjs/common';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

class Response {
  @ApiProperty()
  status: 'UP';
}

@ApiResponse({
  type: Response,
})
@Controller()
export class AppController {
  @Get('/readiness')
  readiness() {
    return { status: 'UP' };
  }

  @Get('/liveness')
  liveness() {
    return { status: 'UP' };
  }
}
