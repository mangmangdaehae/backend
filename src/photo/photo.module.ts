import { Module } from '@nestjs/common';
import { PhotoController } from './controller/photo.controller';
import { PhotoService } from './service/photo.service';
import { PhotoRepository } from './repository/photo.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoSchema } from '@mongoose/schema/photo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }]),
  ],
  controllers: [PhotoController],
  providers: [PhotoService, PhotoRepository],
})
export class PhotoModule {}
