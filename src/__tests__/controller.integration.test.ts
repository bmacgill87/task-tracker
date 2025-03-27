import { Model } from "../models";
import { Controller } from "../controllers";

// Subscriber
const mockSubscriber = {
  update: jest.fn(),
};

describe("Course Controller Integration", () => {
  let model: Model;
  let controller: Controller;

  // Setup
  beforeEach(() => {
    model = new Model();
    controller = new Controller();
    controller.model = model;
    model.addSubscribers(mockSubscriber);
    jest.clearAllMocks();
  });

  // Adding Course Updates View
  test("Adding Course Updates View Accordingly", () => {
    controller.addCourse();
    expect(model.courseView).toBe(1);
    expect(mockSubscriber.update).toHaveBeenCalled();
  });

  // Adding Assignments Updates View
  test("Adding Assignment Updates View Accordingly", () => {
    controller.addAssignment();
    expect(model.assignView).toBe(1);
    expect(mockSubscriber.update).toHaveBeenCalled();
  });

});