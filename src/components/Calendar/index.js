import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { DayTimeline } from "../Timeline";
import moment from "moment";
// import { format } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { myEventsList } from "../../data/events";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";

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

export const MyCalendar = ({ title, data }) => {
  //setting up state variables for calendar date browsing
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDateData, setSelectedDateData] = useState([]);
  //for month navigation
  const [selectedMonth, setSelectedMonth] = useState({
    start: moment().startOf("month").format("YYYY-MM-DD hh:mm"),
    end: moment().endOf("month").format("YYYY-MM-DD hh:mm"),
  });

  //modal - for details of 1 event
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const [selectedEvent, setSelectedEvent] = useState();

  //move range to new month
  const getRangeData = () => {
    const filteredData = myEventsList.filter(
      (item) =>
        moment(item.start) > moment(selectedMonth.start) &&
        moment(item.end) < moment(selectedMonth.end)
    );
    return filteredData;
  };

  //setting up the functions to handle the date(slot) selection
  const handleSelectDate = (event) => {
    const start = new Date(event.start);
    const end = new Date(event.end);

    const eventsForThisDay = myEventsList.filter(
      (item) => item.start >= start && item.end < end
    );

    const formattedDate = moment(start).format("DD-MM-YYYY");
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
          <Typography variant="h5" component="h2" gutterBottom align="center">
            {title}
          </Typography>
          <Calendar
            localizer={localizer}
            events={getRangeData(selectedMonth)}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={["month"]}
            onSelectSlot={handleSelectDate}
            onSelectEvent={(eventInfo) => {
              setSelectedEvent(eventInfo);
              handleModalOpen();
            }}
            onNavigate={(e) => console.log("triggered with onNavigate", e)}
            onRangeChange={(e) => setSelectedMonth(e)}
            onView={(e) => console.log("triggered with onView", e)}
            selectable
            popup={true}
            eventPropGetter={(event) => {
              const backgroundColor =
                moment(new Date(event.start)).date() !==
                moment(new Date(event.end)).date()
                  ? "orange"
                  : "blue";
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
