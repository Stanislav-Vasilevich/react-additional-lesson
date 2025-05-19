import {useState} from 'react';
import './App.css';
import {Country} from './Country';
import {v1} from 'uuid';

export type BanknotsType = 'USD' | 'RUB' | 'ALL'
export type MoneyType = {
  banknote: BanknotsType
  nominal: number
  id: string
}

let defaultMoney: MoneyType[] = [
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'RUB', nominal: 100, id: v1()},
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'RUB', nominal: 100, id: v1()},
  {banknote: 'USD', nominal: 100, id: v1()},
  {banknote: 'RUB', nominal: 100, id: v1()},
]

export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
  if (filter === 'USD') {
    return money.filter(m => m.banknote !== 'RUB')
  }
  if (filter === 'RUB') {
    return money.filter(m => m.banknote !== 'USD')
  }
  return money
}

export const App = () => {
  const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
  const [filterValue, setFilterValue] = useState<BanknotsType>('ALL')

  const filteredMoney = moneyFilter(money, filterValue)

  const addMoney = (value: BanknotsType) => {
    const newBanknot = {banknote: value, nominal: 100, id: v1()}
    setMoney(prev => ([...prev, newBanknot]))
  }

  const removeMoney = (banknote: BanknotsType) => {
    const currentMoney = money.find(m => m.banknote === banknote)
    if (currentMoney) {
      setMoney(money.filter((el) => el !== currentMoney));
    }
  }

  return (
    <div className="App">
      <Country
        data={filteredMoney}
        setFilterValue={setFilterValue}
        addMoney={addMoney}
        removeMoney={removeMoney}
      />
    </div>
  );
}
