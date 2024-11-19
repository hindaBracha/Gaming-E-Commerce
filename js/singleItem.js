let arrItems2 = loadData()//טעינת מסד הנתונים
document.body.onload = f_loud//שיוך פונקציה לטעינת הדף

let title = document.getElementById("title")//שם המוצר
let price = document.getElementById("price")//מחיר
let img1 = document.getElementById("img1")//תונות מתחלפות
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let qty = document.getElementById("qty")//כמות לבחירה
let color = document.getElementById("color")//בחירת צבע
let basket = document.getElementById("basket")//הוספה לסל
basket.addEventListener("click", f_basket)//שיוך פונ' לכפתור סל
let i = sessionStorage.getItem("thisItem")//אינדקס המוצר הנוכחי
let thisPerson = sessionStorage.getItem("this")//שליפת המשתמש הנוכחי

function f_loud() {
    title.textContent = arrItems2[i].description//שליפת שם המוצר
    price.textContent = "מחיר $" + arrItems2[i].price//שליפת המחיר
    img1.src = arrItems2[i].img1//שליפת התמונות
    img2.src = arrItems2[i].img2
    img3.src = arrItems2[i].img3
}

//פונ' הוספה לסל
function f_basket() {
    let dateT=new Date();
    dateT=dateT.getDate()
    //שמירת נתוני המוצר לאחר שינוי במשתנה
    let thisItm = { "img": arrItems2[i].img1, "name": arrItems2[i].name, "qty": qty.value, "color": color.value, "price": arrItems2[i].price * qty.value,"date":dateT }
    let userData = JSON.parse(localStorage.getItem(thisPerson)); // שליפתנתוני המשתמש הנוכחי
    userData[2].push(thisItm); // הוספת הפריט למערך המצוי באיבר השני
    localStorage.setItem(thisPerson, JSON.stringify(userData));//-localStorage-שמירה ב
    massege()//הקפצת הערה
}
document.getElementById("increaseQuantity").addEventListener("click", increaseQuantity)//כפתור להעלאת כמות
document.getElementById("decreaseQuantity").addEventListener("click", decreaseQuantity)//כפתור להורדת כמות

function increaseQuantity() {//פונ' להעלאת כמות
    debugger
    let qty = document.getElementById("qty");//כמות המוצר
    let currentQuantity = parseInt(qty.value);//כמות המוצר הנוכחית
    if (arrItems2[i].qty>1) {//הגבלת הכמות
        arrItems2[i].qty=arrItems2[i].qty-1
        qty.value = currentQuantity + 1;//הוספת 1 לכמות
        
    }
}

function decreaseQuantity() {//פונקציה להורדת כמות
    let qty = document.getElementById("qty");//כמות הכמות
    let currentQuantity = parseInt(qty.value);//כמות המוצר הנוכחית
    if (currentQuantity > 1) {//חסם הכמות
        arrItems2[i].qty=arrItems2[i].qty+1
        qty.value = currentQuantity - 1;// 1 לכמות הוספת 
    }
}
var slideIndex = 0;

showSlides()
//פונ' להחלפת התמונות
function showSlides() {

    let i;
    let slides = document.getElementsByClassName("mySlides");//  mySlides-מקבל את התמונות עם השם 
    for (i = 0; i < slides.length; i++) {//עובר על מערך תמונות
        slides[i].style.display = "none";//עובר על כולם ולא מראה אותם
    }
    slideIndex++;//כול פעם שניכנס לפונקציה 
    if (slideIndex > slides.length) { slideIndex = 1 }//אם יצא מהמערך תביא את המיקום הראשון

    slides[slideIndex - 1].style.display = "block";//מראה את התמונה
    setTimeout(showSlides, 2000); // משנה תמונה כול 2 שניות
}
function massege() {//"פונקציה להצגת הערה-- "נוסף בהצלחה
    let snackbar = document.getElementById("snackbar");
    snackbar.className = "show";//מראה את הרצוי
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 3000);//מחזיק את הכיתוב ל3 שניות
}
