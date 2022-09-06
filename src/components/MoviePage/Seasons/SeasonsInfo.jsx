import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';

import './seasons.scss';
import { fetchSeasonList, setSeasonInfo } from '../../../redux/actions/infoAboutFilm';

import { Table } from 'antd';

function SeasonsInfo({id}) {
  const dispatch = useDispatch();
  const [seasonStatus, setStatus] = useState (false); 
  const {seasonInfo, seasonsList} = useSelector(({infoAboutFilm}) => infoAboutFilm);

  const numberOfEpisodes = seasonsList?.reduce((sum, season) => {
    return sum + season?.episodes?.length
    }, 0);

  const onClickSeason = () => {
    setStatus(seasonStatus ? false : true)
  };
  
  React.useEffect (() => {
    dispatch(setSeasonInfo(seasonStatus))
  }, [seasonStatus]);

  React.useEffect (() => {
    dispatch(fetchSeasonList(id))
  }, [seasonInfo]);

  const dataSource = (obj) => {
    return obj.episodes.map((item, index) => {
      return item = {
        key: index,
        number: item.episodeNumber,
        name: `${item.nameRu !== null ? item.nameRu : ''}  ${item.nameEn !== null ? item.nameEn : ''}`,
        release: new Date(item.releaseDate).toLocaleDateString()
      }
    })
  };

  const columns = [
    {
      title: 'N',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Название серии',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Дата релиза',
      dataIndex: 'release',
      key: 'release',
    },
  ];

  return (
     <div className='film-season'>
        <div className='film-season-start'>
        <p>Подробнее о сезонах</p>
        {seasonInfo === false 
          ?<button className='button button-down' onClick={onClickSeason}>&#10094;</button>
          :<button className='button button-up' onClick={onClickSeason}>&#10094;</button>}
        </div>
        {seasonInfo 
          ? <div className='season-block'>
              <p>Сезоны  {seasonsList.length} - количество серий {numberOfEpisodes}</p>
              {seasonsList.map(season => (
                <div className='season-block-item' key={`${season.number}_${season.episodes.length}`}>
                <p>Сезон {season.number} - количество серий {season.episodes.length}</p>
                <Table dataSource={dataSource(season)} columns={columns}
                  className='season-table' 
                  pagination={false}/>
              </div>
              ))}
            </div>
          : ''}
      </div>
  )
};

export default SeasonsInfo;