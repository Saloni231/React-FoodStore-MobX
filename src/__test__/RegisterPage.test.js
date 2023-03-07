import { render, screen, waitFor } from "@testing-library/react";
import RegisterComponent from "../Components/RegisterComponent";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("Register Component", () => {
  test("testing all Labels", () => {
    const { getByLabelText } = render(<RegisterComponent />);

    const fname = getByLabelText("First Name");
    expect(fname).toBeTruthy();
    const lname = getByLabelText("Last Name");
    expect(lname).toBeTruthy();
    const email = getByLabelText("Email");
    expect(email).toBeTruthy();
    const gender = getByLabelText("Gender");
    expect(gender).toBeTruthy();
    const contact = getByLabelText("Contact Number");
    expect(contact).toBeInTheDocument();
    const password = getByLabelText("Password");
    expect(password).toBeInTheDocument();
  });

  test("testing all text field", () => {
    render(<RegisterComponent />);

    const fname = document.getElementById("fname");
    expect(fname).toBeInTheDocument();
    const lname = document.getElementById("lname");
    expect(lname).toBeInTheDocument();
    const email = document.getElementById("email");
    expect(email).toBeInTheDocument();
    const gender = document.getElementById("gender");
    expect(gender).toBeInTheDocument();
    const contact = document.getElementById("phone");
    expect(contact).toBeInTheDocument();
    const password = document.getElementById("password");
    expect(password).toBeInTheDocument();
  });

  test("testing button save", () => {
    render(<RegisterComponent />);

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

  it("testing empty first name error", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");

    act(() => {
      userEvent.click(fname);
      userEvent.click(lname);
    });

    await waitFor(() => screen.getByText("Please Enter First Name"));
    expect(screen.getByText("Please Enter First Name")).toBeInTheDocument();
  });

  it("testing correct first name", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");

    act(() => {
      userEvent.type(fname, "saloni");
      userEvent.click(lname);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter First Name"
    );
  });

  it("testing empty last name error", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");

    act(() => {
      userEvent.click(lname);
      userEvent.click(fname);
    });

    await waitFor(() => screen.getByText("Please Enter Last Name"));
    expect(screen.getByText("Please Enter Last Name")).toBeInTheDocument();
  });

  it("testing correct last name", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");

    act(() => {
      userEvent.type(lname, "saloni");
      userEvent.click(fname);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Last Name"
    );
  });

  it("testing empty gender error", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const fname = document.getElementById("fname");
    const gender = document.getElementById("gender");

    act(() => {
      userEvent.click(gender);
      userEvent.click(fname);
    });

    await waitFor(() => screen.getByText("Please Select Gender"));
    expect(screen.getByText("Please Select Gender")).toBeInTheDocument();
  });

  it("testing correct gender", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const fname = document.getElementById("fname");
    const gender = document.getElementById("gender");

    act(() => {
      userEvent.selectOptions(gender, "Female");
      userEvent.click(fname);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Select Gender"
    );
  });

  it("testing empty email error", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const email = document.getElementById("email");
    const fname = document.getElementById("fname");

    act(() => {
      userEvent.click(email);
      userEvent.click(fname);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Email"));
    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
  });

  it("testing wrong email error", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const email = document.getElementById("email");
    const fname = document.getElementById("fname");

    act(() => {
      userEvent.type(email, "saloni");
      userEvent.click(fname);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Email"));
    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
  });

  it("testing correct email", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const email = document.getElementById("email");
    const fname = document.getElementById("fname");

    act(() => {
      userEvent.type(email, "saloni@gmail.com");
      userEvent.click(fname);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Valid Email"
    );
  });

  it("testing empty contact number error", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const phone = document.getElementById("phone");
    const fname = document.getElementById("fname");

    act(() => {
      userEvent.click(phone);
      userEvent.click(fname);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Contact Number"));
    expect(
      screen.getByText("Please Enter Valid Contact Number")
    ).toBeInTheDocument();
  });

  it("testing wrong email error", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const phone = document.getElementById("phone");
    const fname = document.getElementById("fname");

    act(() => {
      userEvent.type(phone, "12345");
      userEvent.click(fname);
    });

    await waitFor(() => screen.getByText("Please Enter Valid Contact Number"));
    expect(
      screen.getByText("Please Enter Valid Contact Number")
    ).toBeInTheDocument();
  });

  it("testing correct email", async () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const phone = document.getElementById("phone");
    const fname = document.getElementById("fname");

    act(() => {
      userEvent.type(phone, "1234567890");
      userEvent.click(fname);
    });

    await waitFor(() => document.querySelectorAll("div"));
    expect(document.querySelector("div").textContent).not.toMatch(
      "Please Enter Valid Contact Number"
    );
  });

  it("testing empty password error", async () => {
    act(() => {
      render(<RegisterComponent />, container);
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
      render(<RegisterComponent />, container);
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
      render(<RegisterComponent />, container);
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
      render(<RegisterComponent />, container);
    });

    const button = screen.getByRole("button");

    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      screen.getByText("Please Enter First Name");
      screen.getByText("Please Enter Last Name");
      screen.getByText("Please Select Gender");
      screen.getByText("Please Enter Valid Contact Number");
      screen.getByText("Please Enter Valid Email");
      screen.getByText("Please Enter Valid Password");
    });

    expect(screen.getByText("Please Enter First Name")).toBeInTheDocument();
    expect(screen.getByText("Please Enter Last Name")).toBeInTheDocument();
    expect(screen.getByText("Please Select Gender")).toBeInTheDocument();
    expect(
      screen.getByText("Please Enter Valid Contact Number")
    ).toBeInTheDocument();
    expect(screen.getByText("Please Enter Valid Email")).toBeInTheDocument();
    expect(screen.getByText("Please Enter Valid Password")).toBeInTheDocument();
  });

  it("form submitted with error", () => {
    act(() => {
      render(<RegisterComponent />, container);
    });

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const gender = document.getElementById("gender");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const button = screen.getByRole("button");

    act(() => {
      userEvent.click(fname);
      userEvent.click(lname);
      userEvent.click(gender);
      userEvent.type(phone, "12345");
      userEvent.type(email, "saloni");
      userEvent.type(password, "saloni");
      userEvent.click(button);
    });

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("form submitted with correct inputs", () => {
    act(() => {
      render(<RegisterComponent register={() => {}} />, container);
    });

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const gender = document.getElementById("gender");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const button = screen.getByRole("button");

    act(() => {
      userEvent.type(fname, "saloni");
      userEvent.type(lname, "saloni");
      userEvent.selectOptions(gender, "Female");
      userEvent.type(phone, "1234567890");
      userEvent.type(email, "saloni@gmail.com");
      userEvent.type(password, "Saloni@1");
      userEvent.click(button);
    });

    expect(button).toBeEnabled();
  });
});
