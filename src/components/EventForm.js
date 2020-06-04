import React, { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
import Action from '../actions';

const EventForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { events, dispatch } = useContext(AppContext);

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: Action.CREATE_EVENT,
      title,
      body,
    });
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全削除してよいですか?');
    if (result) {
      dispatch({
        type: Action.DELETE_ALL_EVENTS,
      });
    }
  };

  const unCreatable = title === '' || body === '';

  const unDeletable = events.length === 0;

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
          disabled={unDeletable}>
          イベント全削除
        </button>
      </form>
    </>
  );
};

export default EventForm;
