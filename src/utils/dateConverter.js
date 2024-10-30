export const dateConverter = (isoDateTime) => {
  const dateTimeObj = new Date(isoDateTime);

  // Format hours, minutes, seconds
//   let formattedTime =
//     dateTimeObj.getHours().toString().padStart(2, "0") +
//     ":" +
//     dateTimeObj.getMinutes().toString().padStart(2, "0") +
//     ":" +
//     dateTimeObj.getSeconds().toString().padStart(2, "0");

  // Format date
  let formattedDate =
    dateTimeObj.getDate().toString().padStart(2, "0") +
    "." +
    (dateTimeObj.getMonth() + 1).toString().padStart(2, "0") +
    "." +
    dateTimeObj.getFullYear();

//   return formattedTime + " " + formattedDate;
    return formattedDate;
};
