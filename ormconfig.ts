import { ConfigModule } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import databaseConfig from './src/config/db';

ConfigModule.forRoot({
  isGlobal: true,
  load: [databaseConfig],
});

export default new DataSource(databaseConfig() as unknown as DataSourceOptions);
