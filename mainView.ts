import {
    Layout,
    SKContainer
} from "./simplekit/src/imperative-mode";
import { Subscriber } from "./subscriber";
import { Model } from "./model";


export class MainView extends SKContainer implements Subscriber {

    // declarations

    private _model: Model;

    private _activeView: SKContainer;
    private _inputView: SKContainer;
    private _editView: SKContainer;
    private _current: SKContainer;

    private panelWidth = 600;
    private panelHeight = 500;


    // constructor
    constructor(activeView: SKContainer, inputView: SKContainer, editView: SKContainer) {
        super();

        // panel style
        this.width = this.panelWidth;
        this.height = this.panelHeight;
        this.fill = "#90E0EF";
        this.border = "#03045E";
        this.layoutMethod = Layout.makeCentredLayout();

        // views
        this._activeView = activeView;
        this._inputView = inputView;
        this._editView = editView;

        this._current = this._activeView;

        // add elements
        this.addChild(this._current);

    }

    // set model
    set model(m: Model) {
        this._model = m;
    }

    // update
    update() {
        this.removeChild(this._current);

        if (this._model.assignView === 1) {
            this._current = this._inputView;
        } else if (this._model.assignView === 2) {
            this._current = this._editView;
        } else {
            this._current = this._activeView;
        }

        this.addChild(this._current);
    }

}