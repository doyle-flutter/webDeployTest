window.onload = () => {
    var items = document.getElementsByClassName('items');
    Array.from(items)
        .forEach(e => e.addEventListener('click', _ => alert(e.innerText)));
}