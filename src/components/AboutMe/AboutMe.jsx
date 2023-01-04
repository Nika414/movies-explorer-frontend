export default function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__student_container">
        <div className="about-me__student">
          <h3 className="about-me__student-name">Вероника</h3>
          <span className="about-me__student-short-about">Фронтенд-разработчик, 27 лет</span>
          <p className="about-me__student-about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate esse, aliquam possimus repellat laborum dolorem!
            Voluptate optio molestias assumenda vero incidunt laboriosam est impedit blanditiis dolorum.
          </p>
          <p className="about-me__student-github"><a href="https://github.com/Nika414">Github</a></p>
        </div>
        <div alt="аватар" className="about-me__student-photo" />
      </div>
    </div>
  );
}
