/*  
    - DOM stands for document object model, and is what allows our javascript to interact with our HTML and CSS.
    - the DOM specifies how browsers should create a model of an HTML poge and how javascript can access and update the content of that web page while it's in the browswer window.
        - DOM is an object-oriented representation of a web page, which can be modified with a scripting language like javascript
            -the DOM does two primary things:

            1. Makes a model of an HTML page
            2. Access and manipulate the HTML page

            ACCESSING:
                COMMON METHODS FOR ACCESSING A SINGLE ELEMENT:
                 - getElementById()
                 - querySelector() - finds single element ex: h1

                COMMON METHODS FOR ACCESSING MULTIPLE ELEMENTS:
                    - querySelectorALL()
                    - getElementsByClassName() - finds all h1 returns in an array
                    - getElementsByTagName() - 

            MANIPULATING:
                COMMON METHOD FOR WORKING WITH HTML CONTENT:
                    - innerHTML
                    - textContent
                    - createElement

                COMMON METHODS FOR WORKING WITH TAG ATTRIBUTES
                    - className / idName
                    - setAttribute()
                    - getAttribute()
*/

// 1. TEST
let x = 10;
console.log(x);

// 2. getELementById()
// document.getElementById('testParagraph').style.color = 'blue';

let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = 'blue';
console.log(testParagraph);

// 3. querySelectorAll () , innerText , innerHTML
console.log(document.querySelectorAll('p.sampleClass')); // querySelectorAll () returns a nodelist containing all elements that match the specified group of selectors.

// document.querySelectorAll('p.sampleClass')[0].innerText = 'our text has changed!'

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    // pTag.innerText = 'my text has changed using a forEach() method!'
// })       
// pTag.textContent = 'my text has changed using a forEach() method!'

pTag.innerHTML = '<li>my text has changed using a forEach() method</li>'
})
// or

// pTag.innerText(function(pTag) {
    // pTag.innerText = 'my text has changed using forEach() method!'
// })

/* 
    -innerText simply references or allows us to change the text of a specified element. WIll return only visible text in a node.
    -textContent does the same thing as innerText, but will return the FULL text of a node.
    -innerHTML allows to set text as well as HTML elements, which will be nexted inside of the current HTML element we're referencing.
*/

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);

// 4. addEventListener () - click
document.getElementById('clickThisButton').addEventListener('click', event => {
    // console.log('the button has been clicked');
    event.target.style.backgroundColor = 'red';
}) 


// let isColored = false;

// document.getElementById('click this button').addEventListener('click, listener')

// function listener(){
//     if(isColored) {
//         event.target.style.color = 'blue'; isColored = false;
//     } else {
//         event.target.style.color = 'red';
//         isColored = true;
//     }
// }



// function listener() {
//     console.log('the button has been clicked')
// }


// 5. addEventListener ()- keyup // getElementsByTagName()
// console.log(document.getElementsByTagName('p'));

document.getElementById('nameInput').addEventListener('keyup', event => {
    console.log(event.target.value)
    document.getElementsByTagName('p')[0].innerText ='SOMETHING CHANGED';

    if(event.target.value == '') {
        document.getElementsByTagName('p')[1].innerText = 'NOTHING HAS BEEN TYPE';

    } else { 
        document.getElementsByTagName('p')[1].innerText = `Everyone say hello to ${event.target.value}`
    }
})