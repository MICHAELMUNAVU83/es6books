const { luxon } = window;
export default function displayDate() {
  const Time = luxon.DateTime.now();
  const actualTime = Time.toLocaleString(luxon.DateTime.DATETIME_MED);
  document.getElementById('date-time').innerHTML = actualTime;
}
