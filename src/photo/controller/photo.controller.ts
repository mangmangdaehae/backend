import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotoService } from '@photo/service/photo.service';

@Controller('photo')
export class PhotoController {
  constructor(
    private readonly photoService: PhotoService,
    private readonly configService: ConfigService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPhoto(@UploadedFile() image: Express.Multer.File) {
    console.log(image);
    return this.photoService.uploadPhoto(image);
  }

  @Get()
  getHello() {
    console.log(this.configService.get('MONGO_URL'));
  }
}
