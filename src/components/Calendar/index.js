import { Calendar, momentLocalizer } from "react-big-calendar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
        onSelectSlot={(slotInfo) => {
          const { start, end } = slotInfo;
          const eventsForThisDay = myEventsList.filter(
            (event) => event.start >= start && event.end < end
          );
          console.log(eventsForThisDay);
        }}
        onSelectEvent={(eventInfo) => {
          console.log(eventInfo);
        }}
        selectable
        popup={true}
      />
    </Container>
  );
};
