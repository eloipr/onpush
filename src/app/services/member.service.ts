import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, BehaviorSubject, timer } from "rxjs";
import { first, map, distinctUntilChanged, switchMap, tap } from "rxjs/operators";

import { IMember } from "../interfaces/member";

const apiUrl = "http://localhost:8081";

export interface State {
    members: IMember[];
    loading: boolean;
}

let _state: State = {
    members: [],
    loading: false,
};

@Injectable({
    providedIn: "root",
})
export class MemberService {
    private store = new BehaviorSubject<State>(_state);
    private state$ = this.store.asObservable();

    members$ = this.state$.pipe(
        map((state) => state.members),
        distinctUntilChanged()
    );
    loading$ = this.state$.pipe(map((state) => state.loading));

    constructor(private http: HttpClient) {
        timer(0, 5000)
            .pipe(switchMap(() => this.getMembers()))
            .subscribe();
    }

    private getMembers(): Observable<IMember[]> {
        return this.http.get<IMember[]>(`${apiUrl}/members`).pipe(
            first(),
            tap((members) => {
                this.updateState({ ..._state, members, loading: false });
            })
        );
    }

    private getMember(): Observable<IMember> {
        return this.http.get<IMember>(`${apiUrl}/member`).pipe(
            first(),
            tap((member) => {
                this.updateState({ ..._state, members: [..._state.members, member], loading: false });
            })
        );
    }

    private updateState(state: State): void {
        this.store.next((_state = state));
    }
}
