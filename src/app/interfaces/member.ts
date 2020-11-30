import { ITask } from "./task";

export interface IMember {
    id: string;
    name: string;
    genre: string;
    age: number;
    tasks: ITask[];
}
