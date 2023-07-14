/* signUpPages - state and initial empty state definitions */

export interface ValidationMessage {
  isError: boolean;
  text: string;
}

export interface SignUpPageInformation {
  id: string;
  isValid: boolean;
  messages: ValidationMessage[];
}

export interface SignUpPagesState {
  pages: SignUpPageInformation[];
}

export function createInitialSignUpPagesState(): SignUpPagesState {
  return {
    pages: [],
  };
}
