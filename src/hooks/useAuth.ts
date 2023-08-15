import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

// Custom hook to consume context from provider
export const useAuth = () => {
  const { state, dispatch } = useContext(UserContext);
  const isLoggedIn = state.token !== ""

  return { ...state, isLoggedIn, dispatch };
};