const paginate = (followers) => {
    const ITEMS_PER_PAGE = 9
    const numberOfPages = Math.ceil(followers.length / ITEMS_PER_PAGE);
    return Array.from({length: numberOfPages}, (_, index) => {
        const start = index * ITEMS_PER_PAGE
        return followers.slice(start, start + ITEMS_PER_PAGE)
    })
}

export default paginate
