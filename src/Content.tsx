import { Covers } from './Covers'
import { Links } from './Links'

export function Content() {
  return (
    <div className='content'>
      <Links />
      <div style={{ position: 'relative' }}>
        <h1
          className='absolute top-1/4 w-full text-center'
          style={{
            position: 'sticky',
          }}
        >
          M A X I M U M
        </h1>
      </div>
      <Covers />
    </div>
  )
}
