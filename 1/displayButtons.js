const displayButtons = (container, pages, activePage) => {
    let paginationButtons = pages.map((_, pageIndex) => {
        return      `<button class="page-btn ${activePage === pageIndex ? 'active-btn' : ''}" data-index="${pageIndex}">
                        ${pageIndex + 1} 
                    </button>`
    })
    paginationButtons.push('<button class="next-btn">next</button>')
    paginationButtons.unshift('<button class="prev-btn">prev</button>')
    container.innerHTML = paginationButtons.join('')
}

export default displayButtons
