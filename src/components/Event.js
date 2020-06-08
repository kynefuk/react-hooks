import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import {EventAction, OperationLogsAction} from '../actions';
import {timeCurrentIso8601} from '../utils'

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);
  const handleClickDelete = (id) => {
    const result = window.confirm(
      `このイベント(id: ${id})を削除して良いですか？`
    );
    if (result) {
      dispatch({
        type: EventAction.DELETE_EVENT,
        id,
      });
      dispatch({
        type: OperationLogsAction.ADD_OPERATION_LOG,
        description: `イベント(id=${id})を削除しました。`,
        operatedAt: timeCurrentIso8601()
      })
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
