import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoDisplay = styled.div`
  padding: 20px 0;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonChangeMonth = styled.button`
  color: ${({ theme }) => theme.color.blackLight};
  font-size: 14px;
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
  &:focus {
    outline: none;
  }
`;

const MonthName = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
`;

const Year = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: 14px;
`;

interface Props {
  month: Date;
  onPressNextMonth: () => void;
  onPressPrevMonth: () => void;
}

const MonthSlider = ({ month, onPressNextMonth, onPressPrevMonth }: Props) => {
  const [nameOfMonth, setNameOfMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setNameOfMonth(format(month, "MMMM"));
    setYear(format(month, "Y"));
  }, [month]);

  return (
    <Container>
      <ButtonChangeMonth onClick={onPressPrevMonth}>Anterior</ButtonChangeMonth>
      <InfoDisplay>
        <MonthName>{nameOfMonth}</MonthName>
        <Year>{year}</Year>
      </InfoDisplay>
      <ButtonChangeMonth onClick={onPressNextMonth}>Próximo</ButtonChangeMonth>
    </Container>
  );
};

export default MonthSlider;
