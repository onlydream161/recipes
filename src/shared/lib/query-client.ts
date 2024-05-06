import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const getSingleRequestTarget = (id: number | string, target: string): string =>
  target.replace(/\:id/, String(id))
