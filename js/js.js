const naf = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (this.window.scrollY > 1) {
        naf.classList.replace('bg-transparent', 'colorbg');
    } else if (this.window.scrollY <= 0) {
        naf.classList.replace('colorbg', 'bg-transparent');
    }
})