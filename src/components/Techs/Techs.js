import '../Main/Main.css';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__content'>
        <h2 className='techs__content-title contet__title'>Технологии</h2>
        <article className='techs__content-block'>
          <h3 className='techs__content-block-title'>7 технологий</h3>
          <p className='techs__content-block-caption'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__content-block-list content__list-style'>
            <li className='techs__content-block-list-node'>HTML</li>
            <li className='techs__content-block-list-node'>CSS</li>
            <li className='techs__content-block-list-node'>JS</li>
            <li className='techs__content-block-list-node'>React</li>
            <li className='techs__content-block-list-node'>Git</li>
            <li className='techs__content-block-list-node'>Express.js</li>
            <li className='techs__content-block-list-node'>mongoDB</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Techs;