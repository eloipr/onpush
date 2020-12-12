import { createReducer, on } from "@ngrx/store";

import { membersLoaded } from "../actions/members.actions";

export const membersReducer = createReducer(
    {},
    on(membersLoaded, (state, { members }) => [...members])
);
