import CartComponent from "../Components/CartComponent";
import { observer } from "mobx-react";

const Cart = (props) => {
  return <CartComponent modalHandler={props.modalHandler} />;
};

export default observer(Cart);
