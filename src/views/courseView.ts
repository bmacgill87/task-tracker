import {
    Layout,
    SKButton,
    SKContainer,
    SKLabel
} from "../../simplekit/src/imperative-mode";
import { Subscriber } from "../subscriber";
import { Model } from "../models";
import { Controller } from "../controllers";

export class CourseView extends SKContainer implements Subscriber {

    // declarations

    private _model: Model = new Model();

    private _containers: SKContainer[] = [];
    private _labels: SKLabel[] = [];
    private _addButtons: SKButton[] = [];
    private _editButtons: SKButton[] = [];

    private panelWidth = 250;
    private panelHeight = 225;
    private numRows = 5;

    private headerHeight = 35;
    private labelHeight = 22;
    private buttonDimensions = 15;

    // view elements
    // **************************************************

    // header
    private header: SKContainer = new SKContainer({ width: this.panelWidth, height: this.headerHeight });
    private headerLabel: SKLabel = new SKLabel({ text: "Current Courses", align: "centre", width: this.panelWidth });

    // grids
    private grid1: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid2: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid3: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid4: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid5: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });

    // course 1
    private label1: SKLabel = new SKLabel({ text: "Add Course", align: "left", width: (this.panelWidth * (13 / 15)), height: this.labelHeight });
    private course1: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit1: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });

    // course 2
    private label2: SKLabel = new SKLabel({ text: "Add Course", align: "left", width: (this.panelWidth * (13 / 15)), height: this.labelHeight });
    private course2: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit2: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });

    // course 3
    private label3: SKLabel = new SKLabel({ text: "Add Course", align: "left", width: (this.panelWidth * (13 / 15)), height: this.labelHeight });
    private course3: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit3: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });

    // course 4
    private label4: SKLabel = new SKLabel({ text: "Add Course", align: "left", width: (this.panelWidth * (13 / 15)), height: this.labelHeight });
    private course4: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit4: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });

    // course 5
    private label5: SKLabel = new SKLabel({ text: "Add Course", align: "left", width: (this.panelWidth * (13 / 15)), height: this.labelHeight });
    private course5: SKButton = new SKButton({ text: "+", width: this.buttonDimensions, height: this.buttonDimensions });
    private edit5: SKButton = new SKButton({ text: "E", width: this.buttonDimensions, height: this.buttonDimensions });

    // constructor
    constructor() {
        super();

        // panel style
        // **************************************************

        this.width = this.panelWidth;
        this.height = this.panelHeight;
        this.fill = "white";
        this.layoutMethod = Layout.makeWrapRowLayout();

        // header style
        // **************************************************
        this.header.fill = "#0077B6";
        this.header.border = "#03045E";
        this.header.layoutMethod = Layout.makeFillRowLayout();

        this.headerLabel.font = "14pt monospace";
        this.headerLabel.fontColour = "white";
        this.headerLabel.margin = 5;

        // grid styles
        // **************************************************

        // grid 1
        this.grid1.fill = "white";
        this.grid1.border = "#03045E";
        this.grid1.padding = 8;
        this.grid1.layoutMethod = Layout.makeFillRowLayout();

        // grid 2
        this.grid2.fill = "white";
        this.grid2.border = "#03045E";
        this.grid2.padding = 8;
        this.grid2.layoutMethod = Layout.makeFillRowLayout();

        // grid 3
        this.grid3.fill = "white";
        this.grid3.border = "#03045E";
        this.grid3.padding = 8;
        this.grid3.layoutMethod = Layout.makeFillRowLayout();

        // grid 4
        this.grid4.fill = "white";
        this.grid4.border = "#03045E";
        this.grid4.padding = 8;
        this.grid4.layoutMethod = Layout.makeFillRowLayout();

        // grid 5
        this.grid5.fill = "white";
        this.grid5.border = "#03045E";
        this.grid5.padding = 8;
        this.grid5.layoutMethod = Layout.makeFillRowLayout();

        // course styles
        // **************************************************

        // course 1
        this.label1.font = "10pt sans-serif";
        this.label1.fontColour = "#4F4F4F";
        this.course1.font = "10pt sans-serif";
        this.course1.fontColour = "#3F3F3F";

        this.edit1.font = "8pt sans-serif";
        this.edit1.fontColour = "#3F3F3F";

        // course 2
        this.label2.font = "10pt sans-serif";
        this.label2.fontColour = "#4F4F4F";
        this.course2.font = "10pt sans-serif";
        this.course2.fontColour = "#3F3F3F";

        this.edit2.font = "8pt sans-serif";
        this.edit2.fontColour = "#3F3F3F";

        // course 3
        this.label3.font = "10pt sans-serif";
        this.label3.fontColour = "#4F4F4F";
        this.course3.font = "10pt sans-serif";
        this.course3.fontColour = "#3F3F3F";

        this.edit3.font = "8pt sans-serif";
        this.edit3.fontColour = "#3F3F3F";

        // course 4
        this.label4.font = "10pt sans-serif";
        this.label4.fontColour = "#4F4F4F";
        this.course4.font = "10pt sans-serif";
        this.course4.fontColour = "#3F3F3F";

        this.edit4.font = "8pt sans-serif";
        this.edit4.fontColour = "#3F3F3F";

        // course 5
        this.label5.font = "10pt sans-serif";
        this.label5.fontColour = "#4F4F4F";
        this.course5.font = "10pt sans-serif";
        this.course5.fontColour = "#3F3F3F";

        this.edit5.font = "8pt sans-serif";
        this.edit5.fontColour = "#3F3F3F";


        // store elements
        // **************************************************

        // store containers
        this._containers.push(this.grid1);
        this._containers.push(this.grid2);
        this._containers.push(this.grid3);
        this._containers.push(this.grid4);
        this._containers.push(this.grid5);

        // store labels
        this._labels.push(this.label1);
        this._labels.push(this.label2);
        this._labels.push(this.label3);
        this._labels.push(this.label4);
        this._labels.push(this.label5);

        // store buttons
        this._addButtons.push(this.course1);
        this._addButtons.push(this.course2);
        this._addButtons.push(this.course3);
        this._addButtons.push(this.course4);
        this._addButtons.push(this.course5);

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
        this.grid1.addChild(this.label1);
        this.grid1.addChild(this.course1);

        this.addChild(this.grid2);
        this.grid2.addChild(this.label2);
        this.grid2.addChild(this.course2);

        this.addChild(this.grid3);
        this.grid3.addChild(this.label3);
        this.grid3.addChild(this.course3);

        this.addChild(this.grid4);
        this.grid4.addChild(this.label4);
        this.grid4.addChild(this.course4);

        this.addChild(this.grid5);
        this.grid5.addChild(this.label5);
        this.grid5.addChild(this.course5);

    }

    // set model
    set model(m: Model) {
        this._model = m;
    }

    // update
    update(): void {

        this._containers.forEach((element, i) => {
            if (this._model.courses[i]) {
                // course display labels
                this._labels[i].text = this._model.courses[i].subject + this._model.courses[i].code;


                if (element.children.includes(this._addButtons[i])) {
                    // change buttons
                    element.removeChild(this._addButtons[i]);
                    element.addChild(this._editButtons[i]);
                }
            } else {

                // course display labels
                this._labels[i].text = "Add Course";

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
        this.course1.addEventListener("action", () => {
            c.addCourse();
        })

        this.course2.addEventListener("action", () => {
            c.addCourse();
        })

        this.course3.addEventListener("action", () => {
            c.addCourse();
        })

        this.course4.addEventListener("action", () => {
            c.addCourse();
        })

        this.course5.addEventListener("action", () => {
            c.addCourse();
        })

        this.edit1.addEventListener("action", () => {
            c.editCourse(0);
        })

        this.edit2.addEventListener("action", () => {
            c.editCourse(1);
        })

        this.edit3.addEventListener("action", () => {
            c.editCourse(2);
        })

        this.edit4.addEventListener("action", () => {
            c.editCourse(3);
        })

        this.edit5.addEventListener("action", () => {
            c.editCourse(4);
        })
    }

}
