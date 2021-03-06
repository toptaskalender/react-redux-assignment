import * as actionTypes from '../actions';

const initialState = {
  persons: [],
};

const persons = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age,
      };
      return { persons: state.persons.concat(newPerson) };
    case actionTypes.DELETE_PERSON:
      return {
        persons: state.persons.filter(person => person.id !== action.personId),
      };
    default:
      return state;
  }
};

export default persons;
