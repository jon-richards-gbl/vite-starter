/* State type and initial empty state definitions */
export interface newUserState {
  isValid: boolean;
  email: string;
  password: string;
  confirmPassword: string;
}

// initalState object for newUser slice
export function createInitialNewUserState(): newUserState {
  return {
    isValid: false,
    email: "",
    password: "",
    confirmPassword: "",
  };
}
