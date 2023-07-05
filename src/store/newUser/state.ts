/* newUser - state type and initial empty state definitions */
export interface newUserState {
  email: string;
  password: string;
  confirmPassword: string;
}

// initalState object for newUser slice
export function createInitialNewUserState(): newUserState {
  return {
    email: "",
    password: "",
    confirmPassword: "",
  };
}
