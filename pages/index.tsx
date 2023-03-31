import Banner from '@component/modules/banner/Banner'
import BlogContext from '@component/modules/blodcontext/BlogContext'
import BlogImages from '@component/modules/blogimages/BlogImages'
import BlogText from '@component/modules/blogText/BlogText'
import Footer from '@component/modules/footer/Footer'
import Header from '@component/modules/header/Header'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <BlogContext />
     <BlogImages />
     <BlogText />
     <Footer />
    </>
  )
}
