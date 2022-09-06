import React, { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import './person.scss';
import MainNone from '../Main/MainNone';
import staffInfo from '../../apiData/loadPerson';

import { setMovieId } from '../../redux/actions/movieId';

import { Table } from 'antd';
import PersonTextcontent from './PersonTextcontent';


function Person({staffId}) {
  const dispatch = useDispatch();
  const [personInfo, setPerson] = useState ();
  const [staffs, setShowStaff] = useState(false);

  const onClickStaff = () => {
    setShowStaff(staffs ? false : true);
  };

  const dataSource = personInfo?.films?.map ((item, index) => {
    return item = {
      key: index,
      numder: index + 1,
      profession: item.professionKey,
      raiting: item.rating ? item.rating : '-',
      name: item
    }
  })

  const columns = [
    {
      title: 'N',
      dataIndex: 'numder',
      key: 'numder',
    },
    {
      title: 'Статус',
      dataIndex: 'profession',
      key: 'profession',
    },
    {
      title: 'Райтинг',
      dataIndex: 'raiting',
      key: 'raiting',
    },
    {
      title: 'Название проекта',
      dataIndex: 'name',
      key: 'name',
      render: (_, data) => {
        const onClick = (id) => {
          dispatch(setMovieId(id))
        }
        return <Link to={{pathname: `/films/${data.name.filmId}`}}
                    className='item-name'
                    onClick={() => onClick(data.name.filmId)}>
                  {`${data.name.nameRu ? data.name.nameRu : '' }
                    ${data.name.nameRu && data.name.nameEn ? ' / ' : ''}
                    ${data.name.nameEn ? data.name.nameEn : ''}`}
                </Link>}
    },
  ];

  const pagination = {
    defaultPageSize: 20,
    showSizeChanger: false
  };

  const loadStaff = async () => {
    const staff = await staffInfo (staffId);
    setPerson(staff);
  };
  
  useEffect (() => {
    loadStaff()
  }, [staffId]);

  return (
    <div className='person-page-wrapper'>
      <div className='person-page-empty'></div>
      {personInfo ? <div className='person-page-main'>
        <div className='person-page' >
          <div className='person-page-image-block'>
            <img className='person-page-img' src={personInfo.posterUrl}
              alt={`Изображение: ${personInfo.nameEn}`} width='320px' />
              <div className='person-page-info'>
                <p className='person-page-name'>
                  {personInfo.nameRu}
                  {personInfo.nameRu && personInfo.nameEn ? '/' : null}
                  {personInfo.nameEn}
                </p>
                <p className='person-page-profession'>{personInfo.profession}</p>
              </div>
          </div>
        <PersonTextcontent personInfo={personInfo}/>
        </div>
        <div className='person-films'>
            <div className='person-films-start'>
              <p>Участие в фильмах</p>
              {staffs === false 
                ?<button className='button button-down' onClick={onClickStaff}>&#10094;</button>
                :<button className='button button-up' onClick={onClickStaff}>&#10094;</button>}
            </div>
            {staffs
              ?<Table dataSource={dataSource} columns={columns}
                  pagination={pagination}
                  className='award-table'/>
              : ''}
          </div>
      </div>
      : <MainNone/>}
      <div className='person-page-empty-footer'></div>
    </div>
  )
};

export default Person;