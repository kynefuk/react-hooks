import React, { useContext } from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = () => {
  const { state, _ } = useContext(AppContext);
  return (
    <>
      <h4>イベント一覧</h4>

      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>タイトル</th>
            <th scope='col'>ボディー</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {state.events.map((event, index) => (
            <Event key={index} event={event}></Event>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
