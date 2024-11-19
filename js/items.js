document.body.onload = f_load;//בעת טעינת הדף ישלח לפונקציה
let article = document.getElementById("itemsArea")//  itemsArea-קבלת האזור 

function f_load() {
  let arrItems = loadData()//קבלת המערך של המוצרים
  for (let i = 0; i < arrItems.length; i++) {//עובר על המערך של המוצרים
    let div = document.createElement("div")//  div-לכול מוצר נוצר 
    div.setAttribute("id", i)
    div.setAttribute("class", "item")
    let img = document.createElement("img")
    img.src = arrItems[i].img1//מביא את התמונה  
    img.addEventListener("click", function () { f_click(i); });
    div.appendChild(img)//   div-משייך את התמונה ל  
    let br = document.createElement("br")
    img.appendChild(br)
    let nav = document.createElement("nav")// navיצירת 
    nav.setAttribute("class", "text")
    nav.textContent = arrItems[i].name//קבלת המלל מהמערך
    nav.addEventListener("click", function () { f_click(i); });
    div.appendChild(nav) //  div-משייך ל 
    let prc = document.createElement("nav")
    prc.setAttribute("class", "text")
    prc.textContent = "$" + arrItems[i].price //קבלת המלל מהמערך+ סימן של מחיר
    prc.style.float = "left"//מביא את המחיר לצד שמאל
    div.appendChild(prc) // div-משייך ל 
    article.appendChild(div)// article-שייך אתל הdiv 
  }
}

function f_click(i) {
  sessionStorage.setItem("thisItem", i)//    את המוצר הנוכחיsessionStorage  תשלח ל  
  window.location.href = "../html/singleItem.html"  //פותח את עמוד מוצר יחיד
}