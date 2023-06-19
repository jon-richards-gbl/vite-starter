export interface FormState {
  name: string;
  weight: string;
  time: string;
  dropdown: string;
  calsBun: number | string;
}

export function createInitialUFormState(): FormState {
  return {
    name: "",
    weight: "",
    time: "",
    dropdown: "fast",
    calsBun: "",
  };
}
