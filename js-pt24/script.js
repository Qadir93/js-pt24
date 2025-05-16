 function updateDateTime() {
      const now = new Date();
      const datetime = now.toLocaleString();
      document.getElementById('datetime').textContent = datetime;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();





var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var currentDate = new Date();
var currentMonth = months[currentDate.getMonth()];

alert("Current month is: " + currentMonth);







var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var currentDate2 = new Date();
var currentDay = days[currentDate2.getDay()];

alert("Today is: " + currentDay);







var today = new Date().getDay();

if (today === 0 || today === 6) {
    alert("It's Fun day");
}







var today2 = new Date();
var date = today2.getDate();

if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}






let d = new Date();
minutesSinceEpoch = Math.floor(d.getTime() / 60000);

alert("Minutes since Jan 1, 1970: " + minutesSinceEpoch);







var now = new Date();
var hours = now.getHours();

if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}






var laterDate = new Date(2020, 11, 31);
console.log(laterDate);







var ramadanStart = new Date(2015, 5, 18);
var today3 = new Date();

var millisecondsPerDay = 24 * 60 * 60 * 1000;

var diff = today3 - ramadanStart;

var daysPassed = Math.floor(diff / millisecondsPerDay);

alert("Days passed since 1st Ramadan: " + daysPassed);








var customerName = "A Qadir Khan";
var units = 350;
var chargePerUnit = 15.75;
var latePaymentSurcharge = 250.00;


var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
var currentMonth = months[new Date().getMonth()];


var netAmount = units * chargePerUnit;
var grossAmount = netAmount + latePaymentSurcharge;


document.write("<h2>K-Electric Bill</h2>");
document.write("<b>Customer Name:</b> " + customerName + "<br>");
document.write("<b>Current Month:</b> " + currentMonth + "<br>");
document.write("<b>Number of Units:</b> " + units + "<br>");
document.write("<b>Charges per Unit:</b> " + chargePerUnit.toFixed(2) + "<br>");
document.write("<b>Net Amount Payable (within Due Date):</b> " + netAmount.toFixed(2) + "<br>");
document.write("<b>Late Payment Surcharge:</b> " + latePaymentSurcharge.toFixed(2) + "<br>");
document.write("<b>Gross Amount Payable (after Due Date):</b> " + grossAmount.toFixed(2) + "<br>");
