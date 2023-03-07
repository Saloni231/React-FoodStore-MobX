import styles from "./ContactPageComponent.module.css";
import useInput from "../Hooks/use-input";
import {
  emailValidation,
  emptyFieldValidation,
  phoneValidation,
} from "../Pages/AuthenticationRules";

function ContactPageComponent(props) {
  const {
    input: name,
    isValid: nameIsValid,
    isFieldInvalid: nameFieldIsInvalid,
    inputChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    resetValues: nameReset,
  } = useInput(emptyFieldValidation);

  const {
    input: phone,
    isValid: phoneIsValid,
    isFieldInvalid: phoneFieldIsInvalid,
    inputChangeHandler: phoneChangeHandler,
    blurHandler: phoneBlurHandler,
    resetValues: phoneReset,
  } = useInput(phoneValidation);
  const {
    input: email,
    isValid: emailIsValid,
    isFieldInvalid: emailFieldIsInvalid,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetValues: emailReset,
  } = useInput(emailValidation);
  const {
    input: message,
    isValid: messageIsValid,
    isFieldInvalid: messageFieldIsInvalid,
    inputChangeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    resetValues: messageReset,
  } = useInput(emptyFieldValidation);

  let formIsValid = false;

  if (
    !nameFieldIsInvalid &&
    !phoneFieldIsInvalid &&
    !emailFieldIsInvalid &&
    !messageFieldIsInvalid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    nameBlurHandler();
    phoneBlurHandler();
    emailBlurHandler();
    messageBlurHandler();

    if (!nameIsValid || !phoneIsValid || !emailIsValid || !messageIsValid) {
      return;
    }

    props.saveContactUsForm({
      name,
      phone,
      email,
      message,
    });

    nameReset();
    phoneReset();
    emailReset();
    messageReset();
  };

  const nameClasses = nameFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const phoneClasses = phoneFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const emailClasses = emailFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const messageClasses = messageFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;

  return (
    <div className={styles.contact}>
      <form method="POST" className={styles.form} onSubmit={submitHandler}>
        <p className={nameClasses}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </p>
        {nameFieldIsInvalid && (
          <div className={styles.error}>Please Enter Name</div>
        )}
        <p className={phoneClasses}>
          <label htmlFor="phone">Contact Number</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={phone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
        </p>
        {phoneFieldIsInvalid && (
          <div className={styles.error}>Please Enter Valid Phone Number</div>
        )}
        <p className={emailClasses}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </p>
        {emailFieldIsInvalid && (
          <div className={styles.error}>Please Enter Valid Email</div>
        )}
        <p className={messageClasses}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={message}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
        </p>
        {messageFieldIsInvalid && (
          <div className={styles.error}>Please Enter Message</div>
        )}
        <div className={styles.actions}>
          <button disabled={!formIsValid}>Save</button>
        </div>
      </form>
      <div>
        <img
          src="https://www.thespruceeats.com/thmb/lmDJraajDXMJ9izsIfzNt79GrSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pizzasupremehoriz-1ccfa0b1732b4c128427d19ae02a422b.jpg"
          alt="pizza"
        />
      </div>
    </div>
  );
}

export default ContactPageComponent;
