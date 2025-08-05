import { EVENTS } from "../consts"

function navigate (href) {
  window.history.pushState({}, '', href)

  const navigationEvent = new Event(EVENTS.PUSHSTATE)

  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageAbleEvent = target === undefined || target === '_self'

    if(isMainEvent && isManageAbleEvent && !isModifiedEvent) {
      e.preventDefault()
      navigate(to)
    }
  }
  
  return <a onClick={handleClick} href={to} target={target} {...props} />
}