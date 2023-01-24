import { forwardRef } from 'react';

function AboutMe(props, ref) {
  return (
    <section className="about-me" ref={ref}>
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__student-container">
        <div className="about-me__student">
          <h3 className="about-me__student-name">Вероника</h3>
          <span className="about-me__student-short-about">Фронтенд-разработчик, 27 лет</span>
          <p className="about-me__student-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate esse, aliquam possimus repellat laborum dolorem!
            Voluptate optio molestias assumenda vero incidunt laboriosam est impedit blanditiis dolorum.
          </p>
          <p className="about-me__student-github"><a target="_blank" href="https://github.com/Nika414" rel="noreferrer">Github</a></p>
        </div>
        <div className="about-me__student-photo" />
      </div>
    </section>
  );
}

export default forwardRef(AboutMe);
