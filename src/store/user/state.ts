export interface UserState {
  name: string;
  avatarUrl: string | null;
  isLoading: boolean;
}

export function createInitialUserState(): UserState {
  return {
    name: "",
    avatarUrl: null,
    isLoading: false,
  };
}
