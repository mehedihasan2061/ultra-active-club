import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='p-3 text-center text-success'>Question</h1>
           
        <div className="blog">
          <h3 className="text-primary">(1) How does React Work?</h3>
          <p>
            Ans: ReactJS divides the UI into isolated reusable pieces of code
            known as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
          <h3 className="text-primary">
            (2) Props and state Between difference?
          </h3>
          <p>
            Ans: Props are used to pass data from one component to another. The
            state is a local data storage that is local to the component only
            and cannot be passed to other components. The this. setState
            property is used to update the state values in the component.
          </p>
          <h3 className="text-primary">
            (3) What is useEffect used for other than data load?
          </h3>
          <p>
            Ans: Placing useEffect inside the component lets us access the count
            state variable (or any props) right from the effect.{" "}
          </p>
        </div>
      </div>
    );
};

export default Blog;