import { createAction } from 'redux-actions';

export const AREA_VALUE = createAction('AREA_VALUE');
export const TODO_ITEM = createAction('TODO_ITEM');
export const HANDLE_AREA_CHANGE = createAction('HANDLE_AREA_CHANGE');
export const HANDLE_AREA_SUBMIT = createAction('HANDLE_AREA_SUBMIT');
export const TODO_LIST = createAction('TODO_LIST');
export const REMOVE_TODO_ITEM = createAction('REMOVE_TODO_ITEM');
export const EDIT_TODO_LIST_ITEM = createAction('EDIT_TODO_LIST_ITEM');
export const MODAL_CLASS = createAction('MODAL_CLASS');
export const HANDLE_REMOVE_OPEN_MODAL = createAction('HANDLE_REMOVE_OPEN_MODAL');
export const HANDLE_CLOSE_MODAL = createAction('HANDLE_CLOSE_MODAL');