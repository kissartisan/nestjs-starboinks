import { Coffee } from 'src/coffees/entity/coffee.entity';
import { Flavor } from 'src/coffees/entity/flavor.entity';
import { CoffeeRefactor1667623570502 } from 'src/migrations/1667623570502-CoffeeRefactor';
import { SchemaSync1667631771057 } from 'src/migrations/1667631771057-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1667623570502, SchemaSync1667631771057],
});
