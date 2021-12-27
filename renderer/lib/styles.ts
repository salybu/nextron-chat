import { Button, createStyles, makeStyles, styled } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export const displayOneLine = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export const alignCenter = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

export const useAlignCenter = makeStyles(() =>
  createStyles({
    root: alignCenter as CSSProperties,
  }),
);

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
