# Google Calendar Fetcher

Can spawn one or more servers that can be pingged to fetch a Google Calendar.

## Start

`npm start`

## Add Calendar

Create a .js file inside the calendars folder that exports a variable called config. Example:

```js
export const config = {
  name: "Cornern",
  url: "https://www.googleapis.com/calendar/v3/calendars/link_to_some@group.calendar.google.com/calendar_name?",
  parameters: {
    timeMin: getOffsetDate(-10),
    key: process.env.GKEY,
    orderby: "starttime",
    sortorder: "ascending",
    singleEvents: "true",
  },
  port: 3000,
  hostname: "127.0.0.1", // optional value will default to DEFAULT_HOSTNAME
};
```

A default hostname can also be defined inside server.js
