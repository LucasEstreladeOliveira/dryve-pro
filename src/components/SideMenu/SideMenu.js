// vendors
import { useState } from 'react'
import { styled, useTheme } from '@material-ui/core/styles';
import MuiDrawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { useRouter } from "next/router";

// components
import { ButtonIcon, ButtonList } from '@/components/ButtonIcon/ButtonIcon';
import Image from 'next/image'
import Link from 'next/link'
import { SideMenuButton } from './styled'

// theming
import overrideTheme from '@/theme/overrideTheme'

// assets
import leftArrow from '@/assets/left-arrow.svg'
import rightArrow from '@/assets/right-arrow.svg'

// utils
import menuList from '@/utils/menuList'

const drawerWidth = 240;

const openedMixin = (theme) => {
  return {
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
}};

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `88px`,
  [theme.breakpoints.up('sm')]: {
    width: `88px`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function SideMenu () {
  const theme = useTheme(overrideTheme);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleIcon(state, icon) {    
    const handledIcon = state ? require(`@/assets/${icon}-white.svg`) : require(`@/assets/${icon}-blue.svg`)
    return handledIcon 
  }
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
      </DrawerHeader>
      <Divider />
      <ButtonList>
        {menuList.map((item, index) => (
          <Link href={item.route} key={index+item.label} passHref={true}>
            <ButtonIcon active={router.pathname.includes(item.route)} open={open}>
                <Image src={handleIcon(router.pathname.includes(item.route), item.icon)} alt={item.label} layout="fixed"/>
                { open ? item.label : ''}
            </ButtonIcon>
          </Link>
        ))}
      </ButtonList>
      <SideMenuButton open={open}>
          <Image 
            src={open ? leftArrow : rightArrow} 
            onClick={open ? () => handleDrawerClose() : () => handleDrawerOpen()}
            alt="dryve-pro" 
            layout="fixed"/>
      </SideMenuButton>
    </Drawer>
  ) 
}

export default SideMenu