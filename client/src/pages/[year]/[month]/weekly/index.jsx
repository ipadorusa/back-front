// pages/[year]/[month]/weekly.jsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const WeeklyPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      const hashValue = window.location.hash;
      const match = hashValue.match(/#(\d+)/);
      const day = match ? match[1] : null;
      console.log('Day:', day);
    };

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Call the handler initially (when the component mounts)
    handleHashChange();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div>
      <h1>Weekly Page</h1>
      {/* Your component content */}
    </div>
  );
};

export default WeeklyPage;
