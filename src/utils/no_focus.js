// remove focus from links and buttons after Click

const removeFocus = (e) => {
   e.currentTarget.blur()
}

// remove focus and move to top of screen smoothly
const toTopSmooth = (e) => {
   window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
   })
   e.currentTarget.blur()
}
export { toTopSmooth, removeFocus }