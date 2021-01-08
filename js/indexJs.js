window.onload = () => {
    var items = document.getElementsByClassName('items');
    var imgItems = document.getElementsByClassName('imgItem');
    Array.from(items)
        .forEach(e => e.addEventListener('click', _ => alert(e.innerText)));
        var items = document.getElementsByClassName('items');
    Array.from(imgItems)
        .forEach(e => {
            e.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016__480.jpg")';
            e.style.backgroundRepeat = 'no-repeat';
            e.style.backgroundSize = 'cover';
        });
}