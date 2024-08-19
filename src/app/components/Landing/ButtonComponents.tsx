'use client'; // For Next.js 13 and above

import React from 'react';

export default function ButtonComponent() {
  return (
    <main className='flex justify-center items-center mt-10'>
        <div className='buttonGroup'>
      <button className='leftButton'>Other questions?</button>
      <div className='divider'></div>
      <button className='rightButton'>Talk to a specialist</button>
    </div>
    </main>
  );
}