import { render, screen } from "@testing-library/react";
import Notification from "./Notification";

const event = { firstName: "Jane", lastName: "Doe", email: "jane.doe@mail.com", date: "2021-07-06", id: "0uhGN2W_LKKfrK8GfozsU" }
test("displays a success message", () => {
    render(<Notification success={true} event={event} />);
    expect(screen.getByTestId("success-alert")).toBeInTheDocument();
})

test("displays a loading message", () => {
    render(<Notification loading={true} />);
    expect(screen.getByText("Sending data...")).toBeInTheDocument();
})

test("displays an error message", () => {
    let errMsg = "An unexpected error occurred."
    render(<Notification error={errMsg} />);
    expect(screen.getByText(errMsg)).toBeInTheDocument();
})
