import { useState } from 'react';
import './Lesson07Styles.css';
import { getSinglePost } from './api.js';

export default function FetchOnClick() {
  const [post, setPost] = useState('');

  function handleClick() {
    getSinglePost(1).then((data) => {
      setPost(data);
    });
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>

      <div className="content">
        <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      </div>
    </div>
  );
}
