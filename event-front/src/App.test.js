import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store"

test("renders without crashing", () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>)
  expect(getByText("Event registration")).toBeInTheDocument();
})