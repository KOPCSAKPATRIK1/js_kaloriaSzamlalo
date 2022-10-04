let kivalasztott = [];

let ossz = 0;;


function addSzendvics()
{
    let list = document.getElementById('lista');
    list.innerHTML += '<li class="list-group-item">' + 'Szendvics' + '</li>';
    ossz += 300;

    console.log(ossz);
    let osszKaloria = document.getElementById('osszKaloria');
    osszKaloria.textContent ='Fogyasztott Kalőria: ' + ossz;
}

function addKenyer()
{
    let list = document.getElementById('lista');
    list.innerHTML += '<li class="list-group-item">' + 'Kenyer' + '</li>';
    ossz += 100;

    console.log(ossz);
    let osszKaloria = document.getElementById('osszKaloria');
    osszKaloria.textContent = 'Fogyasztott Kalőria: ' + ossz;
}

function addSor()
{
    let list = document.getElementById('lista');
    list.innerHTML += '<li class="list-group-item">' + 'Sor' + '</li>';
    ossz += 500;

    console.log(ossz);
    let osszKaloria = document.getElementById('osszKaloria');
    osszKaloria.textContent = 'Fogyasztott Kalőria: ' + ossz;
}

function addHell()
{
    let list = document.getElementById('lista');
    list.innerHTML += '<li class="list-group-item">' + 'Hell' + '</li>';
    ossz += 750;

    console.log(ossz);
    let osszKaloria = document.getElementById('osszKaloria');
    osszKaloria.textContent = 'Fogyasztott Kalőria: ' + ossz;
}

function visszaAllit()
{
    let lista = document.getElementById('lista')
    lista.textContent = ' ';
    lista.innerHTML = '<li class="list-group-item list-group-item-dark">' + 'Kiválasztott Ételek' + '</li>';
    let osszKaloria = document.getElementById('osszKaloria');
    ossz = 0;
    osszKaloria.textContent = 'Fogyasztott Kalőria: ' + ossz;
}

function init()
{
    console.log('Loaded');
    
    document.getElementById('szendvics').addEventListener('click', addSzendvics);
    document.getElementById('kenyer').addEventListener('click', addKenyer);
    document.getElementById('sor').addEventListener('click', addSor);
    document.getElementById('hell').addEventListener('click', addHell);
    document.getElementById('visszaAllit').addEventListener('click', visszaAllit);
}


document.addEventListener('DOMContentLoaded', init);