import { LoginStyled } from './login.styled.ts';
import { JSX, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/requests.tsx';
import { loginType } from '../../api/types.ts';
import Input from '../../shared-components/input/input.tsx';
import Button from '../../shared-components/button/button.tsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext.tsx';
import { AuthLayoutStyled } from '../../shared-components/styled.ts';
import { useMutation } from '@tanstack/react-query';
import { LoginFormData } from './types.ts';

const LoginPage = (): JSX.Element => {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [currentError, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const { mutate: login, isPending: loading } = useMutation({
    mutationFn: (values: loginType) => loginUser(values),
    onSuccess: ({ data }: any) => {
      if (data.errorMessage) {
        setError(data.errorMessage);
      } else {
        setAuth(data?.token, data.username);
        navigate('/captions');
      }
    },
    onError: (e) => {
      if (e) setError(e.message);
    },
  });

  const onSubmit = (values: loginType) => {
    login(values);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/captions');
    }
  }, []);

  return (
    <AuthLayoutStyled>
      <LoginStyled>
        <span className="label">Log In</span>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          {currentError && <span className="error">{currentError}</span>}
          <Input
            placeholder="Enter Name"
            {...register('username', { required: 'Username is required' })}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            {...register('password', { required: 'Password is required' })}
          />

          <Button type="submit" text="Log in" loading={loading} />

          <Button
            text="Register"
            buttonType="secondary"
            onClick={() => navigate('/register')}
          />
        </form>
      </LoginStyled>
    </AuthLayoutStyled>
  );
};

export default LoginPage;
