import Img from 'next/image';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import { ChatMessage } from '../../lib/type';

interface IChatMessage {
  message: ChatMessage;
  isSent: boolean;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      padding: 5,
    },
    message: {
      padding: 10,
    },
  }),
);

const ChatMessageComponent: React.FC<IChatMessage> = ({ message, isSent }): JSX.Element => {
  const classes = useStyles();
  const sentStyle = isSent && {
    root: { flexDirection: 'row-reverse' },
    message: { textAlign: 'right' },
  };

  return (
    <Box className={classes.root} sx={sentStyle.root}>
      <Img src={message.sentBy.profilePic} width='50' height='50'></Img>
      <Box className={classes.message} sx={sentStyle.message}>
        <Typography>{message.sentBy.email}</Typography>
        <Typography>{message.messageText}</Typography>
      </Box>
    </Box>
  );
};

export default ChatMessageComponent;
