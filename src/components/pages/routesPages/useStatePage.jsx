import React from "react";
import './css/hooksPage.css'
const useStatePage = () => {
  return (
    <div>
      <h1>Hooks</h1>
        <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{background: "url(https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/09/12115024/initialize-react-state-react-usestate.png)"}}></div>
      <ul className="details">
        <li className="author"><a href="#">John Doe</a></li>
        <li className="date">Aug. 24, 2015</li>
        <li className="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Learning to Code</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div className="blog-card alt">
    <div className="meta">
      <div className="photo" style={{background: "url(https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/03/27020116/useEffect-counter-example-2-944x1024.png)"}}></div>
      <ul className="details">
        <li className="author"><a href="#">Jane Doe</a></li>
        <li className="date">July. 15, 2015</li>
        <li className="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Mastering the Language</h1>
      <h2>Java is not the same as JavaScript</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
    </div>
  );
};

export default useStatePage;
