import {
    Layout,
    SKButton,
    SKContainer,
    SKLabel,
} from "./simplekit/src/imperative-mode";
import { Subscriber } from "./subscriber";
import { Model } from "./model";
import { Controller } from "./controller";

export class ActiveView extends SKContainer implements Subscriber {

    // declarations

    private _model: Model;

    private _containers: SKContainer[] = [];
    private _labels: SKLabel[][] = [];
    private _addButtons: SKButton[] = [];
    private _editButtons: SKButton[] = [];

    private panelWidth = 500;
    private panelHeight = 450;
    private numRows = 5;

    private headerHeight = 50;
    private assignLabelHeight = 22;
    private buttonDimensions = 25;

    // view elements
    // **************************************************

    // header
    private header: SKContainer = new SKContainer({ width: this.panelWidth, height: this.headerHeight });
    private headerLabel: SKLabel = new SKLabel({ text: "Active Tasks", align: "centre", width: this.panelWidth });

    // grids
    private grid1: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid2: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid3: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid4: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid5: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });

    // assign 1
    private course1: SKLabel = new SKLabel({ text: "Course", align: "left", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private title1: SKLabel = new SKLabel({ text: "Task Title", align: "centre", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private dueDate1: SKLabel = new SKLabel({ text: "Due Date", align: "right", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private description1: SKLabel = new SKLabel({ text: "Description ", align: "left", width: (this.panelWidth * (14 / 15)) });
    private displaySpace1: SKLabel = new SKLabel({ text: "", width: (this.panelWidth * (14 / 15)) });

    // assign 2
    private course2: SKLabel = new SKLabel({ text: "Course", align: "left", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private title2: SKLabel = new SKLabel({ text: "Task Title", align: "centre", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private dueDate2: SKLabel = new SKLabel({ text: "Due Date", align: "right", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private description2: SKLabel = new SKLabel({ text: "Description ", align: "left", width: (this.panelWidth * (14 / 15)) });
    private displaySpace2: SKLabel = new SKLabel({ text: "", width: (this.panelWidth * (14 / 15)) });

    // assign 3
    private course3: SKLabel = new SKLabel({ text: "Course", align: "left", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private title3: SKLabel = new SKLabel({ text: "Task Title", align: "centre", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private dueDate3: SKLabel = new SKLabel({ text: "Due Date", align: "right", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private description3: SKLabel = new SKLabel({ text: "Description ", align: "left", width: (this.panelWidth * (14 / 15)) });
    private displaySpace3: SKLabel = new SKLabel({ text: "", width: (this.panelWidth * (14 / 15)) });

    // assign 4
    private course4: SKLabel = new SKLabel({ text: "Course", align: "left", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private title4: SKLabel = new SKLabel({ text: "Task Title", align: "centre", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private dueDate4: SKLabel = new SKLabel({ text: "Due Date", align: "right", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private description4: SKLabel = new SKLabel({ text: "Description ", align: "left", width: (this.panelWidth * (14 / 15)) });
    private displaySpace4: SKLabel = new SKLabel({ text: "", width: (this.panelWidth * (14 / 15)) });

    // assign 5
    private course5: SKLabel = new SKLabel({ text: "Course", align: "left", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private title5: SKLabel = new SKLabel({ text: "Task Title", align: "centre", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private dueDate5: SKLabel = new SKLabel({ text: "Due Date", align: "right", width: (this.panelWidth / 3), height: this.assignLabelHeight });
    private description5: SKLabel = new SKLabel({ text: "Description ", align: "left", width: (this.panelWidth * (14 / 15)) });
    private displaySpace5: SKLabel = new SKLabel({ text: "", width: (this.panelWidth * (14 / 15)) });

    // add buttons
    private assign1: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private assign2: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private assign3: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private assign4: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private assign5: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });

    // edit buttons
    private edit1: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit2: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit3: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit4: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit5: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });


    // constructor
    constructor() {
        super();

        // panel style
        // **************************************************
        this.width = this.panelWidth;
        this.height = this.panelHeight;
        this.layoutMethod = Layout.makeWrapRowLayout();

        this.fill = "white";
        this.border = "grey";

        // header style
        // **************************************************
        this.header.fill = "#0077B6";
        this.header.border = "#03045E";
        this.header.padding = 8;
        this.header.layoutMethod = Layout.makeFillRowLayout();

        this.headerLabel.font = "16pt monospace";
        this.headerLabel.fontColour = "white";
        this.headerLabel.margin = 5;

        // grid styles
        // **************************************************

        // grid 1
        this.grid1.fill = "white";
        this.grid1.border = "#03045E";
        this.grid1.layoutMethod = Layout.makeWrapRowLayout();

        // grid 2
        this.grid2.fill = "white";
        this.grid2.border = "#03045E";
        this.grid2.layoutMethod = Layout.makeWrapRowLayout();

        // grid 3
        this.grid3.fill = "white";
        this.grid3.border = "#03045E";
        this.grid3.layoutMethod = Layout.makeWrapRowLayout();

        // grid 4
        this.grid4.fill = "white";
        this.grid4.border = "#03045E";
        this.grid4.layoutMethod = Layout.makeWrapRowLayout();

        // grid 5
        this.grid5.fill = "white";
        this.grid5.border = "#03045E";
        this.grid5.layoutMethod = Layout.makeWrapRowLayout();

        // label styles
        // **************************************************

        // assign 1
        this.course1.font = "12pt sans-serif";
        this.course1.fontColour = "#4F4F4F";

        this.title1.font = "12pt sans-serif";
        this.title1.fontColour = "#4F4F4F";

        this.dueDate1.font = "12pt sans-serif";
        this.dueDate1.fontColour = "#4F4F4F";

        this.description1.font = "12pt sans-serif";
        this.description1.fontColour = "#4F4F4F";

        // assign 2
        this.course2.font = "12pt sans-serif";
        this.course2.fontColour = "#4F4F4F";

        this.title2.font = "12pt sans-serif";
        this.title2.fontColour = "#4F4F4F";

        this.dueDate2.font = "12pt sans-serif";
        this.dueDate2.fontColour = "#4F4F4F";

        this.description2.font = "12pt sans-serif";
        this.description2.fontColour = "#4F4F4F";

        // assign 3
        this.course3.font = "12pt sans-serif";
        this.course3.fontColour = "#4F4F4F";

        this.title3.font = "12pt sans-serif";
        this.title3.fontColour = "#4F4F4F";

        this.dueDate3.font = "12pt sans-serif";
        this.dueDate3.fontColour = "#4F4F4F";

        this.description3.font = "12pt sans-serif";
        this.description3.fontColour = "#4F4F4F";

        // assign 4
        this.course4.font = "12pt sans-serif";
        this.course4.fontColour = "#4F4F4F";

        this.title4.font = "12pt sans-serif";
        this.title4.fontColour = "#4F4F4F";

        this.dueDate4.font = "12pt sans-serif";
        this.dueDate4.fontColour = "#4F4F4F";

        this.description4.font = "12pt sans-serif";
        this.description4.fontColour = "#4F4F4F";

        // assign 5
        this.course5.font = "12pt sans-serif";
        this.course5.fontColour = "#4F4F4F";

        this.title5.font = "12pt sans-serif";
        this.title5.fontColour = "#4F4F4F";

        this.dueDate5.font = "12pt sans-serif";
        this.dueDate5.fontColour = "#4F4F4F";

        this.description5.font = "12pt sans-serif";
        this.description5.fontColour = "#4F4F4F";

        // button styles
        // **************************************************

        // add buttons
        this.assign1.font = "12pt sans-serif";
        this.assign1.fontColour = "#3F3F3F";

        this.assign2.font = "12pt sans-serif";
        this.assign2.fontColour = "#3F3F3F";

        this.assign3.font = "12pt sans-serif";
        this.assign3.fontColour = "#3F3F3F";

        this.assign4.font = "12pt sans-serif";
        this.assign4.fontColour = "#3F3F3F";

        this.assign5.font = "12pt sans-serif";
        this.assign5.fontColour = "#3F3F3F";

        // edit buttons
        this.edit1.font = "10pt sans-serif";
        this.edit1.fontColour = "#3F3F3F";

        this.edit2.font = "10pt sans-serif";
        this.edit2.fontColour = "#3F3F3F";

        this.edit3.font = "10pt sans-serif";
        this.edit3.fontColour = "#3F3F3F";

        this.edit4.font = "10pt sans-serif";
        this.edit4.fontColour = "#3F3F3F";

        this.edit5.font = "10pt sans-serif";
        this.edit5.fontColour = "#3F3F3F";

        // store elements
        // **************************************************

        // store containers
        this._containers.push(this.grid1);
        this._containers.push(this.grid2);
        this._containers.push(this.grid3);
        this._containers.push(this.grid4);
        this._containers.push(this.grid5);

        // label arrays

        // assign 1
        const labels1: SKLabel[] = [];
        labels1.push(this.course1);
        labels1.push(this.title1);
        labels1.push(this.dueDate1);
        labels1.push(this.description1);

        // assign 2
        const labels2: SKLabel[] = [];
        labels2.push(this.course2);
        labels2.push(this.title2);
        labels2.push(this.dueDate2);
        labels2.push(this.description2);

        // assign 3
        const labels3: SKLabel[] = [];
        labels3.push(this.course3);
        labels3.push(this.title3);
        labels3.push(this.dueDate3);
        labels3.push(this.description3);

        // assign 4
        const labels4: SKLabel[] = [];
        labels4.push(this.course4);
        labels4.push(this.title4);
        labels4.push(this.dueDate4);
        labels4.push(this.description4);

        // assign 5
        const labels5: SKLabel[] = [];
        labels5.push(this.course5);
        labels5.push(this.title5);
        labels5.push(this.dueDate5);
        labels5.push(this.description5);

        // store labels
        this._labels.push(labels1);
        this._labels.push(labels2);
        this._labels.push(labels3);
        this._labels.push(labels4);
        this._labels.push(labels5);

        // store buttons
        this._addButtons.push(this.assign1);
        this._addButtons.push(this.assign2);
        this._addButtons.push(this.assign3);
        this._addButtons.push(this.assign4);
        this._addButtons.push(this.assign5);

        // store edit buttons
        this._editButtons.push(this.edit1);
        this._editButtons.push(this.edit2);
        this._editButtons.push(this.edit3);
        this._editButtons.push(this.edit4);
        this._editButtons.push(this.edit5);

        // add elements
        // **************************************************

        this.addChild(this.header);
        this.header.addChild(this.headerLabel);

        this.addChild(this.grid1);
        this.grid1.addChild(this.course1);
        this.grid1.addChild(this.title1);
        this.grid1.addChild(this.dueDate1);
        this.grid1.addChild(this.description1);
        this.grid1.addChild(this.displaySpace1);
        this.grid1.addChild(this.assign1);

        this.addChild(this.grid2);
        this.grid2.addChild(this.course2);
        this.grid2.addChild(this.title2);
        this.grid2.addChild(this.dueDate2);
        this.grid2.addChild(this.description2);
        this.grid2.addChild(this.displaySpace2);
        this.grid2.addChild(this.assign2);

        this.addChild(this.grid3);
        this.grid3.addChild(this.course3);
        this.grid3.addChild(this.title3);
        this.grid3.addChild(this.dueDate3);
        this.grid3.addChild(this.description3);
        this.grid3.addChild(this.displaySpace3);
        this.grid3.addChild(this.assign3);

        this.addChild(this.grid4);
        this.grid4.addChild(this.course4);
        this.grid4.addChild(this.title4);
        this.grid4.addChild(this.dueDate4);
        this.grid4.addChild(this.description4);
        this.grid4.addChild(this.displaySpace4);
        this.grid4.addChild(this.assign4);

        this.addChild(this.grid5);
        this.grid5.addChild(this.course5);
        this.grid5.addChild(this.title5);
        this.grid5.addChild(this.dueDate5);
        this.grid5.addChild(this.description5);
        this.grid5.addChild(this.displaySpace5);
        this.grid5.addChild(this.assign5);

    }

    // set model
    set model(m: Model) {
        this._model = m;
    }

    // update
    update(): void {

        this._containers.forEach((element, i) => {

            if (this._model.assignments[i]) {

                // assignment display labels
                this._labels[i].forEach((label, j) => {
                    if (j === 0) {
                        label.text = this._model.assignments[i].course.toString();
                    } else if (j === 1) {
                        label.text = this._model.assignments[i].title;
                    } else if (j === 2) {
                        label.text = this._model.assignments[i].dueDate.toDateString();
                    } else {
                        label.text = this._model.assignments[i].description;
                    }
                });

                // change buttons
                if (element.children.includes(this._addButtons[i])) {
                    element.removeChild(this._addButtons[i]);
                    element.addChild(this._editButtons[i]);
                }

            } else {

                // assignment display labels
                this._labels[i].forEach((label, j) => {
                    if (j === 0) {
                        label.text = "Course";
                    } else if (j === 1) {
                        label.text = "Task Title";
                    } else if (j === 2) {
                        label.text = "Due Date";
                    } else {
                        label.text = "Description";
                    }
                });

                // change buttons
                if (element.children.includes(this._editButtons[i])) {
                    element.removeChild(this._editButtons[i]);
                    element.addChild(this._addButtons[i]);
                }
            }

        });

    }

    // events
    public setEvents(c: Controller) {
        this.assign1.addEventListener("action", () => {
            c.addAssignment();
        })

        this.assign2.addEventListener("action", () => {
            c.addAssignment();
        })

        this.assign3.addEventListener("action", () => {
            c.addAssignment();
        })

        this.assign4.addEventListener("action", () => {
            c.addAssignment();
        })

        this.assign5.addEventListener("action", () => {
            c.addAssignment();
        })

        this.edit1.addEventListener("action", () => {
            c.editAssignment(0);
        })

        this.edit2.addEventListener("action", () => {
            c.editAssignment(1);
        })

        this.edit3.addEventListener("action", () => {
            c.editAssignment(2);
        })

        this.edit4.addEventListener("action", () => {
            c.editAssignment(3);
        })

        this.edit5.addEventListener("action", () => {
            c.editAssignment(4);
        })
    }

}