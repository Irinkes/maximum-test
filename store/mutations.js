export  const  loadCoursesList = (state, result) => {
  state.coursesList = result;
}

export  const  loadLessonsList = (state, result) => {
  state.lessonsList = result;
}

export  const  chooseCurrentCourse = (state, result) => {
  state.currentCourseId = result;
}


