import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);