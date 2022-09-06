import React from 'react';

import { filterMonth, filterYear } from './filterArray';
import '../Main/main.scss';

import { Select } from 'antd';
const { Option } = Select;

function FiltersPremier({setMonth, setYear, year, month}) {
  const handleChangeMonth = (value) => {
    return setMonth(value);
  };

  const handleChangeYear = (value) => {
    return setYear (value)
  };

  return (
    <div className='main-filters'>
      <Select className='main-select-item'
        placeholder="Месяц премьеры"
        onChange={handleChangeMonth}  allowClear
        onClear={()=> handleChangeMonth(null)}
        value={month}>
        {filterMonth.map((item, index) => 
          <Option value={item.value} key={index}>{item.text}</Option>)}
      </Select>
      <Select className='main-select-item'
        showSearch value={year}
        optionFilterProp="children"
        placeholder="Год премьеры" allowClear
        onChange={handleChangeYear}
        onClear={()=> handleChangeYear(null)}
      >
        {filterYear?.map((item, index) => 
          <Option value={item} key={index}>{item}</Option>)}
      </Select>
    </div>
  )
};

export default FiltersPremier;