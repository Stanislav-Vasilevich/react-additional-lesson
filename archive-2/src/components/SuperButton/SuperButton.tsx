import {ButtonHTMLAttributes} from 'react';

type OtherProps = {
  red?: string
  blue?: string
  green?: string
}

type ElseProps = {
  html?: string
  css?: string
  js?: string
}

type SupperButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
  & {
  background?: string // дополнение типизации
}
  & OtherProps // дополнение типизации
  & Omit<ElseProps, 'html' | 'css'> // убрать из типизации html и css

export const SuperButton = (props: SupperButtonProps) => {
  const {children, ...restProps} = props;

  return (
    <button {...restProps}>{children}</button> // так можно передать в className цвета кнопок
  );
};

