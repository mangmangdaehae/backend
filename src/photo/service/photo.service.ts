import { Injectable } from '@nestjs/common';
import { PhotoRepository } from '@photo/repository/photo.repository';

@Injectable()
export class PhotoService {
  constructor(private readonly photoRepository: PhotoRepository) {}

  async uploadPhoto(image: Express.Multer.File) {
    return this.photoRepository.uploadPhoto(image);
  }

  async getRandomPhoto(): Promise<string> {
    return this.photoRepository.getRandomPhoto();
  }
}
