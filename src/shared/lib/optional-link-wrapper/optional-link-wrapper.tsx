import { FCWithChildren } from '@/shared/@types/global'
import { Tooltip } from 'antd'
import { Link, NavLink } from 'react-router-dom'

export interface OptionalLinkWrapperProps {
  href?: string
  disabled?: boolean
  isDownload?: boolean
  withTooltip?: boolean
  developed?: boolean
  tooltipLabel?: string
}

export const OptionalLinkWrapper: FCWithChildren<OptionalLinkWrapperProps> = ({
  children,
  href,
  disabled,
  isDownload,
  withTooltip,
  developed,
  tooltipLabel,
}) => (
  <>
    {href && !disabled && !developed ? (
      <Link to={href} download={isDownload}>
        {children}
      </Link>
    ) : (
      <> {developed || withTooltip ? <Tooltip title={tooltipLabel || 'Coming soon'}>{children}</Tooltip> : children}</>
    )}
  </>
)
