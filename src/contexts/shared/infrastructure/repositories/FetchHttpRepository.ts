import { inject, injectable, } from '@ioc/di';

import { HttpRepository, } from '@contexts/shared/domain/repositories/HttpRepository';

@injectable()
export class FetchHttpRepository implements HttpRepository {
  constructor(
    @inject('API_URL') private readonly url: string,
  ) {}

  async get<T>(
    path: string, 
    params?: Record<string, any>
  ): Promise<T> {
    // const endpoint = new URL(path, this.url);

    const response = await fetch(`${this.url}${path}`, {
      ...(params && {
        ...params,
      }),
      method: 'GET',
      headers: {
        ...(params && params?.headers && {
          ...params.headers,
        }),
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
    });

    const data = await response.json() as T;
    return data;
  }
}