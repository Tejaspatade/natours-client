export type State = {
  user: {
    email: string;
    name: string;
    photo: string;
    role: string;
    __v: number;
    _id: string;
  } | null
  token: string;
};

export type Action = {
  type: "LOGIN_SUCCESS",
  payload: State
}