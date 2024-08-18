import { useMemo, } from 'react';

import { interfaces, } from '@ioc/di';

import { useContainer, } from '@Shared/hooks/useContainer';

export const useDependency = <T>(
  id: interfaces.ServiceIdentifier<T>,
): T => {
  const container = useContainer();
  return useMemo(
    () => container.get<T>(id), [container, id]
  );
}