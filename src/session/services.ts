import axios from 'axios';

export const $invitationServer = (invitee: Invitee[]) => {
  return axios.post('/invitations', {
    invitee: invitee,
  });
};
