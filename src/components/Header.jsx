import styled from '@emotion/styled';
import logo from '../image/logo.jpg';
import {AppBar, Toolbar} from '@mui/material';

const AppBars = styled(AppBar)`
    background: #000
`;

const Header = () => {
  return (
    <>
        <AppBars position="static">
            <Toolbar>
                <img src={logo} alt="logo" style={{width: 250}} />
            </Toolbar>
        </AppBars>
    </>
  )
}

export default Header