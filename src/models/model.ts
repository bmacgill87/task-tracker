import { Subscriber } from "../subscriber";
import { Course } from "./course";
import { Assignment } from "./assignment";


export class Model {

    // declarations

    private subscribers: Subscriber[] = [];

    private _courses: Course[] = [];
    private _assignments: Assignment[] = [];
    private _completedAssignments: Assignment[] = [];

    private _current: number = 0;
    private _assignView: number = 0;
    private _courseView: number = 0;


    // accessors
    // **************************************************

    get current() {
        return this._current;
    }

    get assignView() {
        return this._assignView;
    }

    get courseView() {
        return this._courseView;
    }

    get courses() {
        return this._courses;
    }

    get assignments() {
        return this._assignments;
    }

    get completedAssignments() {
        return this._completedAssignments;
    }

    // mutators
    // **************************************************

    set current(n: number) {
        this._current = n;
        this.notifySubscribers();
    }

    set assignView(n: number) {
        this._assignView = n;
        this.notifySubscribers();
    }

    set courseView(n: number) {
        this._courseView = n;
        this.notifySubscribers();
    }

    // methods
    // **************************************************

    // clear
    public emptyString() {
        return "";
    }

    // date
    public dateFormat() {
        return "YYYY/MM/DD";
    }

    // new course
    public addNewCourse(subject: string, code: string, desc: string) {
        // maximum
        if (this._courses.length < 5) {
            if (subject && code) {
                const course = new Course(subject, Number(code), desc);
                this._courses.push(course);
            }

        }

        this.notifySubscribers();
    }

    // new assignment
    public addNewAssignment(courseString: string, title: string, dateString: string, description: string): void {
        // maximum
        if (this._assignments.length < 5) {
            // check course
            courseString.trim();
            for (let i = 0; i < this._courses.length; i++) {
                if (courseString === this._courses[i].toString()) {
                    const course = this._courses[i];

                    // check title
                    if (title) {
                        // check date
                        const dueDate = new Date(dateString);
                        if (!isNaN(dueDate.getTime())) {
                            const assign = new Assignment(course, title, dueDate, description);
                            this._assignments.push(assign);
                        }
                    }

                }
            }

            this.notifySubscribers();
        }
    }

    // edit course
    public editCourse(subject: string, code: string, desc: string) {
        // subject
        if (subject) {
            this._courses[this._current].subject = subject;
        }

        // code
        if (code) {
            this._courses[this._current].code = Number(code);
        }

        // description
        if (desc) {
            this._courses[this._current].description = desc;
        }

        this.notifySubscribers();
    }

    // edit assignment
    public editAssignment(courseString: string, title: string, dateString: string, description: string) {
        // course
        courseString.trim();
        for (let i = 0; i < this._courses.length; i++) {
            if (courseString === this._courses[i].toString()) {
                this._assignments[this._current].course = this._courses[i];
            }
        }

        // title
        if (title) {
            this._assignments[this._current].title = title;
        }

        // date
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
            this._assignments[this._current].dueDate = date;
        }

        // description
        if (description) {
            this._assignments[this._current].description = description;
        }

        this.notifySubscribers();
    }

    // complete assignment
    public completeAssignment() {

        // completed
        this._completedAssignments.unshift(this._assignments[this._current]);
        this._assignments.splice(this._current, 1);


        // maximum
        if (this._completedAssignments.length > 5) {
            this._completedAssignments.pop();
        }

        this.notifySubscribers();
    }

    // delete course
    public deleteCourse() {
        this._courses.splice(this._current, 1);
        this.notifySubscribers();
    }

    // delete assignment
    public deleteAssignment() {
        this._assignments.splice(this._current, 1);
        this.notifySubscribers();
    }

    // add subscribers
    public addSubscribers(s: Subscriber): void {
        this.subscribers.push(s);
        this.notifySubscribers();
    }

    // notify subscribers
    private notifySubscribers(): void {
        this.subscribers.forEach((subscriber) => subscriber.update());
    }

}

