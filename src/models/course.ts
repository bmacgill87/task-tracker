export class Course {

    private _subject: string;
    private _code: number;
    private _description: string;

    constructor(subject: string, code: number, description: string) {
        this._subject = subject;
        this._code = code;
        this._description = description;
    }

    // accessors

    get subject() {
        return this._subject
    }

    get code() {
        return this._code;
    }

    get description() {
        return this._description;
    }

    // mutators

    set subject(sub: string) {
        this._subject = sub;
    }

    set code(code: number) {
        this._code = code;
    }

    set description(desc: string) {
        this._description = desc;
    }

    // to string
    public toString() {
        return this._subject + this._code;
    }

}