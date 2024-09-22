import { createRootRoute,  Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className=''>

      <Hero/>
      <Main />
      <Footer />
    </div>
      {/* <Outlet /> */}
      <TanStackRouterDevtools />
    </>
  ),
})
