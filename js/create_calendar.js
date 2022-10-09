const Calendar = document.querySelector('.show_calendar');
const month_picker = document.querySelector('.month_picker');
const month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function isleapyear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 === 0;
}
getFebDays = (year) => {
  return isleapyear(year) ? 29 : 28;
}
generatedCalendar = (month, year) => {
  const calendar_days = document.querySelector('.calendar_days');
  const calendar_header_year = document.querySelector('.year');
  const dayOfMonths = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  calendar_days.innerHTML = '';
  let currDate = new Date();
  if (!month) month = currDate.getMonth();
  if (!year) year = currDate.getFullYear();
  const cur_month = `${month_name[month]}`;
  month_picker.innerHTML = cur_month;
  calendar_header_year.innerHTML = year;
  //get first day of month
  const first_day = new Date(year, month, 0);
  for (var i = 0; i < dayOfMonths[month] + first_day.getDay(); i++) {
    let day = document.createElement('div');
    if (i >= first_day.getDay()) {
      day.innerHTML = i - first_day.getDay() + 1;
      day.innerHTML += `<span></span>
                      <span></span>
                      <span></span>
                      <span></span>`;
      if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
        day.classList.add('curr-date');
      }
    }
    calendar_days.appendChild(day);
  }
}
const month_list = document.querySelector('.month_list');
month_name.forEach((e, index) => {
  let month = document.createElement('div');
  month.innerHTML = `<div data-month="${index}">${e}</div>`;
  month.querySelector('div').addEventListener("click", () => {
    month_list.classList.remove('show');
    cur_month.value = index;
    generatedCalendar(index, cur_year.value);
  })
  month_list.appendChild(month);
})
month_picker.addEventListener("click", () => {
  month_list.classList.add('show');
})
const curr_Date = new Date();
let cur_month = { value: curr_Date.getMonth() };
let cur_year = { value: curr_Date.getFullYear() };
generatedCalendar(cur_month.value, cur_year.value);
document.querySelector('.prev').addEventListener("click", () => {
  cur_year.value--;
  generatedCalendar(cur_month.value, cur_year.value);
})
document.querySelector('.next').addEventListener("click", () => {
  cur_year.value++;
  generatedCalendar(cur_month.value, cur_year.value);
})