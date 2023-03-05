import styles from "./ContactPageComponent.module.css";
import useInput from "../Hooks/use-input";

function ContactPageComponent(props) {
  const {
    input: name,
    isValid: nameIsValid,
    isFieldInvalid: nameFieldIsInvalid,
    inputChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    resetValues: nameReset,
  } = useInput((value) => value.trim().length !== 0);

  const {
    input: phone,
    isValid: phoneIsValid,
    isFieldInvalid: phoneFieldIsInvalid,
    inputChangeHandler: phoneChangeHandler,
    blurHandler: phoneBlurHandler,
    resetValues: phoneReset,
  } = useInput((value) => value.trim().length === 10);
  const {
    input: email,
    isValid: emailIsValid,
    isFieldInvalid: emailFieldIsInvalid,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetValues: emailReset,
  } = useInput((value) => value.includes("@"));
  const {
    input: message,
    isValid: messageIsValid,
    isFieldInvalid: messageFieldIsInvalid,
    inputChangeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    resetValues: messageReset,
  } = useInput((value) => value.trim().length !== 0);

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
            required
          />
        </p>
        {nameFieldIsInvalid && (
          <p className={styles.error}>Please Enter name</p>
        )}
        <p className={phoneClasses}>
          <label htmlFor="phone">Contact No.</label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={phone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            required
          />
        </p>
        {phoneFieldIsInvalid && (
          <p className={styles.error}>Please Enter Valid Phone Number</p>
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
            required
          />
        </p>
        {emailFieldIsInvalid && (
          <p className={styles.error}>Please Enter Valid Email</p>
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
            required
          />
        </p>
        {messageFieldIsInvalid && (
          <p className={styles.error}>Please Enter Message</p>
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
