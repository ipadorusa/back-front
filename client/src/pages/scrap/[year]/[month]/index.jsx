import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';

const ScrapPage = () => {
  const router = useRouter();
  const { year: routeYear, month: routeMonth } = router.query;

  // Initialize useDate with the current date
  const [useDate, setUseDate] = useState(new Date(parseInt(routeYear), parseInt(routeMonth) - 1, 1));

  useEffect(() => {
    setUseDate(new Date(parseInt(routeYear), parseInt(routeMonth) - 1, 1));
  }, [routeYear, routeMonth]);

  const updateRoute = (newDate) => {
    const newYear = newDate.getFullYear();
    const newMonth = newDate.getMonth() + 1; // Months are zero-based

    router.push(`/scrap/[year]/[month]`, `/scrap/${newYear}/${newMonth}`);
  };

  const prevMonth = () => {
    const newDate = new Date(useDate);
    newDate.setMonth(newDate.getMonth() - 1);
    updateRoute(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(useDate);
    newDate.setMonth(newDate.getMonth() + 1);
    updateRoute(newDate);
  };

  // Rest of your component logic

  return (
    <div>
      <button type='button' onClick={prevMonth}>prev</button>
      <button type='button' onClick={nextMonth}>next</button>
      <p>{useDate.toLocaleDateString()}</p>
      <h1>Year: {routeYear}</h1>
      <h2>Month: {routeMonth}</h2>
      {/* Your component content */}
    </div>
  );
};

export default ScrapPage;
