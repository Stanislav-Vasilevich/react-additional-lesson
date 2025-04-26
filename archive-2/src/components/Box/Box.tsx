import s from './Box.module.css';
import {ReactNode} from 'react';

type BoxType = {
  title: string
  text: string
  children?: ReactNode
}

export const Box: React.FC<BoxType> = ({title, text, children}) => {
  return (
    <div className={s.Box}>
      <h2 className={s.title}>{title}</h2>
      {text ? <p className={s.text}>{text}</p> : ''}
      <div className={s.row}>{children}</div>
    </div>
  );
};
