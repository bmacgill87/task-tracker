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

export class CourseEditView extends SKContainer implements Subscriber {

    // declarations

    private _model: Model = new Model();

    private panelWidth = 250;
    private panelHeight = 225;

    private headerHeight = 35

    private propertyWidth = 200;
    private propertyHeight = 22;

    private fieldWidth = 100;
    private fieldHeight = 18;

    private buttonContainerWidth = 150;
    private buttonWidth = 70;

    private numRows = 5;

    // view elements
    // **************************************************
    private header: SKContainer = new SKContainer({ width: this.panelWidth, height: this.headerHeight });
    private headerLabel: SKLabel = new SKLabel({ text: "Edit Course", align: "centre", width: this.panelWidth, height: this.headerHeight });

    private grid1: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private subject: SKContainer = new SKContainer({ width: this.propertyWidth, height: this.propertyHeight });
    private subjectLabel: SKLabel = new SKLabel({ text: "Subject: ", align: "left", height: this.propertyHeight });
    private subjectField: SKTextfield = new SKTextfield({ text: "EX: CS", width: this.fieldWidth, height: this.fieldHeight });

    private grid2: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private code: SKContainer = new SKContainer({ width: this.propertyWidth, height: this.propertyHeight });
    private codeLabel: SKLabel = new SKLabel({ text: "Code: ", align: "left" });
    private codeField: SKTextfield = new SKTextfield({ width: this.fieldWidth, height: this.fieldHeight });

    private grid3: SKContainer = new SKContainer({ width: this.panelWidth, height: ((this.panelHeight - this.headerHeight) / this.numRows) * 2 });
    private description: SKContainer = new SKContainer({ width: this.propertyWidth, height: (((this.panelHeight - this.headerHeight) / this.numRows) * 2) - 8 })
    private descriptionLabel: SKLabel = new SKLabel({ text: "Description:", align: "centre", width: this.propertyWidth, height: this.propertyHeight });
    private descriptionField: SKTextfield = new SKTextfield({ width: this.propertyWidth, height: this.fieldHeight });

    private grid4: SKContainer = new SKContainer({ width: this.panelWidth, height: (this.panelHeight - this.headerHeight) / this.numRows });
    private buttons: SKContainer = new SKContainer({ width: this.buttonContainerWidth, height: this.propertyHeight });
    private apply: SKButton = new SKButton({ text: "Apply", width: this.buttonWidth, height: this.fieldHeight });
    private remove: SKButton = new SKButton({ text: "Remove", width: this.buttonWidth, height: this.fieldHeight });

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
        this.header.fill = "#0077B8";
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
        this.grid4.layoutMethod = Layout.makeCentredLayout();

        // property styles
        // **************************************************

        // subject
        this.subject.fill = "white";
        this.subject.border = "white";
        this.subject.padding = 2;
        this.subject.layoutMethod = Layout.makeFillRowLayout();

        this.subjectLabel.fill = "white";
        this.subjectLabel.font = "12pt sans-serif";
        this.subjectLabel.fontColour = "#4F4F4F";

        this.subjectField.font = "10pt sans-serif";
        this.subjectField.fontColour = "#4F4F4F";
        this.subjectField.radius = 8;

        // code
        this.code.fill = "white";
        this.code.border = "white";
        this.code.padding = 3;
        this.code.layoutMethod = Layout.makeFillRowLayout();

        this.codeLabel.font = "12pt sans-serif";
        this.codeLabel.fontColour = "#4F4F4F";

        this.codeField.font = "10pt sans-serif";
        this.codeField.fontColour = "#4F4F4F";
        this.codeField.margin = 2;

        this.codeField.radius = 8;

        // description
        this.description.fill = "white";
        this.description.border = "white";
        this.description.layoutMethod = Layout.makeWrapRowLayout();

        this.descriptionLabel.font = "12pt sans-serif";
        this.descriptionLabel.fontColour = "#4F4F4F";
        this.descriptionLabel.margin = 2;

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

        // remove
        this.remove.font = "12pt sans-serif";
        this.remove.fontColour = "#3F3F3F";

        // add elements
        // **************************************************
        this.addChild(this.header);
        this.header.addChild(this.headerLabel);

        this.addChild(this.grid1);
        this.grid1.addChild(this.subject);
        this.subject.addChild(this.subjectLabel);
        this.subject.addChild(this.subjectField);

        this.addChild(this.grid2);
        this.grid2.addChild(this.code);
        this.code.addChild(this.codeLabel);
        this.code.addChild(this.codeField);

        this.addChild(this.grid3);
        this.grid3.addChild(this.description);
        this.description.addChild(this.descriptionLabel);
        this.description.addChild(this.descriptionField);

        this.addChild(this.grid4);
        this.grid4.addChild(this.buttons);
        this.buttons.addChild(this.apply);
        this.buttons.addChild(this.remove);

    }

    // set model
    set model(m: Model) {
        this._model = m;
    }

    // update
    update(): void {
        this.subjectField.text = this._model.emptyString();
        this.codeField.text = this._model.emptyString();
        this.descriptionField.text = this._model.emptyString();
    }

    // set events
    public setEvents(c: Controller) {
        this.apply.addEventListener("action", () => {
            c.applyCourseChange(this.subjectField.text, this.codeField.text, this.descriptionField.text);
        })

        this.remove.addEventListener("action", () => {
            c.removeCourse();
        })
    }

}
