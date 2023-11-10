import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const YearMonth = () => {
  const router = useRouter();
  const { year: routeYear, month: routeMonth } = router.query;
  const [useDate, setUseDate] = useState(new Date(parseInt(routeYear), parseInt(routeMonth) - 1, 1));

  useEffect(() => {
    setUseDate(new Date(parseInt(routeYear), parseInt(routeMonth) - 1, 1));
  }, [routeYear, routeMonth]);

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

  const goToToday = () => {
    const today = new Date();
    updateRoute(today);
  };

  const updateRoute = (newDate) => {
    const newYear = newDate.getFullYear();
    const newMonth = newDate.getMonth() + 1;
    router.push(`/[year]/[month]`, `/${newYear}/${newMonth}`);
  };

  return (
    <div>
      <button type='button' onClick={prevMonth}>prev</button>
      <button type='button' onClick={nextMonth}>next</button>
      <button type='button' onClick={goToToday}>Go to Today</button>
      <p>{useDate.toLocaleDateString()}</p>
      <h1>Year: {routeYear}</h1>
      <h2>Month: {routeMonth}</h2>
    </div>
  );
};

export default YearMonth;
