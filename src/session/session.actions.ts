// import { $invitationServer } from './services';

export const ADD_INVITEE = 'add_invitee';
export const REMOVE_INVITEE = 'remove_invitee';
export const UPDATE_INVITEE = 'update_invitee';

export const addInvitee = (invitees: Invitee[]): ISessionAction => ({
  type: ADD_INVITEE,
  payload: invitees,
});

export const removeInvitee = (id: string): ISessionAction => ({
  type: REMOVE_INVITEE,
  payload: {
    id,
  },
});

export const updateInvitee = (updatedInvitee: Invitee) => ({
  type: UPDATE_INVITEE,
  payload: updatedInvitee,
});

// NOTE:
// Skeleton for connecting with the backend. The backend returns all accepted email address back.
// export const sendInvites = () => (dispatch: any, getState: any) => {
//   $invitationServer(getState())
//     .then(res => {
//       dispatch(removeInvitees(res.data));
//     })
//     .catch(err => {
//       dispatch(errorToast(err));
//     });
// };
