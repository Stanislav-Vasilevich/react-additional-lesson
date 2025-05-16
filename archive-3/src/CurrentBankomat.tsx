import {MoneyType} from './App';
import styled from 'styled-components';
import {FC} from 'react';

type CurrentBankomatPropsType = {
  money: MoneyType[]
}

export const CurrentBankomat: FC<CurrentBankomatPropsType> = ({money}) => {
  // с деструктуризацией пожалуйста
  return (
    <div>
      {
        money.map(m => {
          return (
            <Banknote key={m.id} color={m.nominal === 'USD' ? 'aquamarine' : 'lightskyblue'}>
              <Name>{m.banknote}</Name>
              <Nominal>{m.nominal}</Nominal>
            </Banknote>
          )
        })
      }
    </div>
  );
};


const BanknoteGreen = styled.div`
  background-color: aquamarine;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteBlue = styled.div`
  background-color: lightskyblue;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Banknote = styled.div`
  // background-color: ...
  width: 200px;
  height: 100px;
  margin: 5px;
`


const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 45px;
`
