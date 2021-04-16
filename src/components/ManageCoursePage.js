import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
//import { Prompt } from "react-router-dom";

export default function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  //course salva lo state, setCourse setter
  const [course, setCourse] = useState({
    id: null, //VALORI DEFAULT
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  //HOOK che read URL per popolare il form
  useEffect(() => {
    //from path '/courses/:slug'
    const slug = props.match.params.slug;
    if (slug) {
      //_course per conflitto con variabile di sopra, _variabile locale
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]); //se url cambia effettua ri-rendering

  // DESTRUCTURING const { target } = event
  const handleChange = ({ target }) => {
    //STATO IMMUTABILE, crea copia e modifica con il set di useState
    //event.target.name = setta una proprietà su questo obj basata sul value di questa variabile
    const updatedCourse = {
      ...course,
      //COMPUTED PROPERTY proprietà calcolata
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  };

  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Titolo obbligatorio";
    if (!course.authorId) _errors.authorId = "Author id obbligatorio";
    if (!course.category) _errors.category = "Categoria obbligatoria";

    setErrors(_errors);
    //FORM VALIDO se errors obj non ha proprietà
    return Object.keys(_errors).length === 0;
  };

  // SAVE DATA FORM
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid()) return;

    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Corso salvato");
    });
  };

  return (
    <>
      <h2>Gestione Corsi</h2>
      {/* <Prompt when={true} message="Sei sicuro di voler lasciare la pagina?" /> */}
      {props.match.params.slug}
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
