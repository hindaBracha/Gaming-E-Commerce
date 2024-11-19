let arrItems2 = loadData()//טעינת מסד הנתונים
let userBasket = [];//מערך של הסל של המישתמש הנוכחי
let div = document.getElementById("div1");//div1- קבלת האזור
let thisPerson = sessionStorage.getItem("this");//קבלת הקונה הנוכחי 
let userData = JSON.parse(localStorage.getItem(thisPerson));//   JSONוהמרתו לlocalStorage-קבלת מערך מה   
let pw = userData[0];//קבלת הסיסמה מהמקום הראשון במערך
let clr = userData[1];//קבלת הצבע מהמקום השני במערך
let DataBasket = userData[2];// מהמקום השלישי במערךJSONקבלת ה   
let Amount = document.getElementById("Amount")//   Amount-השטח 
Amount.textContent = "$" + f_Amount()//מביא את הכמות לתשלום + $ ומשיך לפונ' של הכמות

document.body.onload = f_create_table;//בעת טעינת הדף שיוך לפונ' שיוצרת טבלה 

function f_create_table() {
    //  פונ' שיוצרת טבלה שמכילה את המוצרים שבירצונו להזמין 
    if (DataBasket.length == 0)//אם הסל ריק
        div.innerHTML = "סל הקניות שלך ריק.. 🛒";//יציג את הכתוב
    else {
        div.innerHTML = "";//
        let tbl, tr, th, td;
        tbl = document.createElement("table");//יצירת טבלה
        tbl.setAttribute("border", 1);// מסגרת

        for (let i = 0; i < DataBasket.length; i++) {//עובר על המוצרים שבסל
            tr = document.createElement("tr");//יוצר עמודות
            th = document.createElement("th");//יוצר כותרת
            tr.appendChild(th);//שיוך של הכותרת לעמודה

            for (const key in DataBasket[i]) {//   עובר על המפתחות (שם.כמות.מחיר.צבע) 
                th = document.createElement("th");// יצירת כותרת 
                if (key == "price" || key == "qty")//ידפיס רק את המילה כמות וגם מחיר
                    th.textContent = key;//  key- יציג את מה שכתוב ב  
                tr.appendChild(th);//שיוך של הכותרת לעמודה
            }
            tbl.appendChild(tr);//שיוך של העמודה לטבלה

            tr = document.createElement("tr");//יתירת עמודה
            let b = document.createElement("input");//   input-יצירת משתנה מסוג  
            b.setAttribute("type", "button");//   button- הכפתור יהיה מסוג 
            b.setAttribute("value", "❌✖️");//הערך שיוצג בו
            b.setAttribute("data-key", i);//  iשמירת ה  
            b.addEventListener("click", f_remove);//בעת לחיצה ישלח לפונ' שמסירה

            td = document.createElement("td");//יצירת שורה
            td.appendChild(b);//  לשורהb-שיוך של 

            tr.appendChild(td);//שיוך של השורה לעמודה
            tbl.appendChild(tr);//שיוך של העמודה לטבלה
            for (const key in DataBasket[i]) {
                td = document.createElement("td");//יצירת שורה

                if (key === "color") {//אם מדובר בצבע
                    let b = document.createElement("input");//   input-יצירת משתנה מסוג
                    b.setAttribute("id", "bColor");// idיצירת 
                    b.setAttribute("type", "color");//יהיה מסוג צבע
                    b.addEventListener("blur", function () { f_cColor(i); });// iבעת שיחרור הפונ' ישלח לפונ' את ח 
                    b.setAttribute("value", DataBasket[i][key]);//הצבע שיוצג יהיה הצבע שהמשתמש בחר

                    td.appendChild(b);// שיוך של של הכפתור לשורה 
                } else if (key === "img") {//אם זה תמונה
                    let img = document.createElement("img");//תיצור לי מקום לתמונה
                    img.setAttribute("id", "bImg");//id יצירת 
                    img.src = DataBasket[i][key];//מביא את התמונה מהסל

                    td.appendChild(img);//שיוך של התמונה לשורה
                } else if (key === "qty") {
                    let qty = document.createElement("input");//   input-יצירת משתנה מסוג
                    qty.setAttribute("type", "button");//   button- הכפתור יהיה מסוג 
                    qty.setAttribute("value", DataBasket[i][key]);//הערך יהיה הכמות שנבחרה

                    let increas = document.createElement("input");//   input-יצירת משתנה מסוג
                    increas.setAttribute("type", "button");//   button- הכפתור יהיה מסוג 
                    increas.setAttribute("value", "+");//הערך יהיה + 
                    increas.addEventListener("click", function () { increaseQuantity(qty.value, i); });//בעת לחיצה שליחה לפונ' שמפחיתה מהכמות

                    let decreas = document.createElement("input");//   input-יצירת משתנה מסוג
                    decreas.setAttribute("type", "button");//   button- הכפתור יהיה מסוג 
                    decreas.setAttribute("value", "-");//הערך יהיה -
                    decreas.addEventListener("click", function () { decreaseQuantity(qty.value, i); });//בעת לחיצה שליחה לפונ' שמגדילה מהכמות


                    td.appendChild(increas);//משיך את הכפתור להגדלה
                    td.appendChild(qty);//שיוך הכמות הנוכחית
                    td.appendChild(decreas);//משיך את הכפתור להפחתה
                } else if (key == "price")
                    td.textContent = "$" + DataBasket[i][key];//מציג את המחיר + הסימון$ו

                else if(key=="name")
                    td.textContent = DataBasket[i][key];//יציג את הכתוב
                else if(key=="date")
                {
                    
                    let dateT=new Date();
                    dateT=dateT.getDate()
                    let date=parseInt(DataBasket[i][key])
                    let arrive=date+14
                    if(arrive<=30)
                    td.textContent=arrive-dateT
                    else
                    {
                       // let r=(30-date)-(dateT-date)
                       
                        td.textContent=arrive-(dateT-date)-date
                    }
                 
                }
                    tr.appendChild(td);//שיוך של השורה לעמודה
            }
        }



        div.appendChild(tbl);// divשיוך של הטבלה ל 
    }
}
function f_remove() {
    DataBasket.splice(event.srcElement.getAttribute("data-key"), 1);//   במקום שהבאתי ,תמחוק 1DataBasketתמחוק לי את מה שיש ב  
    localStorage.setItem(thisPerson, JSON.stringify([pw, clr, DataBasket]));//את הסיסמה צבע והסל המעודכן-למקום של הלקוח הנוכחי-נעשה שימוש בהמרהlocalStorageתשלח ל
    f_create_table();//תשלח לפונ' שיוצרת טבלה 
    Amount.textContent = "$" + f_Amount()//סינכרון של המחיר לתשלום

}

function f_cColor(i) {
    let col = event.srcElement;//תביא את הצבע שהלקוח בחר
    DataBasket[i].color = col.value;//תכניס לסל במקום של המוצר הנוחכי במקום של הצבע את הצבע שהלקוח בחר
    localStorage.setItem(thisPerson, JSON.stringify([pw, clr, DataBasket]));//את הסיסמה צבע והסל המעודכן-למקום של הלקוח הנוכחי-נעשה שימוש בהמרהlocalStorageתשלח ל
    f_create_table();//תשלח לפונ' שיוצרת טבלה 

}

function increaseQuantity(qty, i) {debugger
    //לפונ' שמגדילה את הכמות
    var currentQuantity = parseInt(qty);//   Intהמרה של הכמות הנוכחית ל  

    if (currentQuantity <9) {//הגבלת הכמות
        qty = currentQuantity + 1;//הוספה לכמות
        DataBasket[i].qty = qty;//הכנסת הכמות המעודכנת

        let price = DataBasket[i].price;//מקבל את המחיר
        price = price / (qty - 1);//המחיר שווה למחיר המקורי
        DataBasket[i].price = price * qty;//נכניס את המחיר העדכני
        localStorage.setItem(thisPerson, JSON.stringify([pw, clr, DataBasket]));//את הסיסמה צבע והסל המעודכן שכולל כמות נכונה-למקום של הלקוח הנוכחי-נעשה שימוש בהמרהlocalStorageתשלח ל
        f_create_table();//תשלח לפונ' שיוצרת טבלה 
        Amount.textContent = "$" + f_Amount()//סינכרון של המחיר לתשלום

    }
}

function decreaseQuantity(qty, i) {
    //לפונ' שמפחיתה מהכמות
    var currentQuantity = parseInt(qty);//   Intהמרה של הכמות הנוכחית ל  

    if (currentQuantity > 1) {//כול עוד גדול מ1
        qty = currentQuantity - 1;//תפחית לי בכמות 1
        DataBasket[i].qty = qty;//הכנסת הכמות המעודכנת

        let price = DataBasket[i].price;//מקבל את המחיר
        price = price / (qty + 1);//המחיר שווה למחיר המקורי
        DataBasket[i].price = price * qty;//נכניס את המחיר העדכני

        localStorage.setItem(thisPerson, JSON.stringify([pw, clr, DataBasket]));//את הסיסמה צבע והסל המעודכן שכולל כמות נכונה-למקום של הלקוח הנוכחי-נעשה שימוש בהמרהlocalStorageתשלח ל
        f_create_table();//תשלח לפונ' שיוצרת טבלה 
        Amount.textContent = "$" + f_Amount()//סינכרון של המחיר לתשלום
    }
}

function f_Amount() {
    //פונ' המחשבת את הסכום לתשלום
    let sum = 0
    for (let i = 0; i < DataBasket.length; i++) {//עובר על הסל
        sum = sum + parseInt(DataBasket[i].price)//   והוספתו לסכום הכוללIntהמרה של הסכום ל    
    }
    return sum//יחזיר את הסכום
}
