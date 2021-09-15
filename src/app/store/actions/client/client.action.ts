import { Action } from '@ngrx/store';
import { ClientData } from 'src/app/core/data-models/client';

export const CLIENT_EVENT_ACTION =  "CLIENT_EVENT_ACTION"
export const CLIENT_EVENT_ACTION_SUCCESS =  "CLIENT_EVENT_ACTION SUCCESS"
export const CLIENT_EVENT_ACTION_FAIL =  "CLIENT_EVENT_ACTION FAIL"

export class LoadClientAction implements Action {
  readonly type = CLIENT_EVENT_ACTION;
}

export class LoadClientActionSuccess implements Action {
  readonly type = CLIENT_EVENT_ACTION_SUCCESS;
  constructor(public payload: ClientData) { }
}

export class LoadClientActionFail implements Action {
  readonly type = CLIENT_EVENT_ACTION_FAIL;
  constructor(public payload: any) { }
}

export const CREATE_CLIENT_ACTION_EVENT = "CREATE CLIENT_ACTION_EVENT"
export const CREATE_CLIENT_ACTION_EVENT_SUCCESS = "CREATE CLIENT_ACTION_EVENT SUCCESS"
export const CREATE_CLIENT_ACTION_EVENT_FAIL = "CREATE CLIENT_ACTION_EVENT FAIL"

export class CreateClientAction implements Action {
  readonly type = CREATE_CLIENT_ACTION_EVENT;
  constructor(public payload: any) { }
}

export class CreateClientActionSuccess implements Action {
  readonly type = CREATE_CLIENT_ACTION_EVENT_SUCCESS;
  constructor(public payload: ClientData) { }
}

export class CreateClientActionFail implements Action {
  readonly type = CREATE_CLIENT_ACTION_EVENT_FAIL;
  constructor(public payload: any) { }
}

export const UPDATE_CLIENT_ACTION_EVENT = "UPDATE CLIENT_ACTION_EVENT"
export const UPDATE_CLIENT_ACTION_EVENT_SUCCESS = "UPDATE CLIENT_ACTION_EVENT SUCCESS"
export const UPDATE_CLIENT_ACTION_EVENT_FAIL = "UPDATE CLIENT_ACTION_EVENT FAIL"

export class UpdateClientAction implements Action {
  readonly type = UPDATE_CLIENT_ACTION_EVENT;
  constructor(public payload: ClientData) { }
}

export class UpdateClientActionSuccess implements Action {
  readonly type = UPDATE_CLIENT_ACTION_EVENT_SUCCESS;
  constructor(public payload: ClientData) { }
}

export class UpdateClientActionFail implements Action {
  readonly type = UPDATE_CLIENT_ACTION_EVENT_FAIL;
  constructor(public payload: any) { }
}

export const DELETE_CLIENT_ACTION_EVENT = "DELETE CLIENT_ACTION_EVENT"
export const DELETE_CLIENT_ACTION_EVENT_SUCCESS = "DELETE CLIENT_ACTION_EVENT SUCCESS"
export const DELETE_CLIENT_ACTION_EVENT_FAIL = "DELETE CLIENT_ACTION_EVENT FAIL"

export class DeleteClientAction implements Action {
  readonly type = DELETE_CLIENT_ACTION_EVENT;
  constructor(public payload: ClientData) { }
}

export class DeleteClientActionSuccess implements Action {
  readonly type = DELETE_CLIENT_ACTION_EVENT_SUCCESS;
  constructor(public payload: ClientData) { }
}

export class DeleteClientActionFail implements Action {
  readonly type = DELETE_CLIENT_ACTION_EVENT_FAIL;
  constructor(public payload: any) { }
}

export type Actions =
  | LoadClientAction
  | LoadClientActionSuccess
  | LoadClientActionFail
  | CreateClientAction
  | CreateClientActionSuccess
  | CreateClientActionFail
  | UpdateClientAction
  | UpdateClientActionSuccess
  | UpdateClientActionFail
  | DeleteClientAction
  | DeleteClientActionSuccess
  | DeleteClientActionFail;

