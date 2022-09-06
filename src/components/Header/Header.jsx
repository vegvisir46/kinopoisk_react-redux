import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import menu from '../../img/header/menu-svgrepo-com.svg';
import {menuList} from './headerData';
import './header.scss';

import { setPageLink, setPagePoint } from '../../redux/actions/header';
import { setSearch } from '../../redux/actions/filters';

import { Input } from 'antd';
const { Search } = Input;

function Header() {  
  const dispatch = useDispatch();
  const {activePage} = useSelector(({header}) => header);

  const onSearch = (search) => dispatch(setSearch(search));

  const onClickPage = React.useCallback( (index) => {
    dispatch(setPagePoint(index))
  }, []);

  const onClickLink = React.useCallback( (index) => {
    dispatch(setPageLink(index))
  }, []);
  
  return (
    <div className='header-wrapper'>
    <header className='header'>
      <div className='header-menu'>
        <Link to={{pathname: `/`}}>
          <img src={menu} alt='Меню'/>
          <p>MovieSearch</p>
        </Link>
        <ul className='header-menu-list'>
          <li className={activePage === null 
              ? 'header-menu-item choice' 
              : 'header-menu-item'}
              onClick={() => onClickPage(null)}>
          <Link to={`/`}>Главная</Link>
          </li>
          {menuList && menuList.map((item, index) => (
            <li className={
              activePage === index 
                ? 'header-menu-item choice' 
                : 'header-menu-item'}
                key={index}
                onClick={() => onClickPage(index)}>
              <Link to={item.link}
              onClick={() => onClickLink(item.link)}>{item.name}</Link>
            </li>
            ))}
        </ul>
      </div>
      <Search className='header-seach'
        placeholder="Поиск фильмов и сериалов"
        allowClear
        onSearch={onSearch}/>
    </header>
    </div>
  )
};

export default Header;