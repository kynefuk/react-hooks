import React from 'react';

const Event = ({ event, handleClickDelete }) => {
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
