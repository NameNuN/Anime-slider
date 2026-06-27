const slides = document.querySelectorAll('.slide')
const body = document.body

const defaultBg = '#000000'
const defaultText = '#ffffff'

const bgColors = [
    '#d3cdcd',
    '#001f5c',
    '#24b14e',
    '#eb14c7',
    '#19c8e7'
];

const textColors = [
    '#000000',
    '#ffffff',
    '#020202',
    '#ffffff',
    '#ffffff'
];



function clearSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active')

        const content = slide.querySelector('.content')
        if (content) {
            content.style.color = defaultText
        }
    })
}

function resetPage() {
    body.style.backgroundColor = defaultBg
}

function openSlide(slide, index) {
    console.log(slide.classList.add('active'))

    body.style.backgroundColor = bgColors[index]

    const content = slide.querySelector('.content')
    if (content) {
        console.log(content.style.color = textColors[index])
    }
    console.log(content)
    
}


slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {

        if (slide.classList.contains('active')) {
            clearSlides()
            resetPage()
            return
        }

        clearSlides()
        openSlide(slide, index)
    })
})