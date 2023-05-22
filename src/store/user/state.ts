export interface UserState {
  name: string;
}

export function createInitialUserState(): UserState {
  return {
    name: "",
  };
}
