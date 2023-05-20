import { applyDecorators, SetMetadata, UseInterceptors } from '@nestjs/common';
import { TransformResponseInterceptor } from '../interceptors/transform-response.interceptor';

interface ITransformResponseOptions {
  status?: boolean;
  message?: string;
}

export const TransformResponse = (options?: ITransformResponseOptions) => {
  const status = options?.status ?? true;
  const message = options?.message ?? '';

  return applyDecorators(
    SetMetadata('responseStatus', status),
    SetMetadata('responseMessage', message),
    UseInterceptors(TransformResponseInterceptor)
  );
};
