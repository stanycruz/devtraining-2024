import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1705667258873 } from 'src/migrations/1705667258873-CreateCoursesTable';
import { CreateTagsTable1705672317864 } from 'src/migrations/1705672317864-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1705667258873, CreateTagsTable1705672317864],
});
