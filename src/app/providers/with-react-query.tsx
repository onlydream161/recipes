import { Attributes, FC, Factory, ReactElement } from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../../shared/lib/query-client'

const withReactQuery =
  <R extends Attributes>(Component: FC): Factory<R> =>
  (props): ReactElement<R> => {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...props} />
      </QueryClientProvider>
    )
  }

export default withReactQuery
