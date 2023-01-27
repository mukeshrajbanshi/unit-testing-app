import calculatorReducers from "../src/reducers/calculatorReducers";
import { ADD_INPUTS, SUBTRACT_INPUTS } from "../src/actions/types";

describe("Test calculatorReducers", () => {
  it("Reducers for ADD_INPUTS", () => {
    let state = { output: 0 };
    state = calculatorReducers(0, { type: ADD_INPUTS, payload: 500 });
    expect(state).toEqual({ output: 500 });
  });

  it("Reducers for SUBTRACT_INPUTS", () => {
    let state = { output: 0 };
    state = calculatorReducers(0, { type: SUBTRACT_INPUTS, payload: 10 });
    expect(state).toEqual({ output: 10 });
  });
});
