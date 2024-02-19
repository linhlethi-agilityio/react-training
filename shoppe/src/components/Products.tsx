import { useUser } from '@hooks/useUser';
import { SWRConfig } from 'swr';

const Test = () => {
  const { data: user } = useUser();

  console.log(user);

  return <div>aa</div>;
};

const Products = () => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Test />
    </SWRConfig>
  );
};

export { Products };
