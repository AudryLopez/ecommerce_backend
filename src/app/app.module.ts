import { ConfigService } from '../config/config.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { Configuration } from '../config/config.keys';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './app.controller';
import { UserModule } from 'src/modules/user/user.module';
import { AuthModule } from '../modules/auth/auth.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
