// @ts-nocheck


export const getScrollBarWidth = () => {
  let root = document.documentElement
  const width = window.innerWidth - root.clientWidth

  root.style.setProperty('--scrollbar-width', `${width}px`)
}

export const getScrollTimes = () => {
  let timesEventFired = 0

  
  function handler(e) {
    let root = document.documentElement
    
    timesEventFired++
    console.log('timesEventFired :', timesEventFired);
    // console.log('Wheel Event: ', e.wheelDeltaY)

    if (timesEventFired > 30) {
      // root.style.setProperty('--scroll-type', 'initial')
      root.style.setProperty('--scroll-type', 'proximity')
    } else {
      root.style.setProperty('--scroll-type', 'mandatory')
    }

    setTimeout(()=> {
      timesEventFired = 0
    }, 3000)
  }

  document.addEventListener('wheel', handler, false)

  return () => document.removeEventListener('wheel', handler, false)
}
