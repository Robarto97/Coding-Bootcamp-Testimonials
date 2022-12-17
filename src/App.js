import "./styles.scss";
import tanya from "./images/image-tanya.jpg";
import john from "./images/image-john.jpg";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    const blogs = document.querySelectorAll(".blog");
    blogs[index].classList.remove("active");
    if (index + 1 > blogs.length - 1) {
      blogs[0].classList.add("active");
      setIndex(0);
      return;
    }
    blogs[index + 1].classList.add("active");
    setIndex((num) => num + 1);
  };
  const handlePrev = () => {
    const blogs = document.querySelectorAll(".blog");
    blogs[index].classList.remove("active");
    if (index - 1 < 0) {
      blogs[blogs.length - 1].classList.add("active");
      setIndex(blogs.length - 1);
      return;
    }
    blogs[index - 1].classList.add("active");
    setIndex((num) => num - 1);
  };
  return (
    <main>
      <div className="blog active">
        <div className="img-wrapper">
          <img src={tanya} alt="" />
          <div className="buttons">
            <button
              onClick={handlePrev}
              className="left"
              aria-label="left-arrow"
            ></button>
            <button
              onClick={handleNext}
              className="right"
              aria-label="right-arrow"
            ></button>
          </div>
        </div>
        <div className="content">
          <p className="opinion">
            “ I’ve been interested in coding for a while but never taken the
            jump, until now. I couldn’t recommend this course enough. I’m now in
            the job of my dreams and so excited about the future. ”
          </p>
          <div className="info">
            <span className="name">Tanya Sinclair</span>
            <span className="position">UX Engineer</span>
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="img-wrapper">
          <img src={john} alt="" />
          <div className="buttons">
            <button
              onClick={handlePrev}
              id="left"
              aria-label="left-arrow"
            ></button>
            <button
              onClick={handleNext}
              id="right"
              aria-label="right-arrow"
            ></button>
          </div>
        </div>
        <div className="content">
          <p className="opinion">
            “ If you want to lay the best foundation possible I’d recommend
            taking this course. The depth the instructors go into is incredible.
            I now feel so confident about starting up as a professional
            developer. ”
          </p>
          <div className="info">
            <span id="name">John Tarkpor</span>
            <span id="position">Junior Front-end Developer</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
