import { createRef } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

export default function Main() {
  const aboutProjectRef = createRef();
  const techs = createRef();
  const student = createRef();

  function handleAboutProjectScroll() {
    aboutProjectRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function handleTechsScroll() {
    techs.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleStudentScroll() {
    student.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main>
      <Promo />
      <NavTab
        onAboutProjectClick={handleAboutProjectScroll}
        onTechsClick={handleTechsScroll}
        onStudentClick={handleStudentScroll}
      />
      <AboutProject ref={aboutProjectRef} />
      <Techs ref={techs} />
      <AboutMe ref={student} />
      <Portfolio />
    </main>
  );
}
