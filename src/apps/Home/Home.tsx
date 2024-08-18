import { FunctionComponent, useCallback, useEffect } from 'react';

import { useDependency } from '@Shared/hooks/useDependency';

import { HttpRepository } from '@contexts/shared/domain/repositories/HttpRepository';

type HomeProps = object;

const Home: FunctionComponent<HomeProps> = () => {
  const apiUrl = useDependency<string>('API_URL');
  const httpRepository = useDependency<HttpRepository>('Http');

  const getAllCharacters = useCallback(async () => {
    const result = await httpRepository.get('/character');
    return result;
  }, [httpRepository,])

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed)
      getAllCharacters()
        .then((result) => console.log(result));

    return () => {
      isSubscribed = false;
    }
  }, [getAllCharacters,])

  return (
    <>
      <h1>Home Page</h1>
      <p>API URL: {apiUrl}</p>
    </>
  );
};

export default Home;