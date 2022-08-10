import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { DayTimeline } from "../Timeline";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
  {
    start: moment(new Date()).add(5, "days"),
    end: moment(new Date()).add(5, "days"),
    title: "basic event",
  },
  {
    start: moment(new Date()).add(5, "days"),
    end: moment(new Date()).add(5, "days"),
    title: "meeting",
  },
];

export const MyCalendar = ({ title }) => {
  //setting up state variables at calendar level
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateData, setSelectedDateData] = useState([]);

  //setting up the functions to handle the state change
  const handleSelectDate = (event) => {
    const { start, end } = event;
    const eventsForThisDay = myEventsList.filter(
      (item) => item.start >= start && item.end < end
    );

    const formattedDate = moment(start).format("DD-MM-YYYY");
    setSelectedDate(formattedDate);
    setSelectedDateData(eventsForThisDay);
  };

  return (
    <Container
      className="myCustomHeight"
      sx={{
        px: "40px",
        my: 2,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom align="center">
        {title}
      </Typography>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelectDate}
        onSelectEvent={(eventInfo) => {
          console.log(eventInfo);
        }}
        selectable
        popup={true}
      />
      {selectedDateData && (
        <DayTimeline
          title="Date of selected day"
          selectedDate={selectedDate}
          selectedDateData={selectedDateData}
        />
      )}
    </Container>
  );
};
