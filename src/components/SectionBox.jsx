import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const SectionBox = styled(Box)(({ theme }) => ({
  position: 'relative',  
  borderRadius: '25px',
  backgroundColor: 'transparent',
  padding: 0,
  '&:after': {
    content: '""',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    boxShadow: 'inset 0 0 0 200px rgba(255,255,255,0.05)',
    zIndex: '-1',
    opacity: '0.3',
    borderRadius: '30px'
  },
}));

export default SectionBox;
