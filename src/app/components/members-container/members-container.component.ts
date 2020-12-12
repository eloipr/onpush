import { Component, OnInit } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { timer } from "rxjs";

import { selectMembers } from "src/app/state/selectors/members.selectors";
import { loadMembers } from "src/app/state/actions/members.actions";

@Component({
    selector: "app-members-container",
    templateUrl: "./members-container.component.html",
    styleUrls: ["./members-container.component.scss"],
})
export class MembersContainerComponent implements OnInit {
    members$ = this.store.pipe(select(selectMembers));

    constructor(private store: Store) {}

    ngOnInit(): void {
        timer(0, 5000).subscribe(() => this.store.dispatch(loadMembers()));
    }
}
