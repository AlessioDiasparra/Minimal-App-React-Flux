import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
//array privato
let _courses = [];

//ESTENDERE EventEmitter per le sue funzionalità
class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    //funzione per avvisare i componenti che questo store cambia
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  //dati dei corsi come tabelle SQL
  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

//registrare lo store con il dispatcher per notificare le azioni
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter(course => course.id !== parseInt(action.id, 10));
      store.emitChange();
      break;

    case actionTypes.CREATE_COURSE:
      _courses.push(action.course); //payload
      store.emitChange();
      break;

    case actionTypes.LOAD_COURSES:
      _courses = action.courses; //payload
      store.emitChange();
      break;

    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map(course =>
        course.id === action.course.id ? action.course : course
      );
      store.emitChange();
      break;

    default:
    //niente da fare qui
  }
});

export default store;
