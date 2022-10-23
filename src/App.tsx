import { Content } from './Content'

window.addEventListener(
  'scroll',
  () => {
    document.body.style.setProperty(
      '--scroll',
      String(window.scrollY / (document.body.offsetHeight - window.innerHeight)),
    )
  },
  false,
)

export function App() {
  return <Content />
}
