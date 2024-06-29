import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotoService } from '@photo/service/photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPhoto(@UploadedFile() image: Express.Multer.File) {
    console.log(image);
    return this.photoService.uploadPhoto(image);
  }
}
