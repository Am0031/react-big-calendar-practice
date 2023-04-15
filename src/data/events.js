import moment from "moment";

export const myEventsList = [
  {
    start: new Date("June 7, 2023 10:15:30"),
    end: new Date("June 7, 2023 12:45:30"),
    title: "Quaterly meeting",
  },
  {
    start: new Date("May 20, 2023 10:15:30"),
    end: new Date("May 23, 2023 12:45:30"),
    title: "Time away",
  },
  {
    start: new Date("May 15, 2023 10:15:30"),
    end: new Date("May 15, 2023 12:45:30"),
    title: "Team review",
  },
  {
    start: new Date("April 23, 2023 13:15:30"),
    end: new Date("April 23, 2023 14:45:30"),
    title: "Meeting with max",
  },
  {
    start: new Date("April 19, 2023 17:15:30"),
    end: new Date("April 19, 2023 17:45:30"),
    title: "Tax review",
  },
  {
    start: new Date("April 15, 2023 13:15:30"),
    end: new Date("April 15, 2023 16:45:30"),
    title: "Tax review",
  },
  {
    start: new Date("March 7, 2023 10:15:30"),
    end: new Date("March 7, 2023 12:45:30"),
    title: "Quaterly meeting",
  },
  {
    start: new Date("February 19, 2023 10:15:30"),
    end: new Date("February 21, 2023 12:45:30"),
    title: "Time away",
  },
  {
    start: new Date("February 10, 2023 10:15:30"),
    end: new Date("February 10, 2023 12:45:30"),
    title: "Team review",
  },
  {
    start: new Date("January 3, 2023 13:15:30"),
    end: new Date("January 3, 2023 14:45:30"),
    title: "Meeting with max",
  },
  {
    start: new Date("December 16, 2022 17:15:30"),
    end: new Date("December 16, 2022 17:45:30"),
    title: "Tax review",
  },
];

export const dynamicEvents = [
  {
    start: new Date(),
    end: new Date(),
    title: "today's event",
  },
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
  {
    start: moment(new Date()).add(7, "days"),
    end: moment(new Date()).add(7, "days"),
    title: "visit 1",
  },
  {
    start: moment(new Date()).add(7, "days"),
    end: moment(new Date()).add(7, "days"),
    title: "visit 2",
  },
  {
    start: moment(new Date()).add(7, "days"),
    end: moment(new Date()).add(7, "days"),
    title: "visit 3",
  },
  {
    start: moment(new Date()).add(7, "days"),
    end: moment(new Date()).add(7, "days"),
    title: "visit 4",
  },
];