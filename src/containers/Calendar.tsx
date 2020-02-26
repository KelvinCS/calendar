import React, { useState } from "react";
import styled from "styled-components";
import CalendarOfMonth from "./CalendarOfMonth";
import MonthSlider from "../components/MonthSlider";
import { addMonths, subMonths } from "date-fns";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <Container>
      <MonthSlider
        month={currentMonth}
        onPressNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
        onPressPrevMonth={() => setCurrentMonth(subMonths(currentMonth, 1))}
      />
      <CalendarOfMonth month={currentMonth} />
    </Container>
  );
};

export default Calendar;
