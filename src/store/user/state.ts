import { AsyncData } from "../../types/store";

export interface UserState {
  name: string;
  avatarSvg: AsyncData<string>;
}

export function createInitialUserState(): UserState {
  return {
    name: "",
    avatarSvg: {
      data: "",
      isLoading: false,
      error: null,
    },
  };
}
