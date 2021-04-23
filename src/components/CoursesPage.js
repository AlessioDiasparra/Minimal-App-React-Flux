import { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

//CONTROLLER COMPONENTE DI LOGICA, SmartComponent
export default function CoursesPage() {
  //const [state, setState] = useState(initialState);
  const [courses, setCourses] = useState(courseStore.getCourses());

  //HOOK useEffect per chiamata API Corsi con store
  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    //pulizia al smontaggio
    return () => courseStore.removeChangeListener(onChange);
  }, []); //[] -> Array di dipendenze per eseguire 1 volta call API

  //function chiamata quando lo store cambia
  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Corsi</h2>
      <Link className="btn btn-primary" to="/course">
        Aggiungi Corso
      </Link>
      {/* componente di markup */}
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}
