import { useRef, useState } from 'react'
import { BsHandbagFill } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import Banner from '../banner/Banner'

const Header = () => {
  const blogRef = useRef<any>()
  // console.log(blogRef.current.style)
  const [showMenu, setShowMenu] = useState<any>(true)

  const menuRef = useRef<any>()
  const closeRef = useRef<any>()

  const handleOnMenuClick = () => {
    blogRef.current.style.marginTop = '200'
    menuRef.current.style.display = 'none'
    closeRef.current.style.display = 'block'
    setShowMenu(false)
  }

  const handelOnCloseClick = () => {
    menuRef.current.style.display = 'block'
    closeRef.current.style.display = 'none'
    setShowMenu(true)
  }

  // console.log((menuRef.current.style.display = 'none'))
  return (
    <div className="Header">
      <div className="header_left">
        <img
          className="header-img"
          src="https://www.loopple.com/img/loopple-logo.png"
          alt="Picture of the author"
        />
      </div>
      <div className={showMenu ? 'header-right' : 'sidebar'}>
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">How it Works</a>
        <a href="#">Blog</a>
        <a href="#">
          <BsHandbagFill />
        </a>
      </div>
      <div className="header-menu" ref={menuRef} onClick={handleOnMenuClick}>
        <AiOutlineMenu />
      </div>
      <div className="header-close" ref={closeRef} onClick={handelOnCloseClick}>
        <AiOutlineClose />
      </div>
      <div className="banner-display">
        <Banner blogRef={blogRef} />
      </div>
    </div>
  )
}

export default Header
