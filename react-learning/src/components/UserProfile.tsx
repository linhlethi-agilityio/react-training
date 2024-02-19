import React, { useState, useEffect } from 'react';
import { IUser } from '../types/user';

const UserProfile = () => {
  const [fullName, setFullName] = useState<IUser>({
    name: 'name',
    familyName: 'family',
  });
  const [title, setTitle] = useState<string>('useEffect() in Hook');

  useEffect(() => {
    setTitle('render useEffect() in Hook');
    setFullName({ name: 'Linh', familyName: 'Le' });
  }, []);

  return (
    <div>
      <div>{title}</div>
      <div>{fullName.name}</div>
      <div>{fullName.familyName}</div>
    </div>
  );
};

export default UserProfile;
