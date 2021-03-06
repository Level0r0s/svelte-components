export function isEventSource(node: HTMLElement, e: Event) {
  if (node && e.target instanceof HTMLElement) {
    return node === e.target || node.contains(e.target)
  }

  return false
}
