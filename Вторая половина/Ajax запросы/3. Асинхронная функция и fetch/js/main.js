// ----------------------------------------------
// Ajax запросы через Fetch
// ----------------------------------------------
// Сайт с курсами валют: https://www.cbr-xml-daily.ru/
/*
fetch("https://www.cbr-xml-daily.ru/daily_json.js")
.then(function(result){
    return result.json();
}).then(function(jsonData){
    console.log("jsonData", jsonData);
    console.log(`Сегодня курс доллар к рублю равен ${jsonData.Valute.USD.Value}`);
    console.log(`Вчера он составил ${jsonData.Valute.USD.Previous}`);
}).catch(function(err){
    console.log(err);
})
*/
// ----------------------------------------------
// Ajax запросы через Fetch. Обернем это в функцию
// ----------------------------------------------
/*
function getCurrencyValue(code, name){
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
        .then(function (result) {
            return result.json();
        }).then(function (jsonData) {
            // console.log("jsonData", jsonData);
            const today = jsonData.Valute[code].Value;
            const yesterday = jsonData.Valute[code].Previous;

            console.log(`Сегодня курс ${name} к рублю равен ${today}`);
            console.log(`Вчера он составил ${yesterday}`);

            if (today > yesterday) {
                console.log("Наблюдается повышение.");
            } else if (today < yesterday ){
                console.log("Наблюдается понижение.");
            } else {
                console.log("Стабильность.");
            }
            console.log("------------------------");

        }).catch(function (err) {
            console.log(err);
        })
}

getCurrencyValue("USD", "доллар");
getCurrencyValue("EUR", "евро");
*/
// ----------------------------------------------
// Ajax запросы через Fetch. Напишем это на async функциях
// ----------------------------------------------


async function getCurrencyValue(code, name) {

    try {
        const result = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
        const jsonData = await result.json();

        const today = jsonData.Valute[code].Value;
        const yesterday = jsonData.Valute[code].Previous;

        console.log(`Сегодня курс ${name} к рублю равен ${today}`);
        console.log(`Вчера он составил ${yesterday}`);

        if (today > yesterday) {
            console.log("Наблюдается повышение.");
        } else if (today < yesterday) {
            console.log("Наблюдается понижение.");
        } else {
            console.log("Стабильность.");
        }
        console.log("------------------------");

    } catch(err) {
        console.log(err);
    }

}

getCurrencyValue("USD", "доллар");
getCurrencyValue("EUR", "евро");
