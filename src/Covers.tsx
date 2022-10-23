import FrontCover from './assets/cover.jpg'
import BackCover from './assets/back.jpg'

const covers = [
  {
    name: 'Front',
    img: FrontCover,
  },
  {
    name: 'Back',
    img: BackCover,
  },
]

export function Covers(): JSX.Element {
  return (
    <div className='w-full flex justify-between mt-5' style={{ height: '85vh' }}>
      <img src={covers[0].img} alt={covers[0].name} width='600px' className='m-auto shadow-2xl' />
      <div className='flex'>
        <button
          className='px-12 py-6 m-auto bg-orange-600 rounded-full shadow-2xl uppercase font-bold'
          style={{ fontSize: '3rem' }}
        >
          Zamów preorder
        </button>
      </div>
      <img src={covers[1].img} alt={covers[1].name} width='600px' className='m-auto shadow-2xl' />
    </div>
  )
}
