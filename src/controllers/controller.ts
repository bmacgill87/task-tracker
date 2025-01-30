import { Model } from "../models";

export class Controller {

    private _model: Model = new Model();

    // set model
    set model(m: Model) {
        this._model = m;
    }

    // add
    // **************************************************

    public addCourse(): void {
        this._model.courseView = 1;
    }

    public addAssignment(): void {
        this._model.assignView = 1;
    }

    public newCourse(subject: string, code: string, desc: string) {
        this._model.addNewCourse(subject, code, desc);
        this._model.courseView = 0;
    }

    public newAssignment(course: string, title: string, dateString: string, desc: string): void {
        this._model.addNewAssignment(course, title, dateString, desc);
        this._model.assignView = 0;
    }

    // edit
    // **************************************************

    public editCourse(index: number) {
        this._model.current = index;
        this._model.courseView = 2;
    }

    public editAssignment(index: number) {
        this._model.current = index;
        this._model.assignView = 2;
    }

    public applyCourseChange(subject: string, code: string, desc: string) {
        this._model.editCourse(subject, code, desc);
        this._model.courseView = 0;
    }

    public applyAssignmentChange(course: string, title: string, dateString: string, desc: string) {
        this._model.editAssignment(course, title, dateString, desc);
        this._model.assignView = 0;
    }

    // complete
    // **************************************************

    public completeAssignment() {
        this._model.completeAssignment();
        this._model.assignView = 0;
    }

    // remove
    // **************************************************

    public removeCourse() {
        this._model.deleteCourse();
        this._model.courseView = 0;
    }

    public removeAssignment() {
        this._model.deleteAssignment();
        this._model.assignView = 0;
    }

}
