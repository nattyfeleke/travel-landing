import { createLazyFileRoute } from '@tanstack/react-router'
 import Hero from '../components/Hero'
 import Main from '../components/Main'
 import Footer from '../components/Footer'

export const Route = createLazyFileRoute('/')({
  component: () => <Landing />,
})

 const Landing = ()=>{
   return (
     <div className=''>

     <Hero/>
     <Main />
     <Footer />
   </div>
   )
 }