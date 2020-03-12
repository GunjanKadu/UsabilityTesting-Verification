import React from 'react';
import { HowItWorks } from 'components/Home/Working/HowItWorks/HowItWorks';
import { BecomeAChefSection } from 'components/Home/Working/BecomeAChef/BecomeAChef';
export default function App() {
  return (
    <div className='container'>
      <HowItWorks />
      <hr />
      <BecomeAChefSection />
    </div>
  );
}
