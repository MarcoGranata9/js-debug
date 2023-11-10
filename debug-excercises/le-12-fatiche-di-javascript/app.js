const input = document.querySelector('input');
const array = [];

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return;

    array.push(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value;
    document.querySelector('ul').append(li);

    let counter = 0;
    let item    = array[0];
    let max   = 1;
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {
                max  = counter;
                item = array[i];
                }
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert');
    console.log(alert);

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);
});

/* Errori: 
Array Null diventa array vuoto,
if valore "" in 0 
array.add diventa array.push,
append al posto di push riga 14, 
li.text diventa .innerHTML,
conter = "" diventa 0
primo ciclo for manca .length,
secondo ciclo i++ diventa j++
queryselector al posto di getbyclassname
backtick ultimo console log al posto di ""
max dichiarato come const invece di let


*/