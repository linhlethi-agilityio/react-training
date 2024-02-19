import { post } from 'src/services/APIRequest';
import useSWRMutation from 'swr/mutation';

const Login = () => {
  const { trigger, isMutating } = useSWRMutation('http://localhost:3000/users', post);

  const handleOnClick = async () => {
    try {
      // const data = {
      //   email: 'linh123@gmail.com',
      //   password: '123456',
      // };

      const response = await trigger();
      console.log(response);
    } catch (e) {
      console.error(`${e}`);
    }
  };

  return (
    <div>
      <button disabled={isMutating} onClick={handleOnClick}>
        Create User
      </button>
      <div>aaa</div>
    </div>
  );
};

export { Login };
