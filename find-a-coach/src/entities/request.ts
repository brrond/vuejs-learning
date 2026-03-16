export class Request {
    id: number;
    name: string;
    email: string;
    comment: string;
    coach_id: number;

    constructor(id: number, name: string, email: string, comment: string, coach_id: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.comment = comment;
        this.coach_id = coach_id;
    }
}
