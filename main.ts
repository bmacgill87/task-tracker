// imports
import {
  startSimpleKit,
  setSKRoot,
  SKContainer,
  Layout,
  SKLabel,
} from "./simplekit/src/imperative-mode";
import { Model } from "./model";
import { MainView } from "./mainView";
import { ActiveView } from "./activeView";
import { InputView } from "./inputView";
import { EditView } from "./editView";
import { SideView } from "./sideView";
import { CourseView } from "./courseView";
import { CourseInputView } from "./courseInputView";
import { CourseEditView } from "./courseEditView";
import { HistoryView } from "./historyView";
import { Controller } from "./controller";

// root
const root = new SKContainer();
root.padding = 10;
root.fill = "#CAF0F8";
root.layoutMethod = Layout.makeCentredLayout();

// panels
const panel = new SKContainer({ width: 900, height: 500 });
const mainPanel = new SKContainer({ width: 600, height: 500 });
const sidePanel = new SKContainer({ width: 300, height: 500 });

// title
const title = new SKContainer({ width: 900, height: 50 });
const titleLabel = new SKLabel({ text: "Task Tracker", align: "centre", width: 900, height: 50 });

// panel styles
panel.fill = "00B4D8";
panel.layoutMethod = Layout.makeWrapRowLayout();
mainPanel.layoutMethod = Layout.makeCentredLayout();
sidePanel.layoutMethod = Layout.makeWrapRowLayout();

// title style
// title.fill = "#90E0EF";
title.fill = "#0077B8";
title.border = "#03045E";
title.padding = 5;

titleLabel.font = "36pt monospace";
titleLabel.fontColour = "white";

// mvc instances
const model = new Model();

const activeView = new ActiveView();
const inputView = new InputView();
const editView = new EditView();

const courseView = new CourseView();
const courseInputView = new CourseInputView();
const courseEditView = new CourseEditView();

const mainView = new MainView(activeView, inputView, editView);
const sideView = new SideView(courseView, courseInputView, courseEditView);

const historyView = new HistoryView();

const controller = new Controller();

// set model
activeView.model = model;
inputView.model = model;
editView.model = model;
mainView.model = model;

courseView.model = model;
courseInputView.model = model;
courseEditView.model = model;
sideView.model = model;

historyView.model = model;

controller.model = model;

// set controller
activeView.setEvents(controller);
inputView.setEvents(controller);
editView.setEvents(controller);
courseView.setEvents(controller);
courseInputView.setEvents(controller);
courseEditView.setEvents(controller);

// add view as subscriber
model.addSubscribers(activeView);
model.addSubscribers(inputView);
model.addSubscribers(editView);
model.addSubscribers(mainView);

model.addSubscribers(courseView);
model.addSubscribers(courseInputView);
model.addSubscribers(courseEditView);
model.addSubscribers(sideView);

model.addSubscribers(historyView);

// add elements
root.addChild(panel);
panel.addChild(title);
title.addChild(titleLabel);

panel.addChild(mainPanel);
panel.addChild(sidePanel);
mainPanel.addChild(mainView);
sidePanel.addChild(sideView);
sidePanel.addChild(historyView);
// panel.addChild(mainView);
// panel.addChild(assignInputView);

setSKRoot(root);
startSimpleKit();
