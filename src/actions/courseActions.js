import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import ActionTypes from "../actions/actionTypes";
//CREATORE DI AZIONI
export function saveCourse(course) {
  courseApi.saveCourse(course).then(savedCourse => {
    //azione ehi dispatcher vai a dire a tutti gli store che è stato creato un corso
    dispatcher.dispatch({
      actionType: ActionTypes.CREATECOURSE,
      course: savedCourse,
    });
  });
}
