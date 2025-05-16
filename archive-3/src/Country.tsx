import {City} from "./City";
import {BanknotsType, MoneyType} from './App';
import styled from "styled-components";
import {FC} from 'react';

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filter: BanknotsType) => void // давайте подумаем, setFilter - это грузчик, у которого всегда в руках товар
  }

export const Country: FC<CountryPropsType> = ({data, setFilterValue}) => {
    // с деструктуризацией пожалуйста
    const setAll=()=>{
      setFilterValue('ALL')
    }

    const setUSD=()=>{
      setFilterValue('USD')
    }

    const setRUB=()=>{
      setFilterValue('RUB')
    }

   const addMoneyHandler=()=>{

   }

   const removeMoneyHandler=()=>{

   }

    return (
        <Terminal>
            <div>
                <button onClick={setAll}>All</button>
                <button onClick={setUSD}>Dollars</button>
                <button onClick={setRUB}>Rubles</button>
            </div>
            <div>
                {/*сделаем в последнюю очередь*/}
                <button>Положить 100$</button>
                <button >Положить 100р.</button>
                <button >Снять 100$</button>
                <button >Снять 100р.</button>
            </div>
            <City data={data}/>
        </Terminal>
    );
};

const Terminal = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-size: 30px;
  background-color: #282c34;
`
