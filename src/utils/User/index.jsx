import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, firestore } from '../../firebase'; // Import your firestore instance

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(firestore, 'users', user.uid), (docSnapshot) => {
        if (docSnapshot.exists()) {
          setUserInfo(docSnapshot.data());
        }
      });

      return () => unsubscribe();
    } else {
      setUserInfo(null);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, userInfo, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
