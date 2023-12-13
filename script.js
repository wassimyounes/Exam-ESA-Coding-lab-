const inpt = document.getElementById('input');
const fruit = document.getElementById('fruits');
const legumes = document.getElementById('legumes');
const addSpecificBtn = document.getElementById('add-specific');
const addGeneralBtn = document.getElementById('add-general');
const deleteItemBtn = document.getElementById('delete-item');
const searchItemBtn = document.getElementById('search-item');
const searchInpt = document.getElementById('search');
const fruitList = document.getElementById('fruit-list');
const bothList = document.getElementById('both-list');
const legumesList = document.getElementById('legumes-list');

const type = {
    fruit: 'Fruits!',
    legumes: 'Legumes!'
};

function validateInpt() { 
    if(!fruit.checked && !legumes.checked || !inpt.value ) {
        alert('make sure all fields are filled');
        return false;
    }
    return true;
};

function addSpecific() {
    if(fruit.checked) {
        const card = document.createElement('p');
        card.classList.add('card', 'alert', 'alert-info', 'text-success', 'fs-5');
        card.setAttribute('id', 'fruit-card');
        card.innerText = `${type.fruit} - ${inpt.value}`;
        fruitList.appendChild(card);

    }else {
        const card = document.createElement('p');
        card.classList.add('card', 'alert', 'alert-warning', 'text-danger-emphasis', 'fs-5'); 
        card.setAttribute('id', 'legumes-card');
        card.innerText = `${type.legumes} - ${inpt.value}`;
        legumesList.appendChild(card);
    };
};

function addGeneral() {
    if(fruit.checked) {
        const card = document.createElement('p');
        card.classList.add('card', 'alert', 'alert-primary', 'text-primary', 'fs-5');
        card.setAttribute('id', 'fruit-card');
        card.setAttribute('onclick', 'filter(this)');
        card.innerText = `${type.fruit} - ${inpt.value}`;
        bothList.appendChild(card);

    }else {
        const card = document.createElement('p');
        card.classList.add('card', 'alert', 'alert-primary', 'text-primary', 'fs-5'); 
        card.setAttribute('id', 'legumes-card');
        card.setAttribute('onclick', 'filter(this)');
        card.innerText = `${type.legumes} - ${inpt.value}`;
        bothList.appendChild(card);
    };
};

function searchItem() {
    const text = searchInpt.value;
    const processedText = text.toLowerCase();
    let cards = document.querySelectorAll('.card');
    cards.forEach(e => {
        const targetText = e.innerText.toLowerCase();
        if(targetText.includes(processedText) && searchInpt.value !== '') {
            e.classList.add('found');
        } else {
            e.classList.remove('found')
        }
    })

}

function deleteItem() {
    searchItem()
    const found = document.querySelectorAll('.found');
    found.forEach(e => {
        e.parentElement.classList.add('warn');
        setTimeout(()=> {
            e.parentElement.removeChild(e)  
        }, 250)

    });
};

function filter(element) {
    const elementId = element.id;
    if(elementId == 'fruit-card') {
        element.parentElement.removeChild(element);
        fruitList.appendChild(element);
        element.classList.remove('alert-primary', 'text-primary');
        element.classList.add('alert-info', 'text-success');
        element.removeAttribute('onclick');

    } else{
        element.parentElement.removeChild(element);
        legumesList.appendChild(element);
        element.classList.remove('alert-primary', 'text-primary');
        element.classList.add('alert-warning', 'text-danger-emphasis');
        element.removeAttribute('onclick');
    }
}


addSpecificBtn.addEventListener('click', () => {
    if(validateInpt()) {addSpecific()} 
});

addGeneralBtn.addEventListener('click', () => {
    if(validateInpt()) {addGeneral()} 
});

searchItemBtn.addEventListener('click', searchItem)

deleteItemBtn.addEventListener('click', deleteItem)


