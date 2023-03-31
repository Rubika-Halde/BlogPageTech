import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const BlogImages = () => {
  return (
    <div className="BlogImages">
      <div className="blogimages_left">
        <img
          className="blogimages_left_img"
          src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <h1 className="blogimages_left_heading">
          Rover raised $65 million for pet sitting
        </h1>
        <p className="blogimages_left_para">
          Finding temporary housing for your dog should be as easy as renting an
          Airbnb. That’s the idea behind Rover{' '}
        </p>
        <a href="#" className="blogimages_left_btn">
          Read More <AiOutlineArrowRight />
        </a>
      </div>
      <div className="blogimages_left">
        <img
          className="blogimages_left_img"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <h1 className="blogimages_left_heading">
          MateLabs mixes machine learning with IFTTT
        </h1>
        <p className="blogimages_left_para">
          If you’ve ever wanted to train a machine learning model and integrate
          it with IFTTT, you now can with ...
        </p>
        <a href="#" className="blogimages_left_btn">
          Read More <AiOutlineArrowRight />
        </a>
      </div>
      <div className="blogimages_left">
        <img
          className="blogimages_left_img"
          src="https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMzfHx3ZWJzaXRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <h1 className="blogimages_left_heading">
          US venture investment ticks up
        </h1>
        <p className="blogimages_left_para">
          Venture investment in U.S. startups rose sequentially in the second
          quarter of 2017, boosted by large, ate-stage financings
        </p>
        <a href="#" className="blogimages_left_btn">
          Read More <AiOutlineArrowRight />
        </a>
      </div>
      <div className="blogimages_left">
        <img
          className="blogimages_left_img"
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkyfHx3ZWJzaXRlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <h1 className="blogimages_left_heading">
          Startup Insticator raises $5.2M
        </h1>
        <p className="blogimages_left_para">
          Insticator is announcing that it has raised $5.2 million in Series A
          funding. The startup allows online publishers to add quizzes ...
        </p>
        <a href="#" className="blogimages_left_btn">
          Read More <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  )
}

export default BlogImages
