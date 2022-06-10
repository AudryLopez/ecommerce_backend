import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    if (isDevelopmentEnv) {
      const envFilePath = join(__dirname, '../../.env');
      const existPath = existsSync(envFilePath);
      if (!existPath) {
        console.log('.env file does not exist');
        process.exit(0);
      }
      const envFileText = readFileSync(envFilePath);

      this.envConfig = parse(envFileText);
    } else {
      this.envConfig = {
        PORT: process.env.PORT,
        DB_PORT: process.env.DB_PORT,
        DB_USER: process.env.DB_USER,
        DB_NAME: process.env.DB_NAME,
        DB_CONNECTION_READ: process.env.DB_CONNECTION_READ,
        DB_CONNECTION_WRITE: process.env.DB_CONNECTION_WRITE,
        DB_READ_PASS: process.env.DB_READ_PASS,
        DB_WRITE_PASS: process.env.DB_WRITE_PASS,
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
      };
    }
  }

  get(key: string): string {
    const keyExistInEnvs = key in this.envConfig;
    if (!keyExistInEnvs) {
      throw `${String(key)} is a missing enviroments variables.`;
    }
    return this.envConfig[key];
  }
}
