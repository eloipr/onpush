import { Component, OnInit } from "@angular/core";

import { IMember } from "src/app/interfaces/member";
import { MemberService } from "src/app/services/member.service";
import { Observable } from "rxjs";

@Component({
    selector: "app-members-container",
    templateUrl: "./members-container.component.html",
    styleUrls: ["./members-container.component.scss"],
})
export class MembersContainerComponent implements OnInit {
    members$: Observable<IMember[]>;
    loading$: Observable<boolean>;

    constructor(private memberService: MemberService) {}

    ngOnInit(): void {
        this.members$ = this.memberService.members$;
        this.loading$ = this.memberService.loading$;
    }

    // addMember(): void {
    //     this.memberService.getMember().subscribe((member) => {
    //         this.members = [...this.members, member];
    //     });
    // }

    // getMembers(): void {
    //     this.memberService.getMembers().subscribe((members) => {
    //         this.members = [...members];
    //     });
    // }
}
