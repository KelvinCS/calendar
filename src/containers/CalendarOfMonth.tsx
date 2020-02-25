import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  getDate
} from "date-fns";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

interface Props {
  month: Date;
}

const CalendarOfMonth = ({ month }: Props) => {
  const [days, setDays] = useState([] as Date[]);
  useEffect(() => {
    setDays(
      eachDayOfInterval({
        start: startOfWeek(startOfMonth(month)),
        end: endOfWeek(endOfMonth(month))
      })
    );
  }, [month]);

  return (
    <Container>
      {days.map(date => (
        <Day>{getDate(date)}</Day>
      ))}
    </Container>
  );
};

export default CalendarOfMonth;
