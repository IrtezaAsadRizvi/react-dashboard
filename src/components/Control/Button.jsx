import { styled } from '@mui/material/styles';
import { Button as MatButton } from "@mui/material";

const Button = styled(MatButton)(({ theme }) => ({
  position: 'relative',  
  borderRadius: '30px',
  backgroundColor: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
  '&:after': {
    content: '""',
    width: '100%',
    height: '100%',
    // backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    boxShadow: 'inset 0 0 0 200px rgba(255,255,255,0.05)',
    zIndex: '-1',
    opacity: '0.5',
    borderRadius: '30px'
  },
}));

export default Button;
