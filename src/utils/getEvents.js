import moment from "moment";
import { myEventsList } from "../data/events";

export const getEvents = (event) => {
  const start = new Date(event.start);
  const end = new Date(event.end);

  const eventsForThisDay = myEventsList
    .filter((item) => item.start >= start && item.end < end)
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.start);
    });
  return eventsForThisDay;
};

export const getFormattedDate = (event) => {
  return moment(event.start).format("DD-MM-YYYY");
};
