import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const status = this.reflector.get<string>('responseStatus', context.getHandler());
    const message = this.reflector.get<string>('responseMessage', context.getHandler());

    return next.handle().pipe(
      map(data => ({
        status,
        data,
        message
      }))
    );
  }
}
