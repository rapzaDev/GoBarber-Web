import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { Container } from './styles';

import { ToastMessage } from '../../hooks/ToastContext';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWhitTransition = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0, transform: 'rotateX(180deg)' },
      enter: { right: '0%', opacity: 0.93, transform: 'rotateX(0deg)' },
      leave: { right: '-120%', opacity: 0, transform: 'rotateX(180deg)' },
    },
  );

  return (
    <Container>
      {messagesWhitTransition.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
