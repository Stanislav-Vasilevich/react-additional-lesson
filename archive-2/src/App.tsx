import './App.css';
import {SuperButton} from './components/SuperButton/SuperButton';
import {SuperButton2} from './components/SuperButton2/SupperButton2';
import {SuperButton3} from './components/SuperButton3/SuperButton3';
import s from './components/SuperButton/SuperButton.module.css';
import s3 from './components/SuperButton3/SuperButton3.module.css';
import {Box} from './components/Box/Box';
import {Products} from './components/Products/Products';
import {Modal} from './components/Modal/Modal';
import adidas from './components/Products/img/adidas.jpg';
import puma from './components/Products/img/puma.jpg';
import {useState} from 'react';

export type Product = {
  id: number
  model: string
  size: string
  link: string
}

function App() {
  const [popup, setPopup] = useState('');
  const [idSneakers, setIdSneakers] = useState(0);

  const sneakers: Product[] = [
    {id: 1, model: 'ADIDAS', size: 'XXX', link: adidas},
    {id: 2, model: 'PUMA', size: 'SX', link: puma},
  ];

  const openModal = (id: number, title: string) => {
    if (title === 'Заказать') {
      setPopup('Заказать');
    }

    if (title === 'Посмотреть') {
      setPopup('Посмотреть');
    }

    setIdSneakers(id);
  }

  const closeModal = () => {
    setPopup('');
  }

  return (
    <div className="App">
      <h1>Понедельник(3-я неделя). Архив 2</h1>
      <div className="row">
        <Box
          title="Кнопка №1"
          text="Типизация через: ButtonHTMLAttributes<HTMLButtonElement> + расширение типизации через & и исключение через & Omit<OtherProps, 'свойство' | 'свойство'>. Передача через children. Вывод классов через {...restProps} прямо как атрибут">
          <SuperButton className={s.red}>
            Red super Button
          </SuperButton>
          <SuperButton className={s.blue}>
            Blue super Button
          </SuperButton>
        </Box>

        <Box
          title="Кнопка №2"
          text="Вывод стилей кнопок из модуля CSS и далее прописываю условие и пробрасываю в className">
          <SuperButton2 color="red">Red</SuperButton2>
          <SuperButton2 color="secondary">Secondary</SuperButton2>
          <SuperButton2 color="default">Default</SuperButton2>
          <SuperButton2 disabled>Disabled</SuperButton2>
        </Box>

        <Box
          title="Кнопка №3"
          text="Типизация по умолчанию через PropsType и отображение. Все стили пробрасываю через className">
          <SuperButton3 className={s3.red}>
            Red super Button
          </SuperButton3>
          <SuperButton3 className={s3.blue}>
            Blue super Button
          </SuperButton3>
        </Box>

        <Box title="Кнопка №4" text="Отображение кнопок с помощью children и открытие модальных окон по клику">
          <Products products={sneakers} openModal={openModal}/>
        </Box>

        {
          popup === 'Заказать'
          && <Modal>
            <input type="text" placeholder="Введите ваше имя"/>
            <input type="email" placeholder="Введите ваш email"/>
            <SuperButton2 id={3} color="default" onClick={closeModal}>Заказать</SuperButton2>
          </Modal>
        }

        {
          popup === 'Посмотреть'
          && <Modal>
            <h3>{sneakers.find(i => i.id === idSneakers).model}</h3>
            <img src={sneakers.find(i => i.id === idSneakers).link} alt={sneakers.find(i => i.id === idSneakers).model}/>
            <SuperButton2 id={4} color="default" onClick={closeModal}>Закрыть</SuperButton2>
          </Modal>
        }
      </div>
    </div>
  );
}

export default App;
