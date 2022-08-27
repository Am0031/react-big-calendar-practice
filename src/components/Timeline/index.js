import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { TimelineEvent } from "./TimelineEvent";

export const DayTimeline = ({ title, selectedDate, selectedDateData }) => {
  return (
    <Container
      className="myCustomHeight"
      sx={{
        px: "40px",
        my: 2,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom align="center">
        {title} : {selectedDate}
      </Typography>
      <Timeline>
        {selectedDateData.map((event, i) => {
          return <TimelineEvent title={event.title} key={i} />;
        })}
      </Timeline>
    </Container>
  );
};
