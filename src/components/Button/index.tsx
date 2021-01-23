import React, { ButtonHTMLAttributes } from 'react';

import { useLoading, Grid } from '@agney/react-loading';

import { Container, IndicatorContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  'aria-busy'?: boolean;
  'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Grid />,
  });

  return (
    <Container type="button" {...rest}>
      {loading ? (
        <IndicatorContainer {...containerProps}>
          {indicatorEl}
        </IndicatorContainer>
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;
