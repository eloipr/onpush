import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";

import { ITask } from "src/app/interfaces/task";

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
    @Input() task: ITask;

    constructor() {}

    ngOnInit(): void {}
}
