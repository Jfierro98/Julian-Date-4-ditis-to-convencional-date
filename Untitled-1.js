

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
    
    var julian_date = new Date(julian_year)
    var julian_date_ml = julian_date.getTime()
    var day_number = parseInt(date.slice(0, 3))
    var mls_day = day_number * 86400000
    julian_date_ml = julian_date_ml + mls_day
    var date_full = new Date(julian_date_ml)
    return date_full

}
X = labelData("4107 / 3450", "FORD", "model", "PRIMARY FLS");
console.log(X);