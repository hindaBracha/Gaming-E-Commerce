let arrItems = []//מערך של כול המוצרים



function loadData() {
    //פונקציה המחזירה את המערך של כול המוצרים
    arrItems = [{ id: 0, name: " אוזניות לד", description: "אוזניות לד מאירות 500 וואט", price: 150, qty: 10, img1: "../metirial/אוזניות.png", img2: "../metirial/אוזניות 2.png", img3: "../metirial/אוזניות 3.png" },
    { id: 1, name: "אוזניות בלוטות ", description: "אוזניות בלוטות מיני AGSH", price: 200, qty: 15, img1: "../metirial/אזניות קטנות.png", img2: "../metirial/אזניות קטנות.png", img3: "../metirial/אזניות קטנות.png" },
    { id: 2, name: "רחפן צילום מקצועי", description: "רחפן צילום מקצועי 30 שעות בטריה RMR", price: 5567, qty: 10, img1: "../metirial/רחפן צילום.jpg", img2: "../metirial/רחפן צילום.jpg", img3: "../metirial/רחפן צילום.jpg" },
    { id: 3, name: "משקפת תלת מימד", description: "משקפת תלת מימד ללא משתקים עם תנועה חלקה", price: 540, qty: 15, img1: "../metirial/משקפת תלת מימד.jpg", img2: "../metirial/משקפת תלת מימד.jpg", img3: "../metirial/משקפת תלת מימד.jpg" },
    { id: 4, name: "משקפי מציאות מדומה", description: "משקפי מציאות מדומה זכוכית קומרה רדידית", price: 234, qty: 15, img1: "../metirial/משקפי מציאות מדומה.jpg", img2: "../metirial/משקפי מציאות מדומה.jpg", img3: "../metirial/משקפי מציאות מדומה.jpg" },
    { id: 5, name: "משקפי בלוטות", description: "משקפי בלוטות כפתור חיצוני שמיעה 45OY", price: 120, qty: 15, img1: "../metirial/משקפי בלוטות.png", img2: "../metirial/משקפי בלוטות2.png", img3: "../metirial/משקפי בלוטות.png" },
    { id: 6, name: "שלטים", description: "שלטים למציאות מדומה תנועה חלקה עם שרות WIFI", price: 20, qty: 15, img1: "../metirial/שלטים.jpg", img2: "../metirial/שלטים.jpg", img3: "../metirial/שלטים.jpg" },

    ]
    return arrItems
}
function f_reastart(arrItems2){
    arrItems=arrItems2
}
