import '../Main/Main.css';
import './AboutMe.css';

import photo from '../../images/students-photo.jpg'

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title contet__title'>Студент</h2>
      <article className='about-me__block'>
        <div className='about-me__block-caption'>
          <p className='about-me__block-caption-name'>Виталий</p>
          <p className='about-me__block-caption-profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__block-caption-introduction'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className='about-me__block-caption-link'><a target='_blank' href='https://github.com/' className='content__link-style'>Git</a></div>
        </div>
        <img src={photo} alt='фото студента' className='about-me__block-photo' />
      </article>
    </section>
  );
}

export default AboutMe;