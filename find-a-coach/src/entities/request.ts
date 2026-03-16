import { Coach } from "./coach";

export class Request {
    name: string;
    email: string;
    comment: string;
    coach: Coach;

    constructor(name: string, email: string, comment: string, coach: Coach) {
        this.name = name;
        this.email = email;
        this.comment = comment;
        this.coach = coach;
    }
}
