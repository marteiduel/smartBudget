export function getTodayDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
  
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }