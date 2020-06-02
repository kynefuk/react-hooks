import React, { useState, useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import Event from './Event';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
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

  const handleClickDelete = (id) => {
    const result = window.confirm(
      `このイベント(id: ${id})を削除して良いですか？`
    );
    if (result) {
      dispatch({
        type: 'DELETE_EVENT',
        id,
      });
    }
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
    <div className='container-fluid'>
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
          {state.map((event, index) => (
            <Event
              key={index}
              event={event}
              handleClickDelete={handleClickDelete}></Event>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
