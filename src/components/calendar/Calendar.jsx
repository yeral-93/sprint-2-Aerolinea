import React, { useState } from 'react';
import { Box, Center, Grid } from '@chakra-ui/react';
import moment from 'moment';

const Calendar = ({ title, onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);

  const today = moment();
  const firstDayOfMonth = moment(currentMonth).startOf('month').format('d');
  const totalDaysInMonth = moment(currentMonth).daysInMonth();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const selectDate = (date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  const changeMonth = (event) => {
    const month = parseInt(event.target.value);
    setCurrentMonth(moment(currentMonth).month(month));
  };

  const changeYear = (event) => {
    const year = parseInt(event.target.value);
    setCurrentMonth(moment(currentMonth).year(year));
  };

  const isDisabled = (date) => {
    return date.isBefore(today, 'day');
  };

  return (
    <Box>
      <p>{title}</p>
      <Center mb={1}>
        <select value={currentMonth.month()} onChange={changeMonth}>
          {moment.months().map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>

        <select value={currentMonth.year()} onChange={changeYear}>
          {Array.from({ length: 10 }, (_, i) => moment().year() - 5 + i).map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </Center>

      <Grid templateColumns="repeat(7, 1fr)" gap="4px">
        {daysOfWeek.map((day) => (
          <Box key={day} textAlign="center" fontWeight="bold">
            {day}
          </Box>
        ))}

        {/* Empty boxes for the days of the previous month */}
        {Array(parseInt(firstDayOfMonth, 10))
          .fill('')
          .map((_, index) => (
            <Box key={`empty-${index}`} />
          ))}

        {/* Boxes for the days of the current month */}
        {Array(totalDaysInMonth)
          .fill('')
          .map((_, index) => {
            const date = index + 1;
            const currentDate = moment(currentMonth).date(date);
            const isCurrentDate = currentDate.isSame(today, 'day');
            const isSelectedDate =
              selectedDate && selectedDate.isSame(currentMonth, 'month') && date === selectedDate.date();
            const isDisabledDate = isDisabled(currentDate);

            return (
              <Box
                key={`day-${date}`}
                textAlign="center"
                p={2}
                cursor={isDisabledDate ? 'not-allowed' : 'pointer'}
                backgroundColor={isCurrentDate ? 'white' : isSelectedDate ? '#9b2577' : 'transparent'}
                color={isCurrentDate || isSelectedDate ? '#9b2577' : isDisabledDate
                ? 'gray' : 'black'}
                onClick={() => {
                  if (!isDisabledDate) {
                    selectDate(currentDate);
                  }
                }}
              >
                {date}
              </Box>
            );
          })}
      </Grid>

      <Center mt={4}>
        <h5>$ Precio más bajos</h5>
      </Center>
    </Box>
  );
};

export default Calendar


