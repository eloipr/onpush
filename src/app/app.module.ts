import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MatExpansionModule } from "@angular/material/expansion";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { MembersContainerComponent } from "./components/members-container/members-container.component";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { MemberComponent } from "./components/member/member.component";
import { TaskComponent } from "./components/task/task.component";
import { MembersEffects } from "./state/effects/members.effects";
import { membersReducer } from "./state/reducers/members.reducer";

@NgModule({
    declarations: [AppComponent, MembersContainerComponent, MemberListComponent, MemberComponent, TaskComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatExpansionModule,
        StoreModule.forRoot({ members: membersReducer }),
        EffectsModule.forRoot([MembersEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
