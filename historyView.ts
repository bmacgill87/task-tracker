import {
    Layout,
    SKButton,
    SKContainer,
    SKLabel
} from "./simplekit/src/imperative-mode";
import { Subscriber } from "./subscriber";
import { Model } from "./model";

export class HistoryView extends SKContainer implements Subscriber {

    // declarations

    private _model: Model;

    private _containers: SKContainer[] = [];
    private _labels: SKLabel[] = [];
    private _infoButtons: SKButton[] = [];

    private panelWidth = 300;
    private panelHeight = 250;

    private headerHeight = 35;
    private numRows = 6;

    private labelHeight = 22;
    private propertyMargin = 50;
    private propertyMargin2 = 25;

    private buttonDimensions = 15;

    // view elements
    // **************************************************

    // display
    private displayCont: SKContainer = new SKContainer({ width: (this.panelWidth - this.propertyMargin), height: (this.panelHeight - this.propertyMargin2) });

    // header
    private header: SKContainer = new SKContainer({ width: (this.panelWidth - this.propertyMargin), height: this.headerHeight });
    private headerLabel: SKLabel = new SKLabel({ text: "History", align: "centre", width: (this.panelWidth - this.propertyMargin) });

    // grids
    private grid1: SKContainer = new SKContainer({ width: (this.panelWidth - this.propertyMargin), height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid2: SKContainer = new SKContainer({ width: (this.panelWidth - this.propertyMargin), height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid3: SKContainer = new SKContainer({ width: (this.panelWidth - this.propertyMargin), height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid4: SKContainer = new SKContainer({ width: (this.panelWidth - this.propertyMargin), height: (this.panelHeight - this.headerHeight) / this.numRows });
    private grid5: SKContainer = new SKContainer({ width: (this.panelWidth - this.propertyMargin), height: (this.panelHeight - this.headerHeight) / this.numRows });

    // course 1
    private label1: SKLabel = new SKLabel({ text: "No task history", align: "left", width: ((this.panelWidth - this.propertyMargin) * (13 / 15)), height: this.labelHeight });
    private info1: SKButton = new SKButton({ text: "i", width: this.buttonDimensions, height: this.buttonDimensions });

    // course 2
    private label2: SKLabel = new SKLabel({ text: "", align: "left", width: ((this.panelWidth - this.propertyMargin) * (13 / 15)), height: this.labelHeight });
    private info2: SKButton = new SKButton({ text: "i", width: this.buttonDimensions, height: this.buttonDimensions });

    // course 3
    private label3: SKLabel = new SKLabel({ text: "", align: "left", width: ((this.panelWidth - this.propertyMargin) * (13 / 15)), height: this.labelHeight });
    private info3: SKButton = new SKButton({ text: "i", width: this.buttonDimensions, height: this.buttonDimensions });

    // course 4
    private label4: SKLabel = new SKLabel({ text: "", align: "left", width: ((this.panelWidth - this.propertyMargin) * (13 / 15)), height: this.labelHeight });
    private info4: SKButton = new SKButton({ text: "i", width: this.buttonDimensions, height: this.buttonDimensions });

    // course 5
    private label5: SKLabel = new SKLabel({ text: "", align: "left", width: ((this.panelWidth - this.propertyMargin) * (13 / 15)), height: this.labelHeight });
    private info5: SKButton = new SKButton({ text: "i", width: this.buttonDimensions, height: this.buttonDimensions });


    // constructor
    constructor() {
        super();

        // panel style
        // **************************************************

        this.width = this.panelWidth;
        this.height = this.panelHeight;
        this.fill = "#90E0EF";
        this.border = "#03045E";
        this.layoutMethod = Layout.makeCentredLayout();
        this.displayCont.layoutMethod = Layout.makeWrapRowLayout();


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

        // assign 1
        this.label1.font = "10pt sans-serif";
        this.label1.fontColour = "#4F4F4F";

        this.info1.font = "8pt sans-serif";
        this.info1.fontColour = "#3F3F3F";

        // assign 2
        this.label2.font = "10pt sans-serif";
        this.label2.fontColour = "#4F4F4F";

        this.info2.font = "8pt sans-serif";
        this.info2.fontColour = "#3F3F3F";

        // assign 3
        this.label3.font = "10pt sans-serif";
        this.label3.fontColour = "#4F4F4F";

        this.info3.font = "8pt sans-serif";
        this.info3.fontColour = "#3F3F3F";

        // assign 4
        this.label4.font = "10pt sans-serif";
        this.label4.fontColour = "#4F4F4F";

        this.info4.font = "8pt sans-serif";
        this.info4.fontColour = "#3F3F3F";

        // assign 5
        this.label5.font = "10pt sans-serif";
        this.label5.fontColour = "#4F4F4F";

        this.info5.font = "8pt sans-serif";
        this.info5.fontColour = "#3F3F3F";

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

        // store info buttons
        this._infoButtons.push(this.info1);
        this._infoButtons.push(this.info2);
        this._infoButtons.push(this.info3);
        this._infoButtons.push(this.info4);
        this._infoButtons.push(this.info5);

        // add elements
        // **************************************************

        this.addChild(this.displayCont);

        this.displayCont.addChild(this.header);
        this.header.addChild(this.headerLabel);

        this.displayCont.addChild(this.grid1);
        this.grid1.addChild(this.label1);

        this.displayCont.addChild(this.grid2);
        this.grid2.addChild(this.label2);

        this.displayCont.addChild(this.grid3);
        this.grid3.addChild(this.label3);

        this.displayCont.addChild(this.grid4);
        this.grid4.addChild(this.label4);

        this.displayCont.addChild(this.grid5);
        this.grid5.addChild(this.label5);

    }

    // set model
    set model(m: Model) {
        this._model = m;
    }

    // update
    update(): void {

        this._labels.forEach((element, i) => {

            if (this._model.completedAssignments[i]) {
                // assignment display labels
                element.text = this._model.completedAssignments[i].toString();
            }

        });

    }

}
