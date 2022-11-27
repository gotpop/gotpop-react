// @ts-nocheck


export const getScrollBarWidth = () => {
  let root = document.documentElement
  const width = window.innerWidth - root.clientWidth

  root.style.setProperty('--scrollbar-width', `${width}px`)
}

export const getScrollTimes = () => {
  let timesEventFired = 0

  
  function handler(e) {
    timesEventFired++
    console.log('timesEventFired :', timesEventFired);
    // console.log('Wheel Event: ', e.wheelDeltaY)


    setTimeout(()=> {
      timesEventFired = 0
    }, 3000)
  }

  document.addEventListener('wheel', handler, false)

  return () => document.removeEventListener('wheel', handler, false)
}
