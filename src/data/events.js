import moment from "moment";

export const myEventsList = [
  {
    start: new Date("June 7, 2023 10:15:30"),
    end: new Date("June 7, 2023 12:45:30"),
    title: "Quaterly meeting",
    type: "Outpatient",
  },
  {
    start: new Date("May 20, 2023 10:15:30"),
    end: new Date("May 23, 2023 12:45:30"),
    title: "Time away",
    type: "Inpatient",
  },
  {
    start: new Date("May 15, 2023 10:15:30"),
    end: new Date("May 15, 2023 15:45:30"),
    title: "Team review",
    type: "Daycase",
  },
  {
    start: new Date("April 23, 2023 13:15:30"),
    end: new Date("April 23, 2023 14:45:30"),
    title: "Meeting with max",
    type: "Outpatient",
  },
  {
    start: new Date("April 19, 2023 17:15:30"),
    end: new Date("April 19, 2023 17:45:30"),
    title: "Tax review",
    type: "Outpatient",
  },
  {
    start: new Date("April 19, 2023 16:20:30"),
    end: new Date("April 19, 2023 16:45:30"),
    title: "Phone call",
    type: "Outpatient",
  },
  {
    start: new Date("April 19, 2023 12:30:30"),
    end: new Date("April 19, 2023 15:45:30"),
    title: "Brainstorming session",
    type: "Daycase",
  },
  {
    start: new Date("April 19, 2023 11:15:30"),
    end: new Date("April 19, 2023 11:45:30"),
    title: "Brunch",
    type: "Outpatient",
  },
  {
    start: new Date("April 19, 2023 09:15:30"),
    end: new Date("April 19, 2023 09:45:30"),
    title: "Yoga",
    type: "Outpatient",
  },
  {
    start: new Date("April 15, 2023 13:15:30"),
    end: new Date("April 15, 2023 16:45:30"),
    title: "Tax review",
    type: "Daycase",
  },
  {
    start: new Date("March 7, 2023 10:15:30"),
    end: new Date("March 7, 2023 12:45:30"),
    title: "Quaterly meeting",
    type: "Daycase",
  },
  {
    start: new Date("February 19, 2023 10:15:30"),
    end: new Date("February 21, 2023 12:45:30"),
    title: "Time away",
    type: "Inpatient",
  },
  {
    start: new Date("February 10, 2023 10:15:30"),
    end: new Date("February 10, 2023 12:45:30"),
    title: "Team review",
    type: "Outpatient",
  },
  {
    start: new Date("January 3, 2023 13:15:30"),
    end: new Date("January 3, 2023 14:45:30"),
    title: "Meeting with max",
    type: "Outpatient",
  },
  {
    start: new Date("December 16, 2022 17:15:30"),
    end: new Date("December 16, 2022 17:45:30"),
    title: "Tax review",
    type: "Outpatient",
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
