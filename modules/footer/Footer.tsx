import React from 'react'
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsPinterest,
} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_soft">
        <h2 className="footer-heading">SOFT</h2>
        <p className="footer_para">The next generation of design systems.</p>
        <div className="footer_logos">
        <a href="#" className='footer_a'> <BsFacebook /></a>
        <a href="#" className='footer_a'> <BsTwitter /></a>
        <a href="#" className='footer_a'> <BsInstagram /></a>
        <a href="#" className='footer_a'> <BsPinterest /></a>
        <a href="#" className='footer_a'> <BsGithub /></a>
        </div>

      </div>
      <div className="footer_company">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
      <div className="footer_pages">
        <h3>Pages</h3>
        <p>Login</p>
        <p>Register</p>
        <p>Add list</p>
        <p>Contact</p>
      </div>
      <div className="footer_legal">
        <h3>Legal</h3>
        <p>Terms</p>
        <p>About Us</p>
        <p>Team</p>
        <p>Privacy</p>
      </div>
      <div className="footer_Resources">
        <h3>Resources</h3>
        <p>Bloag</p>
        <p>Service</p>
        <p>Product</p>
        <p>Pricing</p>
      </div>
    </div>
  )
}

export default Footer
