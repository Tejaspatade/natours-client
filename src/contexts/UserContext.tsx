import { createContext, useReducer } from "react";

import { Action, State } from "../types/Auth.types";

// Reducer
const INITIAL_STATE = {
	user: null,
	token: "",
};

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return {
				...state,
				...action.payload,
			};

		default:
			throw new Error("Invalid Action!");
	}
};

// Context API
export const UserContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>({
	state: INITIAL_STATE,
	dispatch: () => {},
});

// Context Provider
const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
