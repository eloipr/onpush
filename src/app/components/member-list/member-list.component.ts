import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";

import { IMember } from "src/app/interfaces/member";
import { ITask } from "src/app/interfaces/task";

@Component({
    selector: "app-member-list",
    templateUrl: "./member-list.component.html",
    styleUrls: ["./member-list.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberListComponent implements OnInit {
    @Input() members: IMember[] = [];
    @Output() addMember = new EventEmitter();
    @Output() updateMembers = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    identify(index: number, item: IMember | ITask): string {
        return item.id;
    }
}
