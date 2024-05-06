import compose from 'compose-function'
import withReactQuery from './with-react-query'
import withJotai from './with-jotai'
import { FC } from 'react'

export const withProviders = <T>(component: FC<T>) => compose<FC<T>>(withReactQuery, withJotai)(component)
