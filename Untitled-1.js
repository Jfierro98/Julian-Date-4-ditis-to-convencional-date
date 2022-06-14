

function jd_to_cal(date) {
    // Convert a Julian date to a calendar date.
    // Remove spaces from the date.
    var date = date.trim(" ");

    // Get the actual year.
    var d = new Date().getFullYear();

    // Get the last digit of the year.
    var actual_year_digit = d.toString().slice(-1);

    // Get the last digit of the year.
    var year = parseInt(date.slice(-1))

    // Compare the last digit of the year with the actual year.
    // If the last digit of the year is greater than the actual year, the year is before the actual year.
    if (year <= actual_year_digit) { 
        var julian_year = "202" + year 
    }
    else { 
        var julian_year = "201" + year 
    }
    // generate year of the julian date
    var julian_date = new Date(julian_year)
    // get miliseconds of the julian date
    var julian_date_ml = julian_date.getTime()
    // get the  day of the julian date
    var day_number = parseInt(date.slice(0, 3))
    // multiply the day number by miliseconds of a day
    var mls_day = day_number * 86400000
    // add the miliseconds of the julian date to the miliseconds of the day
    julian_date_ml = julian_date_ml + mls_day
    // convert the miliseconds to a date
    var date_full = new Date(julian_date_ml)
    // get the day of the date
    return date_full

}
X = jd_to_cal("4107");
console.log(X);
