import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1705667258873 } from 'src/migrations/1705667258873-CreateCoursesTable';
import { CreateTagsTable1705672317864 } from 'src/migrations/1705672317864-CreateTagsTable';
import { CreateCoursesTagsTable1705677127141 } from 'src/migrations/1705677127141-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1705679116291 } from 'src/migrations/1705679116291-AddCoursesIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1705667258873,
    CreateTagsTable1705672317864,
    CreateCoursesTagsTable1705677127141,
    AddCoursesIdToCoursesTagsTable1705679116291,
  ],
});
