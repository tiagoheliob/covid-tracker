import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Button } from "react-bootstrap";
import DetailedInformation from "../index";
import store from "../../../redux/store";

describe("The Detailed Information Page", () => {
  let wrapper = null;
  let mockStore = null;
  let props = {
    history: {
      push: jest.fn(),
    },
  };

  const reduxSetup = () => {
    mockStore = store;
    mockStore.dispatch = jest.fn();
  };

  beforeEach(() => {
    reduxSetup();
    wrapper = mount(
      <MemoryRouter>
        <Provider store={mockStore}>
          <DetailedInformation {...props} />
        </Provider>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should dispatch the action when it first renders", () => {
    expect(mockStore.dispatch).toHaveBeenCalled();
  });

  it("Should redirect the user when click on the back button", () => {
    wrapper.find(Button).simulate("click");

    expect(props.history.push).toHaveBeenCalled();
  });
});
