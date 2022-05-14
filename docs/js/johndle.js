/* These initial variables are figuring out what number day we're on, beginning at the start date of 25th April 2022. As dates are calculated in milliseconds since 1st January 1970, we have to divide by the number of milliseconds in a day.  */
let start = new jDate(2022, 03, 25),
    today = new jDate(),
    thisWeek = today.toWeek(),
    difference = today-start,
    msPerDay = 1000 * 60 * 60 * 24,
    dayNumber = Math.floor(difference / msPerDay) - 1; // the minus 1 is because I missed a day on Monday 9th May 2022 due to not bringing my laptop to Maggie & Tim's wedding


