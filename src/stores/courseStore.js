import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

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
}

const store = new CourseStore();

export default store;
