import s from './Products.module.css';
import {Product} from '../../App';
import {SuperButton2} from '../SuperButton2/SupperButton2';

type Props = {
  products: Product[]
  openModal: (id: number, title: string) => void
};

export const Products: React.FC<Props> = ({products, openModal}) => {
  const openPopupHandler = (id: number, title: string) => {
    openModal(id, title);
  }

  return (
    <ul className={s.list}>
      {products.map(i => {
        return (
          <li key={i.id} className={s.item}>
            <img className={s.img} src={i.link} alt={i.model}/>
            {`${i.model}`}
            <div className={s.row}>
              <SuperButton2 color="default" onClick={() => openPopupHandler(i.id, 'Заказать')} id={i.id}>Заказать</SuperButton2>
              <SuperButton2 color="secondary" onClick={() => openPopupHandler(i.id, 'Посмотреть')} id={i.id}>Посмотреть</SuperButton2>
            </div>
          </li>
        )
      })}
    </ul>
  );
};
