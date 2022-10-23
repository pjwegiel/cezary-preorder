import Warszawa from './assets/img1.jpg'
import Gentelman from './assets/img2.jpg'
import Sola from './assets/img3.jpg'

const links = [
  {
    name: 'WARSZAWA',
    img: Warszawa,
    url: 'https://www.youtube.com/watch?v=0mwkMvPVHBw&ab_channel=SA%C5%81ATA',
  },
  {
    name: 'GENTELMAN',
    img: Gentelman,
    url: '',
  },
  {
    name: 'SOLA',
    img: Sola,
    url: 'https://www.youtube.com/watch?v=zeEd4g05NG8&ab_channel=SA%C5%81ATA',
  },
]

export function Links(): JSX.Element {
  return (
    <div className='w-full flex justify-between' style={{ height: '77vh' }}>
      {links.map(({ name, img, url }) => (
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
          key={name}
          className='m-auto hover:scale-105 duration-200 shadow-2xl'
        >
          <img src={img} alt={name} width='600px' />
        </a>
      ))}
    </div>
  )
}
