import LoginComponent from "../Components/LoginComponent";
import { useNavigate } from "react-router-dom";
import { useStores } from "../store/StoreContext";
import { observer } from "mobx-react";

const LoginPage = () => {
  const navigate = useNavigate();

  const store = useStores();

  const login = async (values) => {
    await fetch("http://localhost:3002/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then(store.authStore.setToken(values.email))
      .then(navigate("/"));
  };

  return <LoginComponent login={login} />;
};

export default observer(LoginPage);
