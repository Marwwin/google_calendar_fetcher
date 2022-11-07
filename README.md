# Google Calendar Fetcher

Creates a server with multiple endpoints for fetching Google calendars.

## Start

`npm start`

## Add Calendar

Create a .js file inside the calendars folder that exports a variable called config. Example:

```js
export const config = {
  name: "name",
  endpoint: "endpoint"
  url: "https://www.googleapis.com/calendar/v3/calendars/link_to_some@group.calendar.google.com/calendar_name?",
  parameters: {
    timeMin: getOffsetDate(-10),
    key: process.env.GKEY,
    orderby: "starttime",
    sortorder: "ascending",
    singleEvents: "true",
  },
};
```

If no endpoint is specified the endpoint will default to the name, if the name contain spaces they will be converted into underscores
