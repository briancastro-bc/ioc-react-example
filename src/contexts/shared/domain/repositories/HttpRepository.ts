export interface HttpRepository {
  get<T>(
    path: string,
    params?: Record<string, any>,
  ): Promise<T>;
}