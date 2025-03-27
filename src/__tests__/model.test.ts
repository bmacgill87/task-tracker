import { Model } from "../models";

// Subscriber
const mockSubscriber = {
  update: jest.fn(),
};

// Adding Courses
describe("Adding Courses", () => {
  let model: Model;

  // Setup
  beforeEach(() => {
    model = new Model();
    model.addSubscribers(mockSubscriber);
    jest.clearAllMocks();
  });

  // Add Course
  test("Adds a New Course", () => {
    model.addNewCourse("CS", "1073", "Intro to CS");
    expect(model.courses.length).toBe(1);
    expect(model.courses[0].toString()).toBe("CS1073");
    expect(mockSubscriber.update).toHaveBeenCalled();
  });

  // Maximum 5 Courses
  test("Adds 5 Courses At Most", () => {
    for (let i = 0; i < 10; i++) {
      model.addNewCourse("C", `${i}`, "");
    }
    expect(model.courses.length).toBe(5);
    expect(model.courses[4].toString()).toBe("C4");
    expect(mockSubscriber.update).toHaveBeenCalledTimes(5);
  });

});

describe("Adding Assignments", () => {
  let model: Model;

  const subject = "CS";
  const code = "1073";
  const courseDescription = "Intro to CS";
  const course = `${subject}${code}`;
  const assignTitle = "Assignment 1";
  const date = "2024/12/01";
  const assignDescription = "CS Assignment";

  // Setup
  beforeEach(() => {
    model = new Model();
    model.addSubscribers(mockSubscriber);
    jest.clearAllMocks();

    model.addNewCourse(subject, code, courseDescription);
  });

  // Add Assignment
  test("Add a New Assignment", () => {
    model.addNewAssignment(course, assignTitle, date, assignDescription);
    expect(model.assignments.length).toBe(1);
    expect(mockSubscriber.update).toHaveBeenCalled();
  });

  // Assignment w/ No Courses
  test("Assignment is Not Added Without Course", () => {
    model.addNewAssignment("", assignTitle, date, assignDescription);
    expect(model.assignments.length).toBe(0);
    expect(mockSubscriber.update).toHaveBeenCalled();
  });

  // Assignment w/ Invalid Title
  test("Assignment is Not Added Without Title", () => {
    model.addNewAssignment(course, "", date, assignDescription);
    expect(model.assignments.length).toBe(0);
    expect(mockSubscriber.update).toHaveBeenCalled();
  });

  // Assignment w/ Invalid Date
  test("Assignment is Not Added Without Date", () => {
    model.addNewAssignment(course, assignTitle, "", assignDescription);
    expect(model.assignments.length).toBe(0);
    expect(mockSubscriber.update).toHaveBeenCalled();
  });

  // Assignment Created Without Description
  test("Assignment is Added Without Description", () => {
    model.addNewAssignment(course, assignTitle, date, "");
    expect(model.assignments.length).toBe(1);
    expect(mockSubscriber.update).toHaveBeenCalled();
  });

});
