import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotoRepository {
  async uploadPhoto(image: Express.Multer.File) {}

  async getRandomPhoto() {
    return 'random photo';
  }
}
