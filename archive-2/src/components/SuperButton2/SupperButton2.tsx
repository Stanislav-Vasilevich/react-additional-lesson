import s from './SuperButton2.module.css';

type PropsType = {
  id?: number
  onClick?: (id: number) => void
  color?: string
  children: string
  disabled?: boolean
}

export const SuperButton2: React.FC<PropsType> = (
  {
    id,
    onClick,
    color,
    children,
    disabled,
    ...rest
  }) => {
  const finalClassName = `
    ${s.button}
    ${color === 'red' ? s.red : ''}
    ${color === 'secondary' ? s.secondary : ''}
    ${color === 'default' ? s.default : ''}
    ${disabled ? s.disabled : ''}
  `

  return (
    <button className={finalClassName} onClick={() => onClick(id)}>{children}</button>
  );
};

