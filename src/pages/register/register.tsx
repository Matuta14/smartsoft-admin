import React, { JSX, useContext, useEffect, useState } from 'react';
import { RegisterStyled } from './register.styled.ts';

//TODO: fix this ugly imports
import { useForm } from 'react-hook-form';
import { registerUser } from '../../api/requests.tsx';
import { registerType } from '../../api/types.ts';
import Input from '../../shared-components/input/input.tsx';
import Button from '../../shared-components/button/button.tsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext.tsx';
import { AuthLayoutStyled } from '../../shared-components/styled.ts';
import { useMutation } from '@tanstack/react-query';
type RegisterFormData = {
  username: string;
  password: string;
  confirm_password: string;
};

const RegisterPage = (): JSX.Element => {
  const {
    register: registerInput,
    handleSubmit,
    getValues,
    formState,
  } = useForm<RegisterFormData>();

  const { setAuth, token } = useContext(AuthContext);
  const [currentError, setError] = useState<string>();
  const navigate = useNavigate();

  const { mutate: register, isPending: loading } = useMutation({
    mutationFn: (values: registerType) => registerUser(values),
    onSuccess: ({ data }: any) => {
      if (data.errorMessage) {
        setError(data.errorMessage);
      } else {
        setAuth(data?.token, data?.username);
        navigate('/captions');
      }
    },
    onError: (e) => {
      if (e) setError(e.message);
    },
  });

  const onSubmit = async (values: registerType) => {
    register(values);
  };

  useEffect(() => {
    if (token) navigate('/captions');
  }, []);
  return (
    <AuthLayoutStyled>
      <RegisterStyled>
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <span className="label">Register</span>
          {(currentError || formState.errors.confirm_password?.message) && (
            <span className="error">
              {currentError || formState.errors.confirm_password?.message}
            </span>
          )}
          <Input
            placeholder="Enter Name"
            {...registerInput('username', { required: 'Username is required' })}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            {...registerInput('password', { required: 'password is required' })}
          />

          <Input
            placeholder="Confirm Password"
            type="password"
            {...registerInput('confirm_password', {
              required: 'password is required',
              validate: (value) =>
                value === getValues('password') || 'Passwords do not match',
            })}
          />

          <Button type="submit" text="Register" loading={loading} />

          <Button
            buttonType="secondary"
            text="Login"
            onClick={() => navigate('/login')}
          />
        </form>
      </RegisterStyled>
    </AuthLayoutStyled>
  );
};

export default RegisterPage;
