import '../Main/Main.css';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title contet__title'>О проекте</h2>
      <article className='about-project__content'>
        <div className='about-project__content-block'>
          <h3 className='about-project__content-block-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__content-block-desciption'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__content-block'>
          <h3 className='about-project__content-block-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__content-block-desciption'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </article>
      <div className='about-project__diagram'>
        <div className='about-project__diagram-backend'>1 неделя</div>
        <div className='about-project__diagram-frontend'>4 недели</div>
        <p className='about-project__diagram-caption'>Back-end</p>
        <p className='about-project__diagram-caption'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;