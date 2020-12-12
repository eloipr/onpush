import { createAction, props } from "@ngrx/store";
import { IMember } from "src/app/interfaces/member";

export const membersLoaded = createAction("[Members] Loaded Successfully", props<{ members: IMember[] }>());

export const loadMembers = createAction("[Members] Load Members");
