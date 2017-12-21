import * as CommonStore from '../reducers/CommonStore';

const setText = (payload: string): CommonStore.ActionTypes => ({
  type: 'COMMON_STORE#SET_TEXT',
  payload,
});
