import { render, screen, waitFor } from "@testing-library/react";
import LoginComponent from "../Components/LoginComponent";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Login Component", () => {
  test("testing Email and password Label", () => {
    const { getByLabelText } = render(<LoginComponent />);

    const email = getByLabelText("Email");
    expect(email).toBeTruthy();
    const password = screen.getByText("Password");
    expect(password).toBeInTheDocument();
  });

  test("testing Email text field and password text field", () => {
    render(<LoginComponent />);

    const emailField = document.getElementById("email");
    expect(emailField).toBeInTheDocument();
    const passwordField = document.getElementById("password");
    expect(passwordField).toBeInTheDocument();
  });

  test("testing button save", () => {
    render(<LoginComponent />);

    const button = screen.getByText("Save");
    expect(button).toBeInTheDocument();
  });

  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("testing empty email error", async () => {
    act(() => {
      render(<LoginComponent />, container);
    });

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    act(() => {
      userEvent.click(email);
      userEvent.click(password);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Email"));
    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
  });

  it("testing wrong email error", async () => {
    act(() => {
      render(<LoginComponent />, container);
    });

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    act(() => {
      userEvent.type(email, "saloni");
      userEvent.click(password);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Email"));
    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
  });

  it("testing correct email", async () => {
    act(() => {
      render(<LoginComponent />, container);
    });

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    act(() => {
      userEvent.type(email, "saloni@gmail.com");
      userEvent.click(password);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Valid Email"
    );
  });

  it("testing empty password error", async () => {
    act(() => {
      render(<LoginComponent />, container);
    });

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    act(() => {
      userEvent.click(password);
      userEvent.click(email);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Password"));
    expect(screen.getByText("Please Enter Valid Password")).toBeInTheDocument();
  });

  it("testing wrong password error", async () => {
    act(() => {
      render(<LoginComponent />, container);
    });

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    act(() => {
      userEvent.type(password, "12345");
      userEvent.click(email);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Password"));
    expect(screen.getByText("Please Enter Valid Password")).toBeInTheDocument();
  });

  it("testing correct password", async () => {
    act(() => {
      render(<LoginComponent />, container);
    });

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    act(() => {
      userEvent.type(password, "Saloni@1");
      userEvent.click(email);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Valid Password"
    );
  });

  it("form submitted without any input", async () => {
    act(() => {
      render(<LoginComponent />, container);
    });

    const button = screen.getByRole("button");

    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      screen.getByText("Please Enter Valid Email");
      screen.getByText("Please Enter Valid Password");
    });

    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
    expect(screen.getByText("Please Enter Valid Password")).toBeInTheDocument();
  });

  it("form submitted with error", () => {
    act(() => {
      render(<LoginComponent />, container);
    });

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const button = screen.getByRole("button");

    act(() => {
      userEvent.type(email, "saloni");
      userEvent.type(password, "saloni");
      userEvent.click(button);
    });

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("form submitted with correct inputs", () => {
    act(() => {
      render(<LoginComponent login={() => {}} />, container);
    });

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const button = screen.getByRole("button");

    act(() => {
      userEvent.type(email, "saloni@gmail.com");
      userEvent.type(password, "Saloni@1");
      userEvent.click(button);
    });

    expect(screen.getByRole("button")).toBeEnabled();
  });
});
