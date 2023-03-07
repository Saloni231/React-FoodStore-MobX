import Card from "./UI/Card";
import styles from "./Authentication.module.css";
import useInput from "../Hooks/use-input";
import {
  emailValidation,
  passwordValidation,
} from "../Pages/AuthenticationRules";

function LoginComponent(props) {
  const {
    input: email,
    isValid: emailIsValid,
    isFieldInvalid: emailFieldIsInvalid,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetValues: emailReset,
  } = useInput(emailValidation);
  const {
    input: password,
    isValid: passwordIsValid,
    isFieldInvalid: passwordFieldIsInvalid,
    inputChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    resetValues: passwordReset,
  } = useInput(passwordValidation);

  let formIsValid = false;

  if (!emailFieldIsInvalid && !passwordFieldIsInvalid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    emailBlurHandler();
    passwordBlurHandler();

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    props.login({
      email: email.toLowerCase(),
      password,
    });

    emailReset();
    passwordReset();
  };

  const emailClasses = emailFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const passwordClasses = passwordFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;

  return (
    <Card style={styles.authentication}>
      <form method="POST" className={styles.form} onSubmit={submitHandler}>
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

        <p className={passwordClasses}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </p>
        {passwordFieldIsInvalid && (
          <div className={styles.error}>Please Enter Valid Password</div>
        )}
        <div className={styles.actions}>
          <button disabled={!formIsValid}>Save</button>
        </div>
      </form>
    </Card>
  );
}

export default LoginComponent;
