let data ={
    "isac": 
        {
            "events": {
                "event-1": {
                    "name": "broll",
                    "content": "Broll Lorem import {  } from"
                },
                "event-2": {
                    "name": "photography",
                    "content": "Broll is done purely  } from"
                },

                "event-3": {
                    "name": "camera",
                    "content": "llc if else done purely  } from"

                }
            }
        },
}

let squares = document.getElementsByClassName('square')

function callEvent(element,club){

    let event1 = document.getElementById('event-1')
    let event2 = document.getElementById('event-2')
    let event3 = document.getElementById('event-3')
    event1.children[0].innerHTML = (data[club]['events']['event-1']['name'])
    event2.children[0].innerHTML = (data[club]['events']['event-2']['name'])
    event3.children[0].innerHTML=(data[club]['events']['event-3']['name'])
    element.children[0].children[1].children[0].innerHTML = (data[club]['events']['event-1']['content'])
    
    let events = element.children[1].children[0].children
    for (let i = 0; i < events.length; i++) {
        const newElement = events[i];
        newElement.addEventListener('click',()=>{
            if(newElement.classList.contains('event-1')){
                element.children[0].children[1].children[0].innerHTML = (data[club]['events']['event-1']['content'])
            }
            if (newElement.classList.contains('event-2')) {
                element.children[0].children[1].children[0].innerHTML = (data[club]['events']['event-2']['content'])
            } 
            if (newElement.classList.contains('event-3')) {
                element.children[0].children[1].children[0].innerHTML = (data[club]['events']['event-3']['content'])
            }
        })      
    }
}

function hideAll(){
    let backs = document.getElementsByClassName('hiddenjs')
    for (let index = 0; index < backs.length; index++) {
        const element = backs[index];
        element.style.visibility = 'hidden';
    }
}

function showdiv(club){
    let hiddens = document.getElementsByClassName('hiddenjs')
    for (let index = 0; index < hiddens.length; index++) {
        const element = hiddens[index];
            document.getElementById('squares').style.position = 'absolute'
            element.style.visibility = 'visible';
            callEvent(element,club)
    }
}

function expand(element){
    if(element.classList.contains('isac')){
        showdiv('isac')
    }
}

for (let index = 0; index < squares.length; index++) {
    const element = squares[index];
    element.addEventListener('click',()=>{
        expand(element)
    })   
}