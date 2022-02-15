import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'mr',
  host: 'postgresdb',
  port: 5432,
  username: 'root',
  password: 'root',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
