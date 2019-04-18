import * as actions from './session.actions';

const initialState: Invitee[] = [];

export default (state: any = initialState, action: ISessionAction) => {
  switch (action.type) {
    case actions.ADD_INVITEE:
      return [...action.payload, ...state];
    case actions.REMOVE_INVITEE:
      console.log('REMOVE_INVITEE');
      console.log(action.payload.id);
      console.log(state.filter((e: Invitee) => e.id !== action.payload.id));
      return state.filter((e: Invitee) => e.id !== action.payload.id);
    case actions.UPDATE_INVITEE:
      return state.map((e: Invitee) =>
        e.id === action.payload.id ? action.payload : e
      );
    default:
      return state;
  }
};
