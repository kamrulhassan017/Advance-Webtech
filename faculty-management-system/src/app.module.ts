import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesModule } from './faculties/faculties.module';
import { Faculty } from './faculties/entities/faculty.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345', 
      database: 'faculty_db',
      entities: [Faculty],
      synchronize: true,
    }),
    FacultiesModule,
  ],
})
export class AppModule {}