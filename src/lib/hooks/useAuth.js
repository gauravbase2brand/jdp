import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, isLoading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    // Check for token in localStorage on mount
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      dispatch(setCredentials({
        token: storedToken,
        user: JSON.parse(storedUser),
      }));
    }
  }, [dispatch]);

  return {
    user,
    token,
    isLoading,
    isAuthenticated,
    error,
  };
};