import RegisterComponent from "../Components/RegisterComponent";
import { useNavigate } from "react-router";
import { useStores } from "../store/StoreContext";
import { observer } from "mobx-react";

const RegisterPage = () => {
  const navigate = useNavigate();

  const store = useStores();

  const register = async (values) => {
    await fetch("http://localhost:3002/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: values.fname,
        lastName: values.lname,
        gender: values.gender,
        phone: values.phone,
        email: values.email,
        password: values.password,
      }),
    })
      .then(store.authStore.setToken(values.email))
      .then(navigate("/"));
  };

  return <RegisterComponent register={register} />;
};

export default observer(RegisterPage);
