/* signUpPages - state and initial empty state definitions */

export interface SignUpPageInformation {
  id: string;
  isValid: boolean;
  messages: string[];
}

export interface SignUpPagesState {
  pages: SignUpPageInformation[];
}

export interface SignUpPageMessage {
  id: string;
  message: string;
}

export function createInitialSignUpPagesState(): SignUpPagesState {
  return {
    pages: [],
  };
}
