import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, getSchemaPath } from '@nestjs/swagger';

interface IApiResponseSchemaOptions {
  statusCode?: number;
  model?: any;
  message?: string;
}

export const ApiResponseSchema = (options?: IApiResponseSchemaOptions) => {
  const status = options?.statusCode || HttpStatus.OK;
  const message = options?.message ?? 'message';
  let model = options?.model;
  let data = {};

  if (!model) {
    return applyDecorators(
      ApiResponse({
        status,
        schema: {
          type: 'object',
          properties: {
            status: {
              type: 'boolean'
            },
            message: {
              type: 'string',
              default: message
            }
          }
        }
      })
    );
  }

  if (Array.isArray(model)) {
    model = options.model[0];
    data = {
      type: 'array',
      items: {
        $ref: getSchemaPath(model)
      }
    };
  } else {
    model = options.model;
    data = {
      $ref: getSchemaPath(options.model)
    };
  }

  return applyDecorators(
    ApiExtraModels(model),
    ApiResponse({
      status,
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'boolean'
          },
          data,
          message: {
            type: 'string',
            default: message
          }
        }
      }
    })
  );
};
