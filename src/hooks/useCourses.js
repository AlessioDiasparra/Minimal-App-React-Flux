import { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";

export function useCourses() {
  //const [state, setState] = useState(initialState);
  const [courses, setCourses] = useState([]);
  //HOOK useEffect per chiamata API Corsi
  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);//[] -> Array di dipendenze per eseguire 1 volta call API
  return courses;
}