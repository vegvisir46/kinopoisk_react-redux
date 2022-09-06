import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './staff.scss';
import staffLoad from '../../../apiData/loadStaff';
import { setStaffId } from "../../../redux/actions/movieId";

import { Pagination } from 'antd';

function Staff({id}) {
  const dispatch = useDispatch();
  const [staffShow, setShowStaff] = useState(false);
  const [staffList, setStaffList] = useState ([]);
  const [current, setCurrent] = useState(1);

  const staffRes = staffList.reduce((res, itemStaff) => {
    if (!res.find(i => i.nameRu == itemStaff.nameRu)) {
      res.push(itemStaff)
    }
    return res
  }, [])

  const staffListArr = []
  for (let i=0; i < staffList.length; i+=20) {
    staffListArr.push(staffRes.slice(i, i + 20))
  };

  const onClickStaff = () => {
    setShowStaff(staffShow ? false : true);
  };

  const onSelectCurrent = (value) => {
    setCurrent(value)
  };

  const onClickStaffId = React.useCallback ((idStaff) => {
    dispatch(setStaffId(idStaff))
  }, []);

  const loadStaff = async () => {
    const staff = await staffLoad (id);
    setStaffList(staff);
  };
  
  useEffect (() => {
    loadStaff()
  }, []);

  return (
    <div className='film-staff'>
       <div className='film-staff-start'>
       <p>Актеры</p>
       {staffShow === false 
         ?<button className='button button-down' onClick={onClickStaff}>&#10094;</button>
         :<button className='button button-up' onClick={onClickStaff}>&#10094;</button>}
       </div>
       {staffShow 
         ? <div className='staff-block'>
             {staffListArr[current - 1]?.map(staff => (
              <div className='staff-block-item' key={`${staff.staffId}_${staff.professionKey}`}>
                <Link to={`/staff/${staff.staffId}`}
                onClick={() =>onClickStaffId(staff.staffId)}>
                  <p>{staff.nameRu ? staff.nameRu : ''}</p>
                  {staff.nameRu && staff.nameEn ? '/' : null}
                  <p>{staff.nameEn ? staff.nameEn : ''}</p>
                </Link>
              </div>
             ))}
             {staffList.length>20
             ?<Pagination className='pagination'
              current={current} onChange={onSelectCurrent} total={staffList.length} 
              defaultPageSize={20} showSizeChanger={false}/>
            : ''}
           </div>
         : ''}
     </div>
  )
}

export default Staff;