import { FC, PropsWithChildren } from 'react'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export interface ContentLayoutProps {
  withHeaderMobile?: boolean
  withFooter?: boolean
  footerClassName?: string
}

export const ContentLayout: FC<PropsWithChildren<ContentLayoutProps>> = ({ children, withFooter = true }) => (
  <>
    <Header />
    <main className='flex flex-col max-w-screen-main w-full min-h-mobile-content desktop:min-h-content mx-auto tablet:px-[100px]'>
      {children}
    </main>
    {withFooter && <Footer />}
  </>
)
