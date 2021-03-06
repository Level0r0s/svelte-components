export function scrollElementIntoView(index: number, element: HTMLElement) {
  if (!element || !element.parentElement) {
    return
  }

  const parent = element.parentElement

  if (index === 0) {
    parent.scrollTop = 0

    return
  }

  const top = element.offsetTop - parent.offsetTop

  if (top < parent.scrollTop) {
    parent.scrollTop = top
  }

  if (top + element.clientHeight > parent.scrollTop + parent.clientHeight) {
    parent.scrollTop = top - parent.clientHeight + element.clientHeight
  }
}
