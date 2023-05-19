export interface UserState {
  name: string;
  avatarSvg: string | null;
  isLoading: boolean;
}

export function createInitialUserState(): UserState {
  return {
    name: "",
    avatarSvg: null,
    isLoading: false,
  };
}
