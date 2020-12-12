import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { first } from "rxjs/operators";

import { IMember } from "../interfaces/member";

const apiUrl = "http://localhost:8081";

@Injectable({
    providedIn: "root",
})
export class MemberService {
    constructor(private http: HttpClient) {}

    getMembers(): Observable<IMember[]> {
        return this.http.get<IMember[]>(`${apiUrl}/members`).pipe(first());
    }
}
