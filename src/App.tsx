import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { container } from '@ioc/di';

import { ContainerContext } from '@Shared/contexts/ContainerProvider';

import router from './router';

const App: React.FC = () => {
  return (
    <>
      <ContainerContext.Provider value={container}>
        <RouterProvider router={router} />
      </ContainerContext.Provider>
    </>
  );
};

export default App;