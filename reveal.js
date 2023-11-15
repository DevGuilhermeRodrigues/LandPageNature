
window.revelar = ScrollReveal({reset:true})

// Main do site
revelar.reveal('.efeito-txt-main', {
    duration: 3000,
    distance: '100px'
})


// Section dos card
revelar.reveal('.efeito-card1', {
    duration: 3000,
    distance: '110px',
    origin  : 'bottom'
})

revelar.reveal('.efeito-card2', {
    duration: 4000,
    distance: '110px',
    delay: 500,
    origin  : 'bottom'
})

revelar.reveal('.efeito-card3', {
    duration: 5000,
    distance: '110px',
    delay: 1000,
    origin  : 'bottom'
})

// Section About

revelar.reveal('.efeito-about-img2', {
    duration: 4000,
    distance: '200px',
    origin: 'left'
})

revelar.reveal('.efeito-about-img1', {
    duration: 4000,
    distance: '200px',
    origin: 'left',
    delay: 300
})

revelar.reveal('.efeito-about-txt', {
    duration: 4000,
    distance: '200px',
    origin: 'right'
})


// Section end

revelar.reveal('.efeito-container-end', {
    duration: 4000,
    distance: '150px',
    origin: 'left'
})

revelar.reveal('.efeito-txt-end', {
    duration: 4000,
    distance: '150px',
    origin: 'right'
})