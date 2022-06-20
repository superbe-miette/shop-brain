import { IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  readonly label: string;
}
