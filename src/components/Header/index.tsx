import { Box } from '@mui/material';
import { HeaderMobile } from './header-mobile';
import { HeaderDesktop } from './header-desktop';

function Header() {
  return (
    <Box component="header" py={2}>
      <HeaderMobile />
      <HeaderDesktop />
    </Box>
  );
}

export default Header;
