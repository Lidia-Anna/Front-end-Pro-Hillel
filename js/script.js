'use strict';

const year = prompt("Введіть свій рік народження");
if(year === null) {
    alert("Шкода, що Ви не захотіли ввести свою дату народження");
} else {
    const city = prompt("Введіть місто в якому ви проживаєте");
    if(city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто проживання");
    } else {
        const sportType = prompt("Введіть улюблений вид спорту");
        if(sportType === null){
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту")
        }
        else {
            const currentYear = new Date().getFullYear();
            const age = currentYear - Number(year);

            let cityMessage;
            switch (city.toLocaleLowerCase()){
                case "київ":
                    cityMessage = "Ви проживаєте у столиці України";
                    break;
                case "вашингтон":
                    cityMessage = "Ви проживаєте у столиці США";
                    break;
                case "лондон":
                    cityMessage = "Ви проживаєте у столиці Великобританії";
                    break;
                default:
                    cityMessage = "Ви проживаєте у місті " + city + ".";
            }

            let sportMessage;
            switch (sportType.toLocaleLowerCase()){
                case "футбол":
                    sportMessage = "Круто! Хочете стати як Ліонель Мессі?";
                    break;
                case "бокс":
                    sportMessage = "Круто! Хочете стати як Олександр Усик";
                    break;
                case "теніс":
                    sportMessage = "Круто! Хочете стати як Новак Джокович";
                    break;
                default:
                    sportMessage = "Ваш улюблений вид спорту -" + sportType + ".";
            }

            alert(`Вам ${age} років
${cityMessage}
${sportMessage}`);
        }
    }
}