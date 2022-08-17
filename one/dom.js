const main = document.getElementById('main-container');

//section four creat.
const sectionFour = document.createElement('section');

//h1 in section four creat
const h1Four = document.createElement('h1');
h1Four.innerText= 'section four';

//paragraph in section four creat
const paragraphFour = document.createElement('p');
paragraphFour.innerText = 'This is a paragraph from number four section.';

//ul in section four creat
const ulFour = document.createElement('ul');

//li one inside ul at section four creat and apply
const liOne = document.createElement('li');
liOne.innerText= 'item one';
ulFour.appendChild(liOne);

//li two inside ul at section four creat and apply
const liTwo = document.createElement('li');
liTwo.innerText= 'item two';
ulFour.appendChild(liTwo);

//li three inside ul at section four creat and apply
const liThree = document.createElement('li');
liThree.innerText= 'item three';
ulFour.appendChild(liThree);

main.appendChild(sectionFour); //apply section four
sectionFour.appendChild(h1Four); // apply h1 in section four
sectionFour.appendChild(paragraphFour);// apply paragraph in section four
sectionFour.appendChild(ulFour);//apply ul in section four


const sectionFive = document.createElement('section');
sectionFive.innerHTML =
 `<h1> setion five</h1>
 <p> This is a paragraph from section five. </p>
 <ul>
    <li>item one</li>
    <li>item two</li>
    <li>item three</li>
 `;

 main.appendChild(sectionFive);