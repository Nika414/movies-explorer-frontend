export default function NavTab({ onAboutProjectClick, onTechsClick, onStudentClick }) {
  return (
    <nav className="nav-tub">
      <ul className="nav-tub__list">
        <li className="nav-tub_option"><button onClick={onAboutProjectClick} type="button" className="nav-tub__link">О проекте</button></li>
        <li className="nav-tub_option"><button onClick={onTechsClick} type="button" className="nav-tub__link" href="#">Технологии</button></li>
        <li className="nav-tub_option"><button onClick={onStudentClick} type="button" className="nav-tub__link" href="#">Студент</button></li>
      </ul>
    </nav>
  );
}
