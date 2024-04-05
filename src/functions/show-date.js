const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ShowDate(dateSelected, service) {
  if (dateSelected.serviceId == service.id) {
    const date = new Date(dateSelected.date);
    const day = date.getDate();
    const month = months[date.getMonth()];

    const formattedDate = `${month} ${day}`;

    return formattedDate;
  }
}
