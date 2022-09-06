import React, {useEffect, useState} from 'react';
import './budget.scss'
import budgetMovie from '../../../apiData/budgetLoad';

function Budget({id, movieAbout}) {
  const [budget, setBox] = useState([]);

  const loadBudget = async () => {
    const box = await budgetMovie(id);
    setBox(box);
  }

  useEffect(() => {
    loadBudget()
  }, [movieAbout])

  const boxBudget = budget.findIndex(i => i.type === 'BUDGET');
  const boxWorld = budget.findIndex(i => i.type === 'WORLD');
  const boxUSA = budget.findIndex(i => i.type === 'USA');
  const boxRU = budget.findIndex(i => i.type === 'RUS');

  return (
    budget.length > 0
    ? <div className='film-budget'>
      {boxBudget !== -1 
        ? <div className='film-budget-item'>
            <p>Бюджет: </p><span>{`${budget[boxBudget].amount.toLocaleString()} 
            ${budget[boxBudget].symbol}`}</span>
          </div> 
        : ''}
      {boxWorld !== -1 
        ? <div className='film-budget-item'>
            <p>Сборы по миру: </p> <span>{`${budget[boxWorld].amount.toLocaleString()} 
            ${budget[boxWorld].symbol}`}</span>
          </div> 
        : ''}
      {boxUSA !== -1 
        ? <div className='film-budget-item'>
            <p>Сборы по США: </p><span>{`${budget[boxUSA].amount.toLocaleString()} 
            ${budget[boxUSA].symbol}`}</span>
          </div>
        : ''}
      {boxRU !== -1 
        ? <div className='film-budget-item'>
            <p>Сборы по России: </p><span>{`${budget[boxRU].amount.toLocaleString()} 
            ${budget[boxRU].symbol}`}</span>
          </div> 
        : ''}
    </div>
    : ''
  )
}

export default Budget;