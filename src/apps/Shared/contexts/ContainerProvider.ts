import { createContext, } from 'react';

import { Container, } from '@ioc/di';

export const ContainerContext = createContext<Container>(undefined as unknown as Container);
ContainerContext.displayName = 'ContainerContext';