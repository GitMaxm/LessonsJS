import getRandomData from './form.test-data.js'
import {insertTestData} from './form.view.js'

function init() {
    const randomData = getRandomData();
    insertTestData(randomData);
}

init()