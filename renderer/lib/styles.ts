import { Button, styled } from '@material-ui/core';

export const displayOneLine = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export const width100 = {
  width: '100%',
  marginBottom: 10,
};

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}`,
  color: `${theme.palette.common.white}`,
  '&:hover': {
    backgroundColor: `${theme.palette.primary.light}`,
  },
}));
