export const emptyFieldValidation = (value) => {
  if (value.trim().length !== 0) {
    return true;
  }
  return false;
};

export const phoneValidation = (value) => {
  if (value.trim().length === 10) {
    return true;
  }
  return false;
};

export const emailValidation = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!emailRegex.test(value.trim())) {
    return false;
  }
  return true;
};

export const passwordValidation = (value) => {
  const passRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%&?._-]).{6,}$/;
  if (!passRegex.test(value.trim())) {
    return false;
  }
  return true;
};
