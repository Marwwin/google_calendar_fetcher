import { getOffsetDate } from "../utils/utils.js";

export const config = {
  name: "Name of the calendar server",
  url: "https://www.googleapis.com/calendar/v3/calendars/some_calendar_group.calendar.google.com/calendar_name?",
  parameters: {
    timeMin: getOffsetDate(-10),
    key: process.env.GKEY,
    orderby: "starttime",
    sortorder: "ascending",
    singleEvents: "true",
  },
  port: 3000,
  hostname: "0.0.0.0",
};
