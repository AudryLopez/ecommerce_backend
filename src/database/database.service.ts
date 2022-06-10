import { Configuration } from './../config/config.keys';
import { ConfigService } from './../config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConnectionOptions } from 'typeorm';

export const databaseProvider = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: false,
        type: 'postgres' as 'postgres',
        replication: {
          master: {
            host: config.get(Configuration.DB_CONNECTION_WRITE),
            username: config.get(Configuration.DB_USER),
            password: config.get(Configuration.DB_WRITE_PASS),
            database: config.get(Configuration.DB_NAME),
          },
          slaves: [
            {
              host: config.get(Configuration.DB_CONNECTION_READ),
              username: config.get(Configuration.DB_USER),
              password: config.get(Configuration.DB_READ_PASS),
              database: config.get(Configuration.DB_NAME),
            },
          ],
        },
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        synchronize: true,
      } as ConnectionOptions;
    },
  }),
];
