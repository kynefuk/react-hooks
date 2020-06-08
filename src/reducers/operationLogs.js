import { OperationLogsAction } from '../actions';


export const operationLogs = (state = [], action) => {
  switch(action.type){
    case OperationLogsAction.ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      return [operationLog, ...state];
    case OperationLogsAction.DELETE_ALL_OPERATION_LOGS:
      const operationLogs = {
        description: action.description,
        operatedAt: action.operatedAt
      };
      return [operationLogs, ...state];
    default:
      return state;
  }
}