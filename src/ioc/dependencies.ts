import { Container, } from '@ioc/di';

import { FetchHttpRepository } from '@contexts/shared/infrastructure/repositories/FetchHttpRepository';

type InjectableType = 'class' | 'constant';

type Injectable = {
  id: string;
  value: any;
  type: InjectableType;
};

const dependencies: Array<Injectable> = [
  {
    id: 'API_URL',
    value: 'https://rickandmortyapi.com/api',
    type: 'constant',
  },
  {
    id: 'Http',
    value: FetchHttpRepository,
    type: 'class',
  },
];

function bindCoreDependencies(container: Container): Container {
  dependencies.forEach(dependency => {
    const actions: {
      [K in InjectableType]: () => void
    } = {
      'class': () => container
        .bind(dependency.id)
        .to(dependency.value)
        .inSingletonScope(),
      'constant': () => container
        .bind(dependency.id)
        .toConstantValue(dependency.value),
    }

    actions[dependency.type]();
  })

  return container;
}

export { bindCoreDependencies, };
export type {
  Injectable,
  InjectableType,
};