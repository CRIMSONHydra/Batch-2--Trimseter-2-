//Q1
const list_container = document.querySelector('#list-container');

const btn1 = document.querySelector('#q1');
btn1.addEventListener('click', () => {
    const ul = document.createElement('ul');
    for(let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        ul.appendChild(li);
    }
    list_container.appendChild(ul);
})

//Q2
const btn2 = document.querySelector('#q2');

q2.addEventListener('click', () => {
    const items = document.querySelectorAll('.update-text');
    items.forEach(item => {
        item.textContent = "Updated Successfully";
    })
})

//Q3
const parent_list = document.querySelector('#parent-list');
parent_list.addEventListener('click', e => {
    console.log(e)
    if(e.target.localName == "li") console.log("List item clicked");
})

//Q4
document.querySelector('#close-popup').addEventListener('click', () => {
    document.querySelector('#popup').style.display = "none";
})

//Q5
const btn5 = document.querySelector('#q5');

btn5.addEventListener('click', () => {
    const table = document.createElement('table');
    for(let i = 0; i < 3; i++) {
        const tr = document.createElement('tr');
        for(let j = 0; j < 3; j++) {
            const td = document.createElement('td');
            td.textContent = j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.querySelector('#table-container').appendChild(table);
})

//Q6
const btn6 = document.querySelector('#submit-btn');

btn6.addEventListener('click', () => {
    btn6.setAttribute('disabled', true);
})

//Q7
const heading = document.querySelector('#dynamic-title');
const input = document.querySelector("#title-input");

input.addEventListener('input', () => {
    heading.textContent = input.value;
})

//Q8
const cont = document.querySelector("#content-area");
document.querySelector("#q8").addEventListener('click', () => {
    // cont.innerHTML = "";
    cont.replaceChildren(p);
})

//Q10
const btn10 = document.querySelector("#q10");
const q = document.querySelector("#error-container");
const ps = q.querySelectorAll('p');
btn10.addEventListener('click', () => {

    ps.forEach(p => {
        p.classList.add('error-message');
    })
})
