import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Photo extends Document {
  @Prop({ default: 0 })
  like: number;

  @Prop({ required: true, unique: true })
  photoUrl: string;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);
