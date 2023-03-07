import Card from "./UI/Card";
import styles from "./Authentication.module.css";
import useInput from "../Hooks/use-input";
import {
  emailValidation,
  emptyFieldValidation,
  passwordValidation,
  phoneValidation,
} from "../Pages/AuthenticationRules";

function RegisterComponent(props) {
  const {
    input: fname,
    isValid: fnameIsValid,
    isFieldInvalid: fnameFieldIsInvalid,
    inputChangeHandler: fnameChangeHandler,
    blurHandler: fnameBlurHandler,
    resetValues: fnameReset,
  } = useInput(emptyFieldValidation);
  const {
    input: lname,
    isValid: lnameIsValid,
    isFieldInvalid: lnameFieldIsInvalid,
    inputChangeHandler: lnameChangeHandler,
    blurHandler: lnameBlurHandler,
    resetValues: lnameReset,
  } = useInput(emptyFieldValidation);
  const {
    input: gender,
    isValid: genderIsValid,
    isFieldInvalid: genderFieldIsInvalid,
    inputChangeHandler: genderChangeHandler,
    blurHandler: genderBlurHandler,
    resetValues: genderReset,
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
    input: password,
    isValid: passwordIsValid,
    isFieldInvalid: passwordFieldIsInvalid,
    inputChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    resetValues: passwordReset,
  } = useInput(passwordValidation);

  let formIsValid = false;

  if (
    !fnameFieldIsInvalid &&
    !lnameFieldIsInvalid &&
    !genderFieldIsInvalid &&
    !phoneFieldIsInvalid &&
    !emailFieldIsInvalid &&
    !passwordFieldIsInvalid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    fnameBlurHandler();
    lnameBlurHandler();
    genderBlurHandler();
    phoneBlurHandler();
    emailBlurHandler();
    passwordBlurHandler();

    if (
      !fnameIsValid ||
      !lnameIsValid ||
      !genderIsValid ||
      !phoneIsValid ||
      !emailIsValid ||
      !passwordIsValid
    ) {
      return;
    }

    props.register({
      fname,
      lname,
      gender,
      phone,
      email: email.toLowerCase(),
      password,
    });

    fnameReset();
    lnameReset();
    genderReset();
    phoneReset();
    emailReset();
    passwordReset();
  };

  const fnameClasses = fnameFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const lnameClasses = lnameFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const genderClasses = genderFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const phoneClasses = phoneFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const emailClasses = emailFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;
  const passwordClasses = passwordFieldIsInvalid
    ? `${styles.control} ${styles.invalid}`
    : styles.control;

  return (
    <Card style={styles.authentication}>
      <form method="POST" className={styles.form} onSubmit={submitHandler}>
        <p className={fnameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            type="text"
            name="fname"
            value={fname}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />
        </p>
        {fnameFieldIsInvalid && (
          <p className={styles.error}>Please Enter First Name</p>
        )}
        <p className={lnameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            type="text"
            name="lname"
            value={lname}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
        </p>
        {lnameFieldIsInvalid && (
          <p className={styles.error}>Please Enter Last Name</p>
        )}
        <p className={genderClasses}>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={genderChangeHandler}
            onBlur={genderBlurHandler}
          >
            <option value="">Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </p>
        {genderFieldIsInvalid && (
          <p className={styles.error}>Please Select Gender</p>
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
          <p className={styles.error}>Please Enter Valid Contact Number</p>
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
          <p className={styles.error}>Please Enter Valid Email</p>
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
          <p className={styles.error}>Please Enter Valid Password</p>
        )}
        <div className={styles.actions}>
          <button disabled={!formIsValid}>Save</button>
        </div>
      </form>
    </Card>
  );
}

export default RegisterComponent;
