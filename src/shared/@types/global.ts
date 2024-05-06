import { AxiosError } from 'axios'
import { FC, PropsWithChildren } from 'react'
import { UseQueryOptions } from 'react-query'

export type PropsWithClassName<T = unknown> = T & { className?: string }
export type FCWithChildren<T = unknown> = FC<PropsWithChildren<PropsWithClassName<T>>>

export type QueryParams<Response> = Omit<UseQueryOptions<Response, AxiosError, Response>, 'queryKey' | 'queryFn'>
