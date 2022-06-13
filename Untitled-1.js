
function labelData(label, customer, model, item) {
    label = label.replace(" ", "");
    var cust_pn = "";
    var cust_pn_code = "";
    var module_build_date = ""
    var bw_pn = "";

    switch (customer) {
        case "FORD":
            if (item == "PRIMARY FLS" || item == "SECONDARY FLS") {
                if (label.includes("/")) {
                    var label_array = label.split("/");
                    var label_1 = label_array[0];
                    var label_2 = label_array[1];
                    if (parseInt(label_1) < 3659) {
                        module_build_date = jd_to_cal(label_1);
                        cust_pn = label_2;
                    }
                    else {
                        module_build_date = jd_to_cal(label_2);
                        cust_pn = label_1;
                    }
                }
            }
            else {
                cust_pn = label.slice(26, 39);
                cust_pn_code = label.slice(26, 30);
                module_build_date = label.slice(12, 14) + "/" + label.slice(14, 16) + "/" + label.slice(16, 18)
                bw_pn = label.slice(0, 8);
            }
            break;
        case "FCA":
            if (model == "HELLCAT") {

                var j_date = label.slice(3, 7)
                var number_date = parseInt(j_date.slice(1, 4))
                var date = jd_to_cal(number_date)
                cust_pn = "";
                cust_pn_code = "";
                bw_pn = "";
                module_build_date = date[1] + "/" + date[0] + "/" + ""
            }
            else {
                cust_pn = label.slice(0, 10);
                cust_pn_code = label.slice(0, 4);
                module_build_date = label.slice(23, 25) + "/" + label.slice(25, 27) + "/" + label.slice(27, 29)
                bw_pn = label.slice(11, 19);
            }
            break;
    }
    return [cust_pn, cust_pn_code, module_build_date, bw_pn];
}

function jd_to_cal(date) {
    var date = date.trim(" ");
    var d = new Date().getFullYear();
    var actual_year_digit = d.toString().slice(-1);
    var year = parseInt(date.slice(-1))
    if (year <= actual_year_digit) { var julian_year = "202" + year }
    else { var julian_year = "201" + year }
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