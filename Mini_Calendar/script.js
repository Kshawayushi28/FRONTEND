const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

date.innerHTML = (today.getDate() < 10?"0":"") + today.getDate();
day.innerHTML = today.getDayy();
month.innerHTML = today.getMonth();
year.innerHTML = today.getFullYear();