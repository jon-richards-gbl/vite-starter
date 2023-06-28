/* signUpPages - state and initial empty state definitions */

export interface SignUpPageInformation {
  index: number;
  isValid: boolean;
  errorMessages: string[];
}

export interface SignUpPagesState {
  pages: SignUpPageInformation[];
}

export function createInitialSignUpPagesState(): SignUpPagesState {
  return {
    pages: [],
  };
}
