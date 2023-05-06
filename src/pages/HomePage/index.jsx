import { useState } from 'react';
import { auth } from '../../firebase';

const Home = () => {
  return (
    <div>
      <h1>Welcome, {auth.currentUser?.displayName}</h1>
    </div>
  );
};

export default Home;
