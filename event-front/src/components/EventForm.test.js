import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventForm from "./EventForm";

test("renders a form", () => {
    const handleSubmit = jest.fn()
    render(<EventForm handleAddEvent={handleSubmit} />);

    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Event Date")).toBeInTheDocument();
})

test("submits a form", async () => {
    const handleSubmit = jest.fn()
    render(<EventForm handleAddEvent={handleSubmit} />);

    userEvent.type(screen.getByLabelText("First Name"), "Jane");
    userEvent.type(screen.getByLabelText("Last Name"), "Doe");
    userEvent.type(screen.getByLabelText("Email"), "jane.doe@mail.com");
    fireEvent.change(screen.getByLabelText("Event Date"), { target: { value: "2021-06-30" } });
    fireEvent.submit(screen.getByTestId("event-form"));
    await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith({
            date: "2021-06-30",
            email: "jane.doe@mail.com",
            firstName: "Jane",
            lastName: "Doe"
        });
    });
})

test("does not submit an empty form", async () => {
    const handleSubmit = jest.fn()
    render(<EventForm handleAddEvent={handleSubmit} />);
    fireEvent.submit(screen.getByTestId("event-form"));
    await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(0);
    });
})
