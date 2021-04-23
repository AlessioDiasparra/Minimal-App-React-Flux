import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

//CREATORE DI AZIONI, AZIONE SAVECOURSE CON CHIAMATA API
export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    //azione ehi dispatcher vai a dire a tutti gli store che è stato creato un corso
    dispatcher.dispatch({
      actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id
    });
  });
}
