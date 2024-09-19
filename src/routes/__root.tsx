import { createRootRoute,  Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import Hero from '../components/Hero'
import Main from '../components/Main'

export const Route = createRootRoute({
  component: () => (
    <>
    <div className=''>

      <Hero/>
      <Main />
    </div>
      {/* <Outlet /> */}
      <TanStackRouterDevtools />
    </>
  ),
})
