var parent = document.getElementById('container');
let count = 1;
appenddata();


function appenddata() {
    for (let i = 1; i <= 25; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'divs')
        div.innerText = "This is  " + count;
        count++;
        parent.append(div)
    }
}
function loadmore() {
    setTimeout(() => {
        count++;
        let div = document.createElement('div');
        div.setAttribute('class', 'divs')
        div.innerText = "this is  " + count;
        parent.append(div)
    }, 1000)
}

const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
window.addEventListener('scroll', () => {
    // if (scrollTop + clientHeight >= clientHeight) {
    //     loadmore();
    // }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('I am at bottom');
        loadmore();
        console.log("at bottom");
    }
})