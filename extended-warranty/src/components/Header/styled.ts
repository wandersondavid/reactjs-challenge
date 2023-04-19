import { styled } from '@mui/material';

export const HeaderStyled = styled('header')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  position: 'absolute',
  top: 0,
  left: 0,
  height: 100,
  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    margin: '0 auto',
  }
}));
