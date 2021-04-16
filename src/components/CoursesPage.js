import CourseList from "./CourseList";
import { useCourses } from "../hooks/useCourses";
import { Link } from "react-router-dom";

//CONTROLLER COMPONENTE DI LOGICA, SmartComponent
export default function CoursesPage() {
  //HOOK CUSTOM
  const courses = useCourses();
  return (
    <>
      <h2>Corsi</h2>
      <Link className="btn btn-primary" to="/course">
        Aggiungi Corso
      </Link>
      <CourseList courses={courses} />
    </>
  );
}
