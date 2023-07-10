setTimeout(function(){
    document.body.className="";
},500);

const images = document.querySelector('.js-imgs')
const image1 = document.querySelector('.js-img1')
const image2 = document.querySelector('.js-img2')
const image3 = document.querySelector('.js-img3')
const image4 = document.querySelector('.js-img4')
const image5 = document.querySelector('.js-img5')

function openClose1() {
    if (image2.classList.contains('img-open') || image3.classList.contains('img-open') || image4.classList.contains('img-open') || image5.classList.contains('img-open')) {
        image1.classList.add('img-open')
        image1.classList.remove('img-closed')
        image2.classList.add('img-closed')
        image2.classList.remove('img-open')
        image3.classList.add('img-closed')
        image3.classList.remove('img-open')
        image4.classList.add('img-closed')
        image4.classList.remove('img-open')
        image5.classList.add('img-closed')
        image5.classList.remove('img-open')
    } else if (image1.classList.contains('img-closed')) {
        image1.classList.remove('img-closed')
        image1.classList.add('img-open')
    } else if (image1.classList.contains('img-open')) {
        image1.classList.remove('img-open')
        image1.classList.add('img-closed')
    }
}

function openClose2() {
    if (image1.classList.contains('img-open') || image3.classList.contains('img-open') || image4.classList.contains('img-open') || image5.classList.contains('img-open')) {
        image2.classList.add('img-open')
        image2.classList.remove('img-closed')
        image1.classList.add('img-closed')
        image1.classList.remove('img-open')
        image3.classList.add('img-closed')
        image3.classList.remove('img-open')
        image4.classList.add('img-closed')
        image4.classList.remove('img-open')
        image5.classList.add('img-closed')
        image5.classList.remove('img-open')
    } else if (image2.classList.contains('img-closed')) {
        image2.classList.remove('img-closed')
        image2.classList.add('img-open')
    } else if (image2.classList.contains('img-open')) {
        image2.classList.remove('img-open')
        image2.classList.add('img-closed')
    }
}

function openClose3() {
    if (image1.classList.contains('img-open') || image2.classList.contains('img-open') || image4.classList.contains('img-open') || image5.classList.contains('img-open')) {
        image3.classList.add('img-open')
        image3.classList.remove('img-closed')
        image2.classList.add('img-closed')
        image2.classList.remove('img-open')
        image4.classList.add('img-closed')
        image4.classList.remove('img-open')
        image5.classList.add('img-closed')
        image5.classList.remove('img-open')
        image1.classList.add('img-closed')
        image1.classList.remove('img-open')
    } else if (image3.classList.contains('img-closed')) {
        image3.classList.remove('img-closed')
        image3.classList.add('img-open')
    } else if (image3.classList.contains('img-open')) {
        image3.classList.remove('img-open')
        image3.classList.add('img-closed')
    }
}

function openClose4() {
    if (image1.classList.contains('img-open') || image2.classList.contains('img-open') || image3.classList.contains('img-open') || image5.classList.contains('img-open')) {
        image4.classList.add('img-open')
        image4.classList.remove('img-closed')
        image1.classList.add('img-closed')
        image1.classList.remove('img-open')
        image2.classList.add('img-closed')
        image2.classList.remove('img-open')
        image3.classList.add('img-closed')
        image3.classList.remove('img-open')
        image5.classList.add('img-closed')
        image5.classList.remove('img-open')
    } else if (image4.classList.contains('img-closed')) {
        image4.classList.remove('img-closed')
        image4.classList.add('img-open')
    } else if (image4.classList.contains('img-open')) {
        image4.classList.remove('img-open')
        image4.classList.add('img-closed')
    }
}

function openClose5() {
    if (image1.classList.contains('img-open') || image2.classList.contains('img-open') || image3.classList.contains('img-open') || image4.classList.contains('img-open')) {
        image5.classList.add('img-open')
        image5.classList.remove('img-closed')
        image1.classList.add('img-closed')
        image1.classList.remove('img-open')
        image2.classList.add('img-closed')
        image2.classList.remove('img-open')
        image3.classList.add('img-closed')
        image3.classList.remove('img-open')
        image4.classList.add('img-closed')
        image4.classList.remove('img-open')
    } else if (image5.classList.contains('img-closed')) {
        image5.classList.remove('img-closed')
        image5.classList.add('img-open')
    } else if (image5.classList.contains('img-open')) {
        image5.classList.remove('img-open')
        image5.classList.add('img-closed')
    }
}

function theme() {
    const button = document.querySelector('.js-button')
    const body = document.querySelector('.js-body')
    const icon = document.querySelector('.js-icon')

    if (button.classList.contains('light')) {
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
        button.classList.remove('light')
        button.classList.add('dark-button')
        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
        icon.classList.remove('fa-solid')
        icon.classList.add('fa-regular')
    } else if (button.classList.contains('dark-button')) {
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
        button.classList.remove('dark-button')
        button.classList.add('light')
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
        icon.classList.remove('fa-regular')
        icon.classList.add('fa-solid')
    }
} 


function keydown() {
    if (event.key === 'ArrowRight' && image1.classList.contains('img-open')) {
        image1.classList.remove('img-open')
        image1.classList.add('img-closed')
        image2.classList.remove('img-closed')
        image2.classList.add('img-open')
    }  else if (event.key === 'ArrowLeft' && image2.classList.contains('img-open')) {
        image2.classList.remove('img-open')
        image2.classList.add('img-closed')
        image1.classList.remove('img-closed')
        image1.classList.add('img-open')
    } else if (event.key === 'ArrowRight' && image2.classList.contains('img-open')) {
        image2.classList.remove('img-open')
        image2.classList.add('img-closed')
        image3.classList.remove('img-closed')
        image3.classList.add('img-open')
    } else if (event.key === 'ArrowRight' && image3.classList.contains('img-open')) {
        image3.classList.remove('img-open')
        image3.classList.add('img-closed')
        image4.classList.remove('img-closed')
        image4.classList.add('img-open')
    } else if (event.key === 'ArrowLeft' && image3.classList.contains('img-open')) {
        image3.classList.remove('img-open')
        image3.classList.add('img-closed')
        image2.classList.remove('img-closed')
        image2.classList.add('img-open')
    } else if (event.key === 'ArrowRight' && image4.classList.contains('img-open')) {
        image4.classList.remove('img-open')
        image4.classList.add('img-closed')
        image5.classList.remove('img-closed')
        image5.classList.add('img-open')
    } else if (event.key === 'ArrowLeft' && image4.classList.contains('img-open')) {
        image4.classList.remove('img-open')
        image4.classList.add('img-closed')
        image3.classList.remove('img-closed')
        image3.classList.add('img-open')
    } else if (event.key === 'ArrowLeft' && image5.classList.contains('img-open')) {
        image5.classList.remove('img-open')
        image5.classList.add('img-closed')
        image4.classList.remove('img-closed')
        image4.classList.add('img-open')
    } else if (event.key === 'Escape' && image1.classList.contains('img-open') || image2.classList.contains('img-open') || image3.classList.contains('img-open') || image4.classList.contains('img-open') || image5.classList.contains('img-open')) {
        image1.classList.remove('img-open')
        image1.classList.add('img-closed')
        image2.classList.remove('img-open')
        image2.classList.add('img-closed')
        image3.classList.remove('img-open')
        image3.classList.add('img-closed')
        image4.classList.remove('img-open')
        image4.classList.add('img-closed')
        image5.classList.remove('img-open')
        image5.classList.add('img-closed')
    } else if (event.key === 'Enter' && image1.classList.contains('img-closed')) {
        image1.classList.remove('img-closed')
        image1.classList.add('img-open')
    }
}


 function themeKey() {
    if (event.key === 'Control') {
        theme()
    }
 }