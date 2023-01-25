import { forwardRef } from 'react';

function Techs(props, ref) {
  return (
    <section className="techs" ref={ref}>
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__techs">7 технологий</h3>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__techs-container">
        <span className="techs__name">HTML</span>
        <span className="techs__name">CSS</span>
        <span className="techs__name">JS</span>
        <span className="techs__name">React</span>
        <span className="techs__name">Git</span>
        <span className="techs__name">Express.js</span>
        <span className="techs__name">MongoDB</span>
      </div>
    </section>
  );
}

export default forwardRef(Techs);
