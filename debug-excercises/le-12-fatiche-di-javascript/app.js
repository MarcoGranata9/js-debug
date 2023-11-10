const input = document.querySelector('input');
const array = [];

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;

    array.push(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value;
    document.querySelector('ul').append(li);

    let counter = '';
    let item    = array[0];
    const max   = 1;
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log('${item} trovato ${max} volte');
});

/* Errori: 
Array Null diventa array vuoto, 
array.add diventa array.push,
li.text diventa .innerHTML,
append al posto di push riga 14, 
primo ciclo for manca .length,
secondo ciclo for j = i diventa j = 0
i++ diventa j++




*/