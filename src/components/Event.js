import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import Action from '../actions';

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const handleClickDelete = (id) => {
    const result = window.confirm(
      `このイベント(id: ${id})を削除して良いですか？`
    );
    if (result) {
      dispatch({
        type: Action.DELETE_EVENT,
        id,
      });
    }
  };

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => handleClickDelete(event.id)}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
