import reducer, {
  fetchDummy,
  fetchJSON,
} from "../src/features/customCounter/customCounterSlice";

describe("extraReducers", () => {
  const initialState = {
    mode: 0,
    value: 0,
  };
  it("should output 105 ", () => {
    const action = { type: fetchDummy.fulfilled.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(105);
  });
  it("should output 95 ", () => {
    const action = { type: fetchDummy.rejected.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.value).toEqual(95);
  });
  it("should output username 5 ", () => {
    const action = { type: fetchJSON.fulfilled.type, payload: 5 };
    const state = reducer(initialState, action);
    expect(state.username).toEqual(5);
  });
});
