import React, { useState } from 'react';

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    });
  };

  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm('全削除してよいですか?');
    if (result) {
      dispatch({
        type: 'DELETE_ALL_EVENT',
      });
    }
  };

  const unCreatable = title === '' || body === '';

  const unDeletable = state.length === 0;

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
