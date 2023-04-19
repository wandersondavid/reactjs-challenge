import { styled } from '@mui/material';

export const FooterStyled = styled('footer')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  position: 'fixed',
  bottom: 0,
  left: 0,
  height: 100,
  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    maxWidth: 1215,
    margin: '0 auto',
  }
}));
