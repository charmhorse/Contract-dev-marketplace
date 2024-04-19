// ** React Imports
import { ReactNode } from 'react'

import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import VerticalLayout from 'src/@core/layouts/VerticalLayout'

import VerticalNavItems from 'src/navigation/vertical'

// ** Component Import
import UpgradeToProButton from './components/UpgradeToProButton'
import VerticalAppBarContent from './components/vertical/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const UpgradeToProImg = () => {
    return (
      <Box sx={{ mx: 'auto' }}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://themeselection.com/products/materio-mui-react-nextjs-admin-template/'
        >
          <img width={230} alt='upgrade to premium' src={`/images/misc/upgrade-banner-${settings.mode}.png`} />
        </a>
      </Box>
    )
  }

  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={VerticalNavItems()} // Navigation Items
      afterVerticalNavMenuContent={UpgradeToProImg}
      verticalAppBarContent={(
        props // AppBar Content
      ) => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
      <UpgradeToProButton />
    </VerticalLayout>
  )
}

export default UserLayout
