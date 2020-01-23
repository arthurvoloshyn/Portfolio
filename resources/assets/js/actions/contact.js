import { ACTION_UPDATE_CONTACT } from '../constants/actionTypes';

export default (fieldName, value) => ({
  type: ACTION_UPDATE_CONTACT,
  fieldName,
  value
});
