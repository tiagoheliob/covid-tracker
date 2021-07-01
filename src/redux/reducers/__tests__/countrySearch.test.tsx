import { CountrySearch } from "../../actions/countrySearch";
import countrySearchReducer, { defaultState } from "../countrySearch";

describe("The country Search Reducer", () => {
  it("should set loading to false when type is ERROR", () => {
    const action = { type: CountrySearch.ERROR };
    expect(countrySearchReducer(defaultState, action)).toEqual({
      ...defaultState,
      isLoading: false,
      error: true,
    });
  });

  it("should set loading to false when type is SUCCESS and add payload", () => {
    const payload = [{}];
    const action = { type: CountrySearch.SUCCESS, payload };
    expect(countrySearchReducer(defaultState, action)).toEqual({
      ...defaultState,
      isLoading: false,
      countries: payload,
    });
  });

  it("should set loading to true when type is LOADING", () => {
    const action = { type: CountrySearch.LOADING };
    expect(countrySearchReducer(defaultState, action)).toEqual({
      ...defaultState,
      isLoading: true,
    });
  });

  it("should set the default state when type CLEANUP", () => {
    const action = { type: CountrySearch.CLEANUP };
    expect(countrySearchReducer(defaultState, action)).toEqual(defaultState);
  });

  it("should return the current state by default", () => {
    expect(countrySearchReducer(null, { type: "UNKNOWN" })).toEqual({});
  });
});
