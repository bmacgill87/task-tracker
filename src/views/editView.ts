import {
    Layout,
    SKButton,
    SKContainer,
    SKLabel,
    SKTextfield
} from "../../simplekit/src/imperative-mode";
import { Subscriber } from "../subscriber";
import { Model } from "../models";
import { Controller } from "../controllers";

export class EditView extends SKContainer implements Subscriber {

    // declarations

    private _model: Model = new Model();

    private panelWidth = 300;
    private panelHeight = 450;

    private headerHeight = 50;

    private propertyWidth = 250;
    private propertyHeight = 35;

    private fieldWidth = 150;
    private fieldHeight = 25;
    private descFieldHeight = 65;

    private numRows = 6;

    // view elements
    private header: SKContainer = new SKContainer({ width: this.panelWidth, height: this.headerHeight });
    private headerLabel: SKLabel = new SKLabel({ text: "Edit Assignment", align: "centre" });

    private grid1: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private course: SKContainer = new SKContainer({ width: this.propertyWidth, height: this.propertyHeight });
    private courseLabel: SKLabel = new SKLabel({ text: "Course: ", align: "left" });
    private courseField: SKTextfield = new SKTextfield({ width: this.fieldWidth, height: this.fieldHeight });

    private grid2: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private title: SKContainer = new SKContainer({ width: this.propertyWidth, height: this.propertyHeight });
    private titleLabel: SKLabel = new SKLabel({ text: "Title: ", align: "left" });
    private titleField: SKTextfield = new SKTextfield({ width: this.fieldWidth, height: this.fieldHeight });

    private grid3: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private dueDate: SKContainer = new SKContainer({ width: this.propertyWidth, height: this.propertyHeight });
    private dateLabel: SKLabel = new SKLabel({ text: "Due Date: ", align: "left" });
    private dateField: SKTextfield = new SKTextfield({ text: "YYYY/MM/DD", width: this.fieldWidth, height: this.fieldHeight });

    private grid4: SKContainer = new SKContainer({ width: this.panelWidth, height: ((this.panelHeight - this.headerHeight) / this.numRows) * 2 });
    private description: SKContainer = new SKContainer({ width: this.propertyWidth, height: (((this.panelHeight - this.headerHeight) / this.numRows) * 2) - 8 })
    private descriptionLabel: SKLabel = new SKLabel({ text: "Description:", align: "centre", width: this.propertyWidth, height: this.propertyHeight });
    private descriptionField: SKTextfield = new SKTextfield({ width: this.propertyWidth, height: this.descFieldHeight });

    private grid5: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private buttons: SKContainer = new SKContainer({ width: this.propertyWidth, height: this.propertyHeight });
    private apply: SKButton = new SKButton({ text: "Apply" });
    private complete: SKButton = new SKButton({ text: "Finish" });
    private remove: SKButton = new SKButton({ text: "Remove" });


    // constructor
    constructor() {
        super();

        // panel style
        // **************************************************
        this.width = this.panelWidth;
        this.height = this.panelHeight;
        this.layoutMethod = Layout.makeWrapRowLayout();

        this.fill = "white";
        this.border = "#4F4F4F";

        // header style
        // **************************************************
        this.header.fill = "#0077B6";
        this.header.border = "#03045E";
        this.header.layoutMethod = Layout.makeCentredLayout();

        this.headerLabel.font = "14pt monospace";
        this.headerLabel.fontColour = "white";

        // grid style
        // **************************************************

        // grid 1
        this.grid1.fill = "white";
        this.grid1.border = "#03045E";
        this.grid1.layoutMethod = Layout.makeCentredLayout();

        // grid 2
        this.grid2.fill = "white";
        this.grid2.border = "#03045E";
        this.grid2.layoutMethod = Layout.makeCentredLayout();

        // grid 3
        this.grid3.fill = "white";
        this.grid3.border = "#03045E";
        this.grid3.layoutMethod = Layout.makeCentredLayout();

        // grid 4
        this.grid4.fill = "white";
        this.grid4.border = "#03045E";
        // this.grid4.padding = 2;
        this.grid4.layoutMethod = Layout.makeCentredLayout();

        // grid 5
        this.grid5.fill = "white";
        this.grid5.border = "#03045E";
        this.grid5.layoutMethod = Layout.makeCentredLayout();


        // property styles
        // **************************************************

        // course
        this.course.fill = "white";
        this.course.border = "white";
        this.course.padding = 5;
        this.course.layoutMethod = Layout.makeFillRowLayout();

        this.courseLabel.font = "12pt sans-serif";
        this.courseLabel.fontColour = "#4F4F4F";

        this.courseField.font = "10pt sans-serif";
        this.courseField.fontColour = "#4F4F4F";
        this.courseField.radius = 8;

        // title
        this.title.fill = "white";
        this.title.border = "white";
        this.title.padding = 5;
        this.title.layoutMethod = Layout.makeFillRowLayout();

        this.titleLabel.font = "12pt sans-serif";
        this.titleLabel.fontColour = "#4F4F4F";

        this.titleField.font = "10pt sans-serif";
        this.titleField.fontColour = "#4F4F4F";
        this.titleField.radius = 8;

        // due date
        this.dueDate.fill = "white";
        this.dueDate.border = "white";
        this.dueDate.padding = 5;
        this.dueDate.layoutMethod = Layout.makeFillRowLayout();

        this.dateLabel.font = "12pt sans-serif";
        this.dateLabel.fontColour = "#4F4F4F";

        this.dateField.font = "10pt sans-serif";
        this.dateField.fontColour = "#4F4F4F";
        this.dateField.radius = 8;

        // description
        this.description.fill = "white";
        this.description.border = "white";
        this.description.layoutMethod = Layout.makeWrapRowLayout();

        this.descriptionLabel.font = "12pt sans-serif";
        this.descriptionLabel.fontColour = "#4F4F4F";

        this.descriptionField.font = "10pt sans-serif";
        this.descriptionField.fontColour = "#4F4F4F";
        this.descriptionField.radius = 8;

        // buttons
        // **************************************************

        // layout
        this.buttons.layoutMethod = Layout.makeFillRowLayout({ gap: 10 });

        // apply
        this.apply.font = "12pt sans-serif";
        this.apply.fontColour = "#3F3F3F";

        // complete
        this.complete.font = "12pt sans-serif";
        this.complete.fontColour = "#3F3F3F";

        // remove
        this.remove.font = "12pt sans-serif";
        this.remove.fontColour = "#3F3F3F";


        // add elements
        // **************************************************
        this.addChild(this.header);
        this.header.addChild(this.headerLabel);

        this.addChild(this.grid1);
        this.grid1.addChild(this.course);
        this.course.addChild(this.courseLabel);
        this.course.addChild(this.courseField);

        this.addChild(this.grid2);
        this.grid2.addChild(this.title);
        this.title.addChild(this.titleLabel);
        this.title.addChild(this.titleField);

        this.addChild(this.grid3);
        this.grid3.addChild(this.dueDate);
        this.dueDate.addChild(this.dateLabel);
        this.dueDate.addChild(this.dateField);

        this.addChild(this.grid4);
        this.grid4.addChild(this.description);
        this.description.addChild(this.descriptionLabel);
        this.description.addChild(this.descriptionField);

        this.addChild(this.grid5);
        this.grid5.addChild(this.buttons);
        this.buttons.addChild(this.apply);
        this.buttons.addChild(this.complete);
        this.buttons.addChild(this.remove);

    }

    // set model
    set model(m: Model) {
        this._model = m;
    }

    // update
    update(): void {
        this.courseField.text = this._model.emptyString();
        this.titleField.text = this._model.emptyString();
        this.dateField.text = this._model.dateFormat();
        this.descriptionField.text = this._model.emptyString();
    }

    // events
    public setEvents(c: Controller) {
        this.apply.addEventListener("action", () => {
            c.applyAssignmentChange(this.courseField.text, this.titleField.text, this.dateField.text, this.descriptionField.text);
        })

        this.complete.addEventListener("action", () => {
            c.completeAssignment();
        })

        this.remove.addEventListener("action", () => {
            c.removeAssignment();
        })
    }

}