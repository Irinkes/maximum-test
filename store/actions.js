import axios from "axios";

export  const  loadCoursesList = ({commit}) => {
  let coursesData = [];
  axios
    .get('https://5daca7380af117001417072a.mockapi.io/api/v1/courses')
    .then(response => (coursesData = response.data))
    .then(response => {
      commit('loadCoursesList', coursesData);
    });
}

export  const  loadLessonsList = ({commit}) => {
  let lessonsData = [];
  axios
    .get('https://5daca7380af117001417072a.mockapi.io/api/v1/lessons')
    .then(response => (lessonsData = response.data))
    .then(response => {
      commit('loadLessonsList', lessonsData);
    });
}
