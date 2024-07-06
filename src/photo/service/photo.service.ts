import { Photo } from '@mongoose/schema/photo.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PhotoRepository } from '@photo/repository/photo.repository';
import { Model } from 'mongoose';

@Injectable()
export class PhotoService {
  constructor(
    private readonly photoRepository: PhotoRepository,
    @InjectModel('Photo') private readonly photoModel: Model<Photo>,
  ) {}

  async uploadPhoto(photo: Express.Multer.File) {
    const uploadPhoto = new this.photoModel(photo);
    return uploadPhoto.save();
  }

  async getRandomPhoto(): Promise<string> {
    return this.photoRepository.getRandomPhoto();
  }
  async findAll(): Promise<Photo[]> {
    return this.photoModel.find().exec();
  }
}
