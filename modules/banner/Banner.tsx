import { useRef } from 'react'

const Banner = ({ blogRef }: any) => {
  return (
    <div className="Banner" ref={blogRef}>
      <div className="banner_left">
        <h1 className="banner_heading">
          A Blog for Passionate People and Website Lovers
        </h1>
        <p className="banner_paragraph">
          Wealth creation is an evolutionarily recent positive-sum game. Status
          is an old zero-sum game. Those attacking wealth creation are often
          just seeking status.
        </p>
        <button className="banner_btn">READ ARTICLE</button>
      </div>
    </div>
  )
}

export default Banner
