import {ReactNode, useState} from 'react';
import s from './Modal.module.css';

interface ModalProps {
  children: ReactNode
}

export const Modal = ({children}: ModalProps) => {
  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        {children}
      </div>
    </div>
  )
}
