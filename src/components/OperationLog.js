import React from 'react';

export const OperationLog = (props) => {
  return(
    <tr>
      <td>{props.operationLog.description}</td>
      <td>{props.operationLog.operatedAt}</td>
    </tr>
  )
}