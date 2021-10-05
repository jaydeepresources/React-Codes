import renderer from "react-test-renderer";
import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";

describe("A test suite", function () {
  it("contains spec with an expectation", function () {
    expect(true).toBe(true);
  });

  it("<p> has Hello World", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Hello World");
  });
});
