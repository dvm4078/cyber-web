import { Outlet } from 'react-router-dom';
import Header from './Header'

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />

    </>
  )
}

DefaultLayout.propTypes = {}

export default DefaultLayout
