'use client';

import Button from '@/app/components/buttons/Button';
import Input from '@/app/components/inputs/Input';
import { useCallback, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

type variant = 'LOGIN' | 'RESISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('RESISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === 'RESISTER') {
      // resister user
    }

    if (variant === 'LOGIN') {
      // login user
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // using NextAuth social sign in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'RESISTER' && (
            <Input
              id="name"
              label="Name"
              register={register}
              type="text"
              errors={errors}
            />
          )}

          <Input
            id="email"
            type="email"
            label="Email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            register={register}
            errors={errors}
          />
          <Button
            disabled={isLoading}
            fullWidth
            type="submit"
          >
            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
