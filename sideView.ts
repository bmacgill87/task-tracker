import {
    Layout,
    SKContainer
} from "./simplekit/src/imperative-mode";
import { Subscriber } from "./subscriber";
import { Model } from "./model";

export class SideView extends SKContainer implements Subscriber {

    // declarations

    private _model: Model

    private _activeView: SKContainer;
    private _inputView: SKContainer;
    private _editView: SKContainer;
    private _current: SKContainer;

    private panelWidth = 300;
    private panelHeight = 250;

    private spacerDimensions = 25;

    private spacer1: SKContainer = new SKContainer({ width: this.panelWidth, height: this.spacerDimensions });
    private spacer2: SKContainer = new SKContainer({ width: this.spacerDimensions, height: (this.panelHeight - this.spacerDimensions) });

    // constructor
    constructor(courseView: SKContainer, inputView: SKContainer, editView: SKContainer) {
        super();

        // panel style
        this.width = this.panelWidth;
        this.height = this.panelHeight;
        this.fill = "#90E0EF";
        this.border = "0077B6";
        this.layoutMethod = Layout.makeCentredLayout();

        // views
        this._activeView = courseView;
        this._inputView = inputView;
        this._editView = editView;

        this._current = this._activeView;

        // add elements
        this.addChild(this.spacer1);
        this.addChild(this.spacer2);
        this.addChild(this._current);

    }

    // set model
    set model(m: Model) {
        this._model = m;
    }

    // update
    update() {
        this.removeChild(this._current);

        if (this._model.courseView === 1) {
            this._current = this._inputView;
        }
        else if (this._model.courseView === 2) {
            this._current = this._editView;
        } else {
            this._current = this._activeView;
        }

        this.addChild(this._current);
    }

}