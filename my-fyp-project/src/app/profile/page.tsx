'use client';

import { useEffect, useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setName(data.name));
  }, []);

  return (
    <div className="p-6">
      <h1>Welcome, {name}!</h1>
    </div>
  );
}
