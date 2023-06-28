/* signUpPages - state and initial empty state definitions */

export interface SignUpPageInformation {
  index: number;
  isValid: boolean;
  errorMessages: Array<string>;
}

export interface SignUpPagesState {
  pages: Array<SignUpPageInformation>;
}

export function createInitialSignUpPagesState(): SignUpPagesState {
  return {
    pages: new Array<SignUpPageInformation>(),
  };
}
