import { shallow } from "enzyme";
import * as React from "react";
import App from "../App";

describe("App", () => {
  it("should render", () => {
    expect(shallow(<App />)).toBeDefined();
  });
});
