import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import './award.scss';

import { fetchAwards, setAwardShow } from '../../../redux/actions/infoAboutFilm';
import { setStaffId } from '../../../redux/actions/movieId';

import { Table } from 'antd';

function AwardBlock({ id}) {  
  const dispatch = useDispatch();
  const [awards, setShowAw] = useState(false);
  const {awardShow, awardsFilm} = useSelector(({infoAboutFilm}) => infoAboutFilm);

  const dataSource = awardsFilm.map ((item, index) => {
    return item = {
      key: index,
      numder: index + 1,
      award: item.name,
      nomination: item.nominationName,
      person: item.persons,
      result: item.win ? 'победа' : 'номинация'
    }
  })

  const columns = [
    {
      title: 'N',
      dataIndex: 'numder',
      key: 'numder',
    },
    {
      title: 'Премия',
      dataIndex: 'award',
      key: 'award',
    },
    {
      title: 'Номинация',
      dataIndex: 'nomination',
      key: 'nomination',
    },
    {
      title: 'Номинант',
      dataIndex: 'person',
      key: 'person',
      render: (_, data) => {
        const onClick = (idStaff) => {
          dispatch(setStaffId(idStaff))
        }
        return data.person.map(i => {
          return <Link to={{pathname: `/staff/${i.kinopoiskId}`}}
                      className='item-name' key={i.kinopoiskId}
                      onClick={() => onClick(i.kinopoiskId)}>
                    {`${i.nameRu}  `}
                  </Link>
        })
      }
    },
    {
      title: 'Результат',
      dataIndex: 'result',
      key: 'result',
    },
  ];

  const pagination = {
    defaultPageSize: 10,
    showSizeChanger: false
  };
  
  const onClickAward = () => {
    setShowAw(awards ? false : true);
  };

  React.useEffect (() => {
    dispatch(setAwardShow(awards))
  }, [awards]);

  React.useEffect (() => {
    dispatch(fetchAwards(id))
  }, [awardShow]);

  return ( 
    <div className='film-award'>
      <div className='film-award-start'>
      <p>Награды</p>
      {awardShow === false 
        ?<button className='button button-down' onClick={onClickAward}>&#10094;</button>
        :<button className='button button-up' onClick={onClickAward}>&#10094;</button>}
      </div>
      {awardShow 
        ? <div className='award-block'>
            <p>Количество: {awardsFilm.length}</p>
            <Table dataSource={dataSource} columns={columns}
              pagination={pagination} bordered={true}
              className='award-table'/>
          </div>
        : ''}
    </div>
  )
};

export default AwardBlock;