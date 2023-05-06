import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../../firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
