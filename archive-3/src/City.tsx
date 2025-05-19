import {CurrentBankomat} from './CurrentBankomat';
import {MoneyType} from './App';
import styled from 'styled-components';
import {FC} from 'react';

type CityPropsType = {
  data: MoneyType[]
}

export const City: FC<CityPropsType> = ({data}) => {
  const mappedMoney = data.map((el: MoneyType) => (
    <CurrentBankomat
      key={el.id}
      money={el}
    />
  ))

  return (
    <Wrapper>
      {mappedMoney}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
