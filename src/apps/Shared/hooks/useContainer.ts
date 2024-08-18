import { useContext, } from 'react';

import { Container, } from '@ioc/di';
import { ContainerContext, } from '@Shared/contexts/ContainerProvider';

export const useContainer: () => Container = () => 
  useContext(ContainerContext);