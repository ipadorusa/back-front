import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const YearMonth = () => {
  const router = useRouter();
  const { year, month } = router.query;
  const [useDate, setUseDate] = useState(new Date(parseInt(year), parseInt(month) - 1, 1));

  useEffect(() => {
    setUseDate(new Date(parseInt(year), parseInt(month) - 1, 1));
  }, [year, month]);

  const prevMonth = () => {
    const newDate = new Date(useDate);
    newDate.setMonth(newDate.getMonth() - 1);
    const newYear = newDate.getFullYear();
    const newMonth = newDate.getMonth() + 1; // Months are zero-based

    router.push(`/[year]/[month]`, `/${newYear}/${newMonth}`);
  };

  const nextMonth = () => {
    const newDate = new Date(useDate);
    newDate.setMonth(newDate.getMonth() + 1);
    const newYear = newDate.getFullYear();
    const newMonth = newDate.getMonth() + 1; // Months are zero-based

    router.push(`/[year]/[month]`, `/${newYear}/${newMonth}`);
  };

  return (
    <div>
      <button type='button' onClick={prevMonth}>prev</button>
      <button type='button' onClick={nextMonth}>next</button>
      <p>{useDate.toLocaleDateString()}</p>
      <h1>Year: {year}</h1>
      <h2>Month: {month}</h2>
    </div>
  );
};

export default YearMonth;
