/** @type {import('next').NextConfig} */
const path = require('path');
const withTM = require("next-transpile-modules")([
    "@fullcalendar/common",
    "@babel/preset-react",
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/interaction",
    "@fullcalendar/react",
    "@fullcalendar/timegrid",
    "@fullcalendar/resource-timeline",
    "@fullcalendar/resource-daygrid",
    "@fullcalendar/resource-timegrid",
  ]);
module.exports = withTM({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        reactStrictMode: true,
    },
});
