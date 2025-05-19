import {MoneyType} from './App';
import styled from 'styled-components';
import {FC} from 'react';

type Props = {
  money: MoneyType
}

export const CurrentBankomat: FC<Props> = ({money}) => {
  return (
    <Banknote key={money.id} color={money.banknote}>
      <Name>{money.banknote}</Name>
      <Nominal>{money.nominal}</Nominal>
    </Banknote>
  );
};

const Banknote = styled.div`
  background-color: ${props => props.color === 'USD' ? 'aquamarine' : 'lightskyblue'};
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
