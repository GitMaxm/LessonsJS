import * as model from './../model.js'
import * as view from './edit.view.js'

function init(){
    const id = getRequestId()
    const request = model.getRequestById(id);
    console.log(request);
    
    view.renderRequest(request)
}

function getRequestId (){
    const params = new URLSearchParams(window.location.search)
    return params.get('id')
}

init()