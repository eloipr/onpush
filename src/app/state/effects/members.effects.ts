import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType, Effect } from "@ngrx/effects";
import { MemberService } from "src/app/services/member.service";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class MembersEffects {
    loadMembers$ = createEffect(() =>
        this.actions$.pipe(
            ofType("[Members] Load Members"),
            mergeMap(() =>
                this.memberService
                    .getMembers()
                    .pipe(map((members) => ({ type: "[Members] Loaded Successfully", members })))
            )
        )
    );

    constructor(private actions$: Actions, private memberService: MemberService) {}
}
