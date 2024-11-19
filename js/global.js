document.body.onload = f_global();//בעת טעינת הדף ישלח לפונקציה

function f_global() {

  let username = sessionStorage.getItem("this");//קבלת הלקוח הנוכחי
  let colorUser = JSON.parse(localStorage.getItem(username))[1];//localStorage-קבלת הצבע והמרתו מה 
  let textElements = document.getElementsByClassName("text");//  textמקבלת את 
  debugger

  if (colorUser === "bluck") {
    document.body.style.backgroundImage = "url('../metirial/רקע שחור.jpg')";// ישים ברקע את הצבע השחור 
    for (let i = 0; i < textElements.length; i++) {//משנה את צבע הטקסט
      textElements[i].style.color = "#ffffffc8";
    }
  }
  else {
    document.body.style.backgroundImage = "url('../metirial/רקע לבן.jpg')";// ישים ברקע את הצבע הלבן 
    for (let i = 0; i < textElements.length; i++)
      textElements[i].style.color = "#000000c8";

  }
}
