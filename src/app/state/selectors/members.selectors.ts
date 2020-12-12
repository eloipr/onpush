import { createSelector } from "@ngrx/store";

import { IMember } from "src/app/interfaces/member";
import { AppState } from "../app.state";

export const selectMembers = createSelector(
    (state: AppState) => state.members,
    (members: IMember[]) => members
);
