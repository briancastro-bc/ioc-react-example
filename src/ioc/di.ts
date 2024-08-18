import { Container, } from 'inversify';

import { 
  Injectable,
  InjectableType,
  bindCoreDependencies, 
} from './dependencies';

const container = bindCoreDependencies(
  new Container({
    defaultScope: 'Singleton',
  })
);

export { container, };
export type {
  Injectable,
  InjectableType,
}
export * from 'inversify';