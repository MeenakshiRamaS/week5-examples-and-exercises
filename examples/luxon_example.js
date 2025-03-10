const { DateTime } = require("luxon");

/* Useful Functions (from API Documentation)

DateTime obj = {
                    year: number, 
                    month: number (1-12), 
                    day: number (1-31), 
                    hour: number (0-23), 
                    minute: number (0-59)
                }

.now() -- Create a DateTime for the current instant, in the system's time zone

.fromObject(obj) -- Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults

.toFormat(str) -- format date according to custom string input

.toLocaleString(DateTime.DATE_MED) -- "[Month] [Day #], [Year]" format

.toLocaleString(DateTime.DATETIME_FULL) -- "[Day] [Month] [Day #], [Year] at [Time] [Time Zone]" format

.plus(obj) -- adds parameters in obj to date

.minus(obj) -- subtracts parameters in obj to date

.setZone(str) -- converts time zone of DateTime obj
        multiple ways to format: 
        - "Region/City" such as "America/New York" or "Europe/Paris"
        - "code" such as "UTC-7" or "UTC-9"

Note: You can also compare dates!
dt1 > dt2
dt1 == dt2
...

*/

const today = DateTime.now();
        console.log(today.toLocaleString(DateTime.DATE_MED))

const birthTime = DateTime.fromObject({
        year: 2005,
        month: 8,
        day:14,
        hour: 17,
        minute: 50
});
console.log(birthTime.toLocaleString(DateTime.DATETIME_FULL));

const gavinTime = DateTime.fromObject({
        year: 2004,
        month: 6,
        day: 30
})
console.log(gavinTime > birthTime);

const newTime = birthTime.plus({
        year: 1,
        month: 2,
        day: 3,
        hour: 10
});
console.log(newTime.toLocaleString(DateTime.DATETIME_FULL));

const timeChange = newTime.setZone("Asia/Manilla")
console.log(timeChange.toLocaleString(DateTime.DATETIME_FULL))