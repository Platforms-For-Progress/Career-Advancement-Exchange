import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setDoc, doc, onSnapshot } from 'firebase/firestore';
import { auth, firestore } from '../../firebase'; // Import your firestore instance
import { setRequest } from '../../firebase/firestore';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(firestore, 'users', user.uid), async (docSnapshot) => {
        if (docSnapshot.exists()) {
          setUserInfo(docSnapshot.data());
        } else {
          await setDoc(doc(firestore, 'users', user.uid), {
            name: user.displayName,
            email: user.email,
            // admin_status: 0,
            role: 'user'
          });
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
