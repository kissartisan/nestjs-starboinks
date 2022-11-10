import { DynamicModule, Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

/*
  👉👉👉 NOTE: If you are following along with this course and going to keep this dynamic module...

  ⭐⭐⭐⭐ ️️Make sure you pass in "username" and "password".

    {
        type: 'postgres',
        host: 'localhost',
        username: '',
        password: '',
        port: 5432,
    }
*/
@Module({})
export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options).initialize(),
        },
      ],
    };
  }
}
