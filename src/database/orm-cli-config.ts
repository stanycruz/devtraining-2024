import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1705667258873 } from 'src/migrations/1705667258873-CreateCoursesTable';
import { CreateTagsTable1705672317864 } from 'src/migrations/1705672317864-CreateTagsTable';
import { CreateCoursesTagsTable1705677127141 } from 'src/migrations/1705677127141-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1705679116291 } from 'src/migrations/1705679116291-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1705679920063 } from 'src/migrations/1705679920063-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1705667258873,
    CreateTagsTable1705672317864,
    CreateCoursesTagsTable1705677127141,
    AddCoursesIdToCoursesTagsTable1705679116291,
    AddTagsIdToCoursesTagsTable1705679920063,
  ],
});
