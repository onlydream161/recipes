import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { withProviders } from '@/app/providers'
import { HomePage, RecipeSinglePage, RecipesPage } from '@/views'
import { ContentLayout } from '@/shared/layouts'
import { RECIPES_URL } from '@/shared/config'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContentLayout children={<HomePage />} />,
  },
  {
    path: RECIPES_URL,
    element: <ContentLayout children={<RecipesPage />} />,
  },
  {
    path: `${RECIPES_URL}/:id`,
    element: <ContentLayout children={<RecipeSinglePage />} />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default withProviders(App)
