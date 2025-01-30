import { Course } from "./course";

export class Assignment {

    private _course: Course;
    private _title: string;
    private _dueDate: Date;
    private _description: string;

    constructor(course: Course, title: string, dueDate: Date, description: string) {
        this._course = course;
        this._title = title;
        this._dueDate = dueDate;
        this._description = description;
    }

    // accessors

    get course() {
        return this._course;
    }

    get title() {
        return this._title;
    }

    get dueDate() {
        return this._dueDate;
    }

    get description() {
        return this._description;
    }

    // mutators

    set course(course: Course) {
        this._course = course;
    }

    set title(title: string) {
        this._title = title;
    }

    set dueDate(date: Date) {
        this._dueDate = date;
    }

    set description(desc: string) {
        this._description = desc;
    }

    // to string
    public toString() {
        return `${this._title} - ${this._course}`;
    }

}