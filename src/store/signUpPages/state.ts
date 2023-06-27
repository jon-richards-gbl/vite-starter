/* signUpPages - state and initial empty state definitions */

export interface SignUpPage {
  index: number;
  isValid: boolean;
  errorMessages: Array<string>;
}

export interface SignUpPagesState {
  pages: Array<SignUpPage>;
}

export function createInitialSignUpPagesState(): SignUpPagesState {
  return {
    pages: new Array<SignUpPage>(),
  };
}
