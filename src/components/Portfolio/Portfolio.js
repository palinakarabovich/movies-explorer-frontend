import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list content__list-style'>
        <li className='portfolio__list-node'><a href='https://github.com/' className='portfolio__list-link content__link-style'>Статичный сайт <span>&#8599;</span></a></li>
        <li className='portfolio__list-node'><a href='https://github.com/' className='portfolio__list-link content__link-style'>Адаптивный сайт <span>&#8599;</span></a></li>
        <li className='portfolio__list-node'><a href='https://github.com/' className='portfolio__list-link content__link-style'>Одностраничное приложение <span>&#8599;</span></a></li>
      </ul>
    </section>
  )
}

export default Portfolio;