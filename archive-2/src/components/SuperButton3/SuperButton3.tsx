import {ReactNode} from 'react';

type PropsType = {
  className: string
  children: ReactNode
}

export const SuperButton3 = (props: PropsType) => {
  return (
    <button className={props.className}>{props.children}</button>
  );
};

