import { createBrowserRouter } from 'react-router-dom'
import { path } from 'src/constants/path'
import MainLayout from 'src/layouts/MainLayout'
import Home from 'src/pages/home/Home'

const router = createBrowserRouter([
  {
    path: path.home,
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  },
  {
    path: path.notFound,
    element: <div>Not Found</div>
  }
])

export default router
