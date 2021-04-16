import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//VIEW COMPONENTE DI SOLO MARKUP - DumbComponent
export default function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Titolo</th>
          <th>ID Autore</th>
          <th>Categoria</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={`/course/${course.slug}`}> {course.title} </Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  //shape consente di specificare le proprietà attese da ciascun Object dell'Array courses
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
