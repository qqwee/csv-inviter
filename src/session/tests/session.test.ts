import reducer from './../session.reducers';
import {
  ADD_INVITEE,
  REMOVE_INVITEE,
  UPDATE_INVITEE,
} from './../session.actions';
import { deepEqual } from 'assert';

describe('Session reducer', () => {
  test('can add an invitee.', () => {
    const newInvitee: Invitee = {
      id: '34545',
      firstName: 'Mozarella',
      lastName: 'Pizza',
      emailAddress: 'dummy@dummy.ch',
      gender: 'M',
      phoneNumber: '+49849843',
    };
    const action = {
      type: ADD_INVITEE,
      payload: [newInvitee],
    };
    const expectedResult = [
      {
        id: '34545',
        firstName: 'Mozarella',
        lastName: 'Pizza',
        emailAddress: 'dummy@dummy.ch',
        gender: 'M',
        phoneNumber: '+49849843',
      },
    ];
    const result = reducer([], action);
    deepEqual(result, expectedResult);
  });

  test('can remove an invitee by ID.', () => {
    const deleteInvitee: Invitee = {
      id: '34545',
      firstName: 'Mozarella',
      lastName: 'Pizza',
      emailAddress: 'dummy@dummy.ch',
      gender: 'M',
      phoneNumber: '+49849843',
    };
    const action = {
      type: REMOVE_INVITEE,
      payload: deleteInvitee,
    };
    const state = [
      {
        id: '34545',
        firstName: 'Mozarella',
        lastName: 'Pizza',
        emailAddress: 'dummy@dummy.ch',
        gender: 'M',
        phoneNumber: '+49849843',
      },
      {
        id: '2323332',
        firstName: 'Zeus',
        lastName: 'Hades',
        emailAddress: 'test@test.ch',
        gender: 'F',
        phoneNumber: '+232323',
      },
    ];
    const expectedResult = [
      {
        id: '2323332',
        firstName: 'Zeus',
        lastName: 'Hades',
        emailAddress: 'test@test.ch',
        gender: 'F',
        phoneNumber: '+232323',
      },
    ];
    const result = reducer(state, action);
    deepEqual(result, expectedResult);
  });
  test('can update an invitee.', () => {
    const updatedInvitee: Invitee = {
      id: '34545',
      firstName: 'Moza',
      lastName: 'Pizza',
      emailAddress: 'dummy@dummy.dh',
      gender: 'F',
      phoneNumber: '+4dd9849843',
    };
    const action = {
      type: UPDATE_INVITEE,
      payload: updatedInvitee,
    };
    const state = [
      {
        id: '34545',
        firstName: 'Mozarella',
        lastName: 'Pizza',
        emailAddress: 'dummy@dummy.ch',
        gender: 'M',
        phoneNumber: '+49849843',
      },
      {
        id: '2323332',
        firstName: 'Zeus',
        lastName: 'Hades',
        emailAddress: 'test@test.ch',
        gender: 'F',
        phoneNumber: '+232323',
      },
    ];
    const expectedResult = [
      {
        id: '34545',
        firstName: 'Moza',
        lastName: 'Pizza',
        emailAddress: 'dummy@dummy.dh',
        gender: 'F',
        phoneNumber: '+4dd9849843',
      },
      {
        id: '2323332',
        firstName: 'Zeus',
        lastName: 'Hades',
        emailAddress: 'test@test.ch',
        gender: 'F',
        phoneNumber: '+232323',
      },
    ];
    const result = reducer(state, action);
    deepEqual(result, expectedResult);
  });
});
