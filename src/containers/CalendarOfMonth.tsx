import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  getDate,
  differenceInCalendarMonths,
  format
} from "date-fns";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
`;

const Day = styled.div<{ currentMonth: boolean }>`
  border: 1px solid ${({ theme }) => theme.color.grayLight};
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  &:hover {
    background-color: ${({ theme }) => theme.color.grayLight};
  }
  color: ${({ theme, currentMonth }) =>
    currentMonth ? theme.color.blackLight : theme.color.gray};
  font-weight: 600;
`;

const DayOfReference = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

interface Props {
  month: Date;
}

const CalendarOfMonth = ({ month }: Props) => {
  const [days, setDays] = useState([] as Date[]);
  const [daysOfWeek, setDaysOfWeek] = useState([] as string[]);

  useEffect(() => {
    setDays(
      eachDayOfInterval({
        start: startOfWeek(startOfMonth(month)),
        end: endOfWeek(endOfMonth(month))
      })
    );
  }, [month]);

  useEffect(() => {
    setDaysOfWeek(
      eachDayOfInterval({
        start: startOfWeek(0),
        end: endOfWeek(0)
      }).map(date => format(date, "EEEEEE"))
    );
  }, []);

  return (
    <Container>
      {daysOfWeek.map((dayOfWeek, i) => (
        <DayOfReference key={i}>{dayOfWeek}</DayOfReference>
      ))}
      {days.map((date, i) => (
        <Day currentMonth={!differenceInCalendarMonths(month, date)} key={i}>
          {getDate(date)}
        </Day>
      ))}
    </Container>
  );
};

export default CalendarOfMonth;
