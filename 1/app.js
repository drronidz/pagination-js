import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 3
let pages = []

const setupUI = () => {
    displayFollowers(pages[index])
    displayButtons(btnContainer, pages, index)
}

const init = async () => {
    const followers = await fetchFollowers()
    // console.log(followers)
    displayFollowers(paginate(followers) [0])
    title.textContent = 'Pagination'
    pages = paginate(followers)
    console.log(pages)
    setupUI()
}

btnContainer.addEventListener('click', function (event) {
    if(event.target.classList.contains('btn-container')) return
    if(event.target.classList.contains('page-btn')) {
        console.log(parseInt(event.target.dataset.index))
        index = parseInt(event.target.dataset.index)
    }
    if(event.target.classList.contains('next-btn')) {
        index++
        if(index > pages.length - 1) {
            index = 0
        }
    }
    if(event.target.classList.contains('prev-btn')) {
        index--
        if(index < 0) {
            index = pages.length - 1
        }
    }
    setupUI()
})

// Circular Pagination (From the beginning to the start -And- From start to the beginning)
window.addEventListener('load', init)