import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

function Header(props) {
    return (
        <header className="App-header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color="inherit" position="static" sx={{ width: "100%" }}>
                    {props.children}
                </AppBar>
            </Box>
        </header>
    )
}

export default Header
