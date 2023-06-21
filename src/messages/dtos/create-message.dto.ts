import { IsInt, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;

  @IsInt()
  count: number;

  @IsString()
  name: string;

  @IsString()
  dob: string;
}
