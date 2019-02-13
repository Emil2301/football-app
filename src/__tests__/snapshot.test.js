import React from "react";
import { create } from "react-test-renderer";
import Error from "../components/Error";

describe("Error component", () => {
  test("it matches the snapshot", () => {
    const component = create(<Error />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});