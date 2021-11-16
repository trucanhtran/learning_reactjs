import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

const lessons = [{
  id:1,
  name: 'ReactJS là gì? Tại sao nên học REactJS'
}
,
{
  id: 2,
  name: 'SPA/mPA là gì?'
}
,
{
  id: 3,
  name: 'Arrow function'
}]

const Content = () => {
  const [lessonId, setLessonId] = useState(1)

  useEffect(() => {
    const handleComment = ({detail}) => {
      console.log(detail);
    }

    window.addEventListener(`lesson-${lessonId}`, handleComment)

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }
  }, [lessonId])

  return (
    <div className="Content">
      {lessons.map(lesson => (
        <li
          key={lesson.id}
          style={{
            color: lessonId === lesson.id ?
              'red' :
              '#333'
          }}
          onClick={() => setLessonId(lesson.id)}
        >
          {lesson.name}
        </li>
      ))}
    </div>
  );
}

export default Content;
