// --------------בדיקות תקינות---------------------------

let username = document.getElementById('nun')//שם המשתמש הנוכחי
let mypassword = document.getElementById("password1")//סיסמא 1
let mycheckpassword = document.getElementById("password2");//סיסמת אימות 
var selectedColor = '';//משתנה לקליטת הצבע הנבחר
//let color=document.querySelector('input[name="color"]:checked');
let color = document.getElementsByName("color")//צבע האתר הנבחר
username.addEventListener("blur", f_username);//בדיקת היוזר בזמן שיחרור הפקוס
mypassword.addEventListener("blur", f_checkpassword)//בדיקת הסיסמא בזמן שיחרור הפקוס 
mycheckpassword.addEventListener("blur", f_checkcheckpassword);//אימות הסיסמא בזמן שיחרור הפקוס
//---בדיקת שם משתמש
function f_username() {
    if (localStorage[username.value] !== undefined) {//localStorage-בודק שהשם לא נמצא ב
        document.getElementById('lblun').style.display = "block";//כתוב שתפוס
        username.focus()//אל תשחרר את הפוקוס           
    }
    else document.getElementById('lblun').style.display = "none";//לא יכתוב שתפוס 

}
//בודק תקינות סיסמא
function f_checkpassword() {
    let pass = mypassword.value
    let capitol = 0//אותיות גדולות
    let siman = 0//סימנים


    for (let i = 0; i < pass.length; i++) {//עובר על הסיסמא ובודק תקינות
        let ask = pass.charCodeAt(i)
        if (ask > 64 && ask < 91)//אם יש אות גדולה
            capitol = capitol + 1
        else if (ask >= 33 || ask <= 64)//אם זה תו
            siman = siman + 1
    }
    if (capitol < 1 || siman < 1 || pass.length < 8) {// הגבלה של כמות תווים תו אחד ואות גדולה אחת 
        document.getElementById("lable").className = ""//יציג את הכיתוב המתאים
        mypassword.focus()//אל תשחרר את הפוקוס           
    }
    if (capitol > 1 && siman > 1 && pass.length > 7) {//אם קיים את ההגבלה
        document.getElementById("lable").className = "my_label"
    }
}
//אימות סיסמא
function f_checkcheckpassword() {
    let pass1 = mypassword.value//ערך סיסמא 1
    let pass2 = mycheckpassword.value//ערך סיסמא שניה
    if (pass1 != pass2)
        mycheckpassword.focus()//עומד עלו ולא משחרר
    else {
        document.getElementById("btns").setAttribute("type", "submit");// כדי שיהיה אפשרות לשלוחsubmit-הופך את הכפתור ל

    }
}

let submut = document.getElementById("btns")
submut.addEventListener("click", f_submut);//בעת לחיצה ישלח לפונקציה של שליחה
let itm = []
function f_submut() {

    for (let i = 0; i < color.length; i++) {//עור על הצבעים שהכנסתי
        if (color[i].checked) {//checked- בודק מה הכנסנו  ומחזירה נכון או לא נכון אם את ה עומד על הצבע שהמשתמש בחר
            selectedColor = color[i].id;// שלו ומכניס אותו למשתנה ויוצא מהלולאהidאם כן מקבל את מה שיש ב
            break;
        }
    }
    localStorage.setItem(username.value, JSON.stringify([mypassword.value, selectedColor, itm]));
    //localStorageשליחת ושמירת המישתמש והפרטים שלו ל
    //JSON.stringify-JSONהמרה של הפרטים ל
    sessionStorage.setItem("this", username.value)//sessionStorage שליחת ושמירת המישתמש והפרטים שלו ל


}

// --------------כפתורים ---------------------------
//-------------העברה להתחברות-----------------------
let myBtnSign = document.getElementById("btnsine");
myBtnSign.addEventListener("click", f_harshma);//בעת לחיצה על הכפתור של הוספת משתמש חדש שולח  לפונקציה שעושה זאת
function f_harshma() {

    let element1 = document.querySelector(".clssign");
    let element2 = document.querySelector(".clslogin");
    element1.style.display = "block";//clssign-העמידה את ה
    element2.style.display = "none";//clslogin-הסתירה את מה שראה עד עכשיו
}
// --------------חזרה מהתחברות----------------------
let myBtnreturn = document.getElementById("return");
myBtnreturn.addEventListener("click", f_return);//בעת לחיצה יעבור לפונקציה
function f_return() {
    let element1 = document.querySelector(".clssign");
    let element2 = document.querySelector(".clslogin");
    element1.style.display = "none";//הסתירה את מה שראה עד עכשיו
    element2.style.display = "block";//clslogin-העמידה את 
}

// -------------כניסה ממשתמש קיים----------------------
//-------------------------------------------------------
let enter = document.getElementById("btnenter")//כפתור הכניסה
let un = document.getElementById("sm");//שם מישתמש קיים
let pw = document.getElementById("password");//סיסמה 
un.addEventListener("blur", f_checkenter1);//בעת שיחרור שיוך לפונ' בדיקת השם 
enter.addEventListener("click", f_enter)//שיוך לפונ' כניסה

function f_checkenter1() {
    if (localStorage.getItem(un.value) === null) {//  localStorage-אם השם לא נימצא ב  
        document.getElementById('lblsm').style.display = "block"; // מציג הודעה שלא נמצא שם משתמש
        un.focus(); // מבצע פוקוס על אלמנט שם המשתמש
    } else {
        document.getElementById('lblsm').style.display = "none"; // מסתיר הודעה כי נמצא שם משתמש
    }

}

function f_enter() {
    let userData = JSON.parse(localStorage.getItem(un.value));//פרטי המשתמש
    let password = userData[0];//סיסמא
    if (pw.value != password) {//אם הסיסמה לא שווה לסיסמה השניה
        document.getElementById('lblpw').style.display = "block";//  יעמיד את השגיאהblock  יציג הודעה מתאימה-הסיסמה לא נכונה
    }
    else if (pw.value != "" && un.value != "") {//אם הסיסמה לא ריקה וגם הוכנס שם
        document.getElementById('lblpw').style.display = "none";
        sessionStorage.setItem("this", un.value)//  את המשתמש הנוכחיsessionStorage  נשמור ב 
        window.location.href = "../html/items.html"//פתח את המעמוד של המוצרים
    }

}