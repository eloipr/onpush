import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";

import { IMember } from "src/app/interfaces/member";

@Component({
    selector: "app-member",
    templateUrl: "./member.component.html",
    styleUrls: ["./member.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberComponent implements OnInit {
    @Input() member: IMember;

    constructor() {}

    ngOnInit(): void {}
}
