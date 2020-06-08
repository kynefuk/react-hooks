import React, { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
import {EventAction, OperationLogsAction} from '../actions';
import {timeCurrentIso8601} from '../utils';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { state, dispatch } = useContext(AppContext);

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: EventAction.CREATE_EVENT,
      title,
      body,
    });
    dispatch({
      type: OperationLogsAction.ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601()
    });
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全削除してよいですか?');
    if (result) {
      dispatch({
        type: EventAction.DELETE_ALL_EVENTS,
      });
      dispatch({
        type: OperationLogsAction.DELETE_ALL_OPERATION_LOGS,
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601()
      })
    }
  };

  const unCreatable = title === '' || body === '';

  const unDeletable = state.events.length === 0;

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input
            className='form-control'
            id='formEventTitle'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea
            className='form-control'
            id='formEventBody'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className='btn btn-primary'
          onClick={addEvent}
          disabled={unCreatable}>
          イベント作成
        </button>
        <button
          className='btn btn-danger'
          onClick={deleteAllEvents}
          disabled={unDeletable}
          >
          イベント全削除
        </button>
      </form>
    </>
  );
};

export default EventForm;
