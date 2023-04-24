import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { DayTimeline } from "../../Timeline";
import moment from "moment";
import "./index.scss";
// import { format } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { myEventsList } from "../../../data/events";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import { getEvents, getFormattedDate } from "../../../utils/getEvents";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const eventType = {
  Outpatient: "blue",
  Inpatient: "orange",
  Daycase: "pink",
};
export const OtherCalendar = ({ title, data }) => {
  //setting up state variables for calendar date browsing
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateData, setSelectedDateData] = useState([]);
  const [view, setView] = useState("month");
  //for month navigation
  const [selectedMonth, setSelectedMonth] = useState({
    start: moment().startOf("month").format("YYYY-MM-DD hh:mm"),
    end: moment().endOf("month").format("YYYY-MM-DD hh:mm"),
  });
  //for other navigations
  const [selectedWeek, setSelectedWeek] = useState();
  const [selectedDay, setSelectedDay] = useState();

  //modal - for details of 1 event
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const [selectedEvent, setSelectedEvent] = useState();

  // console.log("view", selectedMonth, selectedWeek, selectedDay);
  //setting up the functions to handle the date(slot) selection
  const handleSelectDate = (event) => {
    const eventsForThisDay = getEvents(event);
    const formattedDate = getFormattedDate(event);
    setSelectedDate(formattedDate);
    setSelectedDateData(eventsForThisDay);
  };

  return (
    <>
      <Container
        className="myCustomHeight calendar-view"
        sx={{
          px: "40px",
          my: 2,
        }}
      >
        <div className="big-calendar">
          <Typography variant="h2" component="h2" gutterBottom align="center">
            {title}
          </Typography>

          <Calendar
            className="calendar"
            localizer={localizer}
            events={myEventsList}
            views={["month", "week", "day"]}
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 20, 0, 0)}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectSlot={handleSelectDate}
            onSelectEvent={(eventInfo) => {
              setSelectedEvent(eventInfo);
              handleModalOpen();
            }}
            onNavigate={(e) => console.log("triggered with onNavigate", e)}
            onRangeChange={(e) => {
              if (e.start) setSelectedMonth(e);
              if (e.length > 1) setSelectedWeek(e);
              if (e.length === 1) setSelectedDay(e);
            }}
            onView={(e) => setView(e)}
            selectable
            popup={true}
            eventPropGetter={(event) => {
              const backgroundColor = `${eventType[event.type]}`;
              return { style: { backgroundColor } };
            }}
          />
        </div>
        <div className="timeline">
          {selectedDateData && (
            <DayTimeline
              title="Day timeline for selected day"
              selectedDate={selectedDate}
              selectedDateData={selectedDateData}
            />
          )}
        </div>
      </Container>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedEvent ? selectedEvent.title : ""}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedEvent
              ? `${selectedEvent.start} - ${selectedEvent.end}`
              : ""}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
