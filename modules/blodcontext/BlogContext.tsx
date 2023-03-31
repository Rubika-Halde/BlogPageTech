import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const BlogContext = () => {
  return (
    <div className="BlogContext">
      <div className="blog_left">
        <img
          className="blog_left-img"
          src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <h1 className="blog_left-heading">Analyzing Spotify Music UI/UX</h1>
        <p className="blog_left-para">
          Siri's latest trick is offering a hands-free TV viewing experience,
          that will allow consumers to turn on or off their television, change
          inputs, fast forward.
        </p>
        <button className="blog_left-btn">READ ARTICLE</button>
      </div>
      <div className="blog_middle">
        <img
          className="blog_middle_img"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <h1 className="blog_middle_heading">
          Continuous Design and Good Strategies
        </h1>
        <p className="blog_middle_para">
          As Uber works through a huge amount of internal management turmoil,
          the company is also consolidating and rationalizing more of its
          international business.
        </p>
        <button className="blog_middle_btn">READ ARTICLE</button>
      </div>
      <div className="blog_right">
        <div className="blog_right_first">
          <h1 className="blog_right_first_heading">
            Warner Music Group buys tickets
          </h1>
          <p className="blog_right_first_para">
            We’re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game of life you
            need to appreciate every moment. A lot of people don’t appreciate
            the moment until it’s passed.{' '}
          </p>
          <a href="#" className="blog_right_first_btn">
            Read More <AiOutlineArrowRight />
          </a>
        </div>
        <div className="blog_right-second">
          <h1 className="blog_right_second_heading">
            A healthy body is light and silent
          </h1>
          <p className="blog_right_second_para">
            That’s what I do. That’s what I’m here for. Don’t be afraid to be
            wrong because you can’t learn anything from a compliment.
          </p>
          <a href="#" className="blog_right_second_btn">
            Read More <AiOutlineArrowRight />
          </a>
        </div>
        <div className="blog_right-third">
          <h1 className="blog_right-third_heading">
            The human brain in the new Era
          </h1>
          <p className="blog_right-third_para">
            We’re not always in the position that we want to be at. We’re
            constantly growing. We’re constantly making mistakes. We’re
            constantly trying to express ourselves
          </p>
          <a href="#" className="blog_right-third_btn">
            Read More
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogContext
