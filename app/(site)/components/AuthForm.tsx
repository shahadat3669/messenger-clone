'use client';

import { useCallback, useState } from 'react';

type variant = 'LOGIN' | 'RESISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<variant>('LOGIN');
  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('RESISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  return <div>AuthForm</div>;
};

export default AuthForm;
