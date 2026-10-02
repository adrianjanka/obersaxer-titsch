/**
 * Schreibmaschinen-Titel für die Buach-Section (wie buach.obersaxer-titsch.ch).
 */

const TITLE = 'Weerter vo A bis Z'
const SPEED_MS = 85
const START_DELAY_MS = 600
const CURSOR_AFTER_MS = 1500
/** Wartezeit nach Leuchstift-Sweep; Section-Wipe dauert länger (CSS --buach-wipe-duration). */
const SWEEP_MS = 450
const FAILSAFE_MS = 5000

function prefersReducedMotion() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches
}

function blink(cursor) {
  return cursor.animate(
    [{ opacity: 1 }, { opacity: 1, offset: 0.5 }, { opacity: 0, offset: 0.5 }, { opacity: 0 }],
    { duration: 1000, iterations: Infinity },
  )
}

function revealSection(section) {
  section.classList.add('buach--revealed')
}

function finishTypewriter(title, section) {
  delete document.documentElement.dataset.buachTw
  title.classList.remove('is-swept')
  revealSection(section)
}

/**
 * @returns {() => void}
 */
function typewriter(title, section) {
  const root = document.documentElement
  const tooLate = () => performance.now() > FAILSAFE_MS - 500

  if (root.dataset.buachTw !== 'run') return () => {}

  if (prefersReducedMotion() || tooLate()) {
    finishTypewriter(title, section)
    return () => {}
  }

  const chars = [...title.querySelectorAll('.tw-c')]
  if (!chars.length) {
    revealSection(section)
    return () => {}
  }

  const cursor = document.createElement('span')
  cursor.className = 'tw-cursor'
  cursor.setAttribute('aria-hidden', 'true')
  let blinking = null
  let timer = 0
  let index = 0
  let started = false
  let cancelled = false

  const sweep = () => {
    blinking?.cancel()
    cursor.remove()
    title.classList.add('is-swept')
    revealSection(section)
    timer = window.setTimeout(() => finishTypewriter(title, section), SWEEP_MS)
  }

  const step = () => {
    const char = chars[index++]
    if (!char) {
      blinking = blink(cursor)
      timer = window.setTimeout(sweep, CURSOR_AFTER_MS)
      return
    }
    blinking?.cancel()

    const jitter = `translateY(${((Math.random() - 0.5) * 0.05).toFixed(3)}em) rotate(${((Math.random() - 0.5) * 2.4).toFixed(1)}deg)`
    Object.assign(char.style, {
      visibility: 'visible',
      transform: jitter,
      opacity: (0.78 + Math.random() * 0.22).toFixed(2),
    })
    char.after(cursor)
    char.animate(
      [
        { transform: `${jitter} translateY(-.06em) scale(1.1)`, filter: 'blur(.8px)' },
        { transform: jitter, filter: 'none' },
      ],
      { duration: 120, easing: 'ease-out' },
    )

    const next = chars[index]
    const endOfWord = next && next.parentNode !== char.parentNode
    if (endOfWord) {
      timer = window.setTimeout(() => {
        const space = char.parentNode?.nextSibling
        if (space && space.nextSibling?.nodeName !== 'BR') space.after(cursor)
        timer = window.setTimeout(step, SPEED_MS * 1.8)
      }, SPEED_MS * 1.2)
    } else {
      timer = window.setTimeout(step, SPEED_MS * (0.45 + Math.random() * 1.1))
    }
  }

  void document.fonts.ready.then(() => {
    if (cancelled) return
    if (tooLate()) {
      finishTypewriter(title, section)
      return
    }
    started = true
    root.dataset.buachTw = 'typing'
    title.prepend(cursor)
    blinking = blink(cursor)
    timer = window.setTimeout(step, START_DELAY_MS)
  })

  return () => {
    cancelled = true
    window.clearTimeout(timer)
    blinking?.cancel()
    cursor.remove()
    if (started) finishTypewriter(title, section)
  }
}

export function initBuachTypewriter() {
  const section = document.getElementById('buach')
  const title = document.getElementById('buach-title')
  if (!section || !title) return

  if (prefersReducedMotion() || document.documentElement.dataset.buachTw !== 'run') {
    revealSection(section)
    delete document.documentElement.dataset.buachTw
    return
  }

  typewriter(title, section)
}
