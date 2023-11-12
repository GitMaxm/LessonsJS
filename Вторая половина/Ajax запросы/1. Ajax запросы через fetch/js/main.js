// ----------------------------------------------
// Ajax запросы через Fetch
// ----------------------------------------------
// Сайт с курсами валют: https://www.cbr-xml-daily.ru/

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
