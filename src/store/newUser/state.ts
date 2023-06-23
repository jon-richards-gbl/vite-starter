export interface newUserState {
  email: string;
  password: string;
}

// initalState object for newUser slice
export function createInitialNewUserState(): newUserState {
  return {
    email: "",
    password: "",
  };
}
