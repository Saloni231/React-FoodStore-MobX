import { render, screen, waitFor } from "@testing-library/react";
import ContactPageComponent from "../Components/ContactPageComponent";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Register Component", () => {
  test("testing all Labels", () => {
    const { getByLabelText } = render(<ContactPageComponent />);

    const name = getByLabelText("Name");
    expect(name).toBeTruthy();
    const email = getByLabelText("Email");
    expect(email).toBeTruthy();
    const contact = getByLabelText("Contact Number");
    expect(contact).toBeInTheDocument();
    const message = getByLabelText("Message");
    expect(message).toBeInTheDocument();
  });

  test("testing Email text field and password text field", () => {
    render(<ContactPageComponent />);

    const name = document.getElementById("name");
    expect(name).toBeInTheDocument();
    const email = document.getElementById("email");
    expect(email).toBeInTheDocument();
    const contact = document.getElementById("phone");
    expect(contact).toBeInTheDocument();
    const message = document.getElementById("message");
    expect(message).toBeInTheDocument();
  });

  test("testing button save", () => {
    render(<ContactPageComponent />);

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

  it("testing empty name error", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    act(() => {
      userEvent.click(name);
      userEvent.click(email);
    });

    await waitFor(() => screen.getByText("Please Enter Name"));
    expect(screen.getByText("Please Enter Name")).toBeInTheDocument();
  });

  it("testing correct name", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const name = document.getElementById("name");
    const email = document.getElementById("email");

    act(() => {
      userEvent.type(name, "saloni");
      userEvent.click(email);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Name"
    );
  });

  it("testing empty email error", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const email = document.getElementById("email");
    const name = document.getElementById("name");

    act(() => {
      userEvent.click(email);
      userEvent.click(name);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Email"));
    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
  });

  it("testing wrong email error", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const email = document.getElementById("email");
    const name = document.getElementById("name");

    act(() => {
      userEvent.type(email, "saloni");
      userEvent.click(name);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Email"));
    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
  });

  it("testing correct email", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const email = document.getElementById("email");
    const name = document.getElementById("name");

    act(() => {
      userEvent.type(email, "saloni@gmail.com");
      userEvent.click(name);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Valid Email"
    );
  });

  it("testing empty contact number error", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const phone = document.getElementById("phone");
    const name = document.getElementById("name");

    act(() => {
      userEvent.click(phone);
      userEvent.click(name);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Phone Number"));
    expect(
      screen.getByText("Please Enter Valid Phone Number")
    ).toBeInTheDocument();
  });

  it("testing wrong email error", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const phone = document.getElementById("phone");
    const name = document.getElementById("name");

    act(() => {
      userEvent.type(phone, "12345");
      userEvent.click(name);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Phone Number"));
    expect(
      screen.getByText("Please Enter Valid Phone Number")
    ).toBeInTheDocument();
  });

  it("testing correct email", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const phone = document.getElementById("phone");
    const name = document.getElementById("name");

    act(() => {
      userEvent.type(phone, "1234567890");
      userEvent.click(name);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Valid Contact Number"
    );
  });

  it("testing empty message error", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const name = document.getElementById("name");
    const message = document.getElementById("message");

    act(() => {
      userEvent.click(message);
      userEvent.click(name);
    });

    await waitFor(() => screen.getByText("Please Enter Message"));
    expect(screen.getByText("Please Enter Message")).toBeInTheDocument();
  });

  it("testing correct message", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const name = document.getElementById("name");
    const message = document.getElementById("message");

    act(() => {
      userEvent.type(message, "hello");
      userEvent.click(name);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Message"
    );
  });

  it("form submitted without any input", async () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const button = screen.getByRole("button");

    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      screen.getByText("Please Enter Name");
      screen.getByText("Please Enter Valid Phone Number");
      screen.getByText("Please Enter Valid Email");
      screen.getByText("Please Enter Message");
    });

    expect(screen.getByText("Please Enter Name")).toBeInTheDocument();
    expect(
      screen.getByText("Please Enter Valid Phone Number")
    ).toBeInTheDocument();
    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
    expect(screen.getByText("Please Enter Message")).toBeInTheDocument();
  });

  it("form submitted with error", () => {
    act(() => {
      render(<ContactPageComponent />, container);
    });

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const button = screen.getByRole("button");

    act(() => {
      userEvent.click(name);
      userEvent.type(phone, "12345");
      userEvent.type(email, "saloni");
      userEvent.click(message);
      userEvent.click(button);
    });

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("form submitted with correct inputs", () => {
    act(() => {
      render(<ContactPageComponent saveContactUsForm={() => {}} />, container);
    });

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const button = screen.getByRole("button");

    act(() => {
      userEvent.type(name, "saloni");
      userEvent.type(phone, "1234567890");
      userEvent.type(email, "saloni@gmail.com");
      userEvent.type(message, "hello");
      userEvent.click(button);
    });

    expect(button).toBeEnabled();
  });
});
