import { forwardRef } from 'react';

const AboutProject = forwardRef((props, ref) => (
  <div className="about-project" ref={ref}>
    <h2 className="about-project__title">О проекте</h2>
    <div className="about-project__container">
      <div className="about-project__text-container">
        <span className="about-project__span">Дипломный проект включал 5 этапов</span>
        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="about-project__text-container">
        <span className="about-project__span">На выполнение диплома ушло 5 недель</span>
        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
    </div>
    <div className="about-project__timing-container">
      <p className="about-project__timing about-project__backend">1 неделя</p>
      <p className="about-project__timing about-project__frontend">4 недели</p>
    </div>
    <div className="about-project__timing-container">
      <p className="about-project__timing about-project__title-backend">Back-end</p>
      <p className="about-project__timing about-project__title-frontend">Front-end</p>
    </div>
  </div>
));

export default AboutProject;
