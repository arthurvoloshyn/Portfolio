import ACTION_TYPES from '../../constants/actionTypes';

const updateContact = (fieldName, value) => ({
  type: ACTION_TYPES.UPDATE_CONTACT,
  fieldName,
  value,
});

export default updateContact;
