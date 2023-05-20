import { PartialType } from '@nestjs/mapped-types';
import { CreateNoftificationDto } from './create-noftification.dto';

export class UpdateNoftificationDto extends PartialType(CreateNoftificationDto) {
  id: number;
}
