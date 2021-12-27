import { useEffect, useState } from 'react';
import { Box, createStyles, makeStyles } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Link from '../Link';
import useAuth from '../../lib/context/auth';
import { ChatRoom, UserInfo } from '../../lib/type';
import { displayOneLine } from '../../lib/styles';

interface IRoomItem {
  room: ChatRoom;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 20,
      fontSize: 16,
      borderBottom: 'solid 1px black',
    },
    content: {
      paddingLeft: 10,
      paddingRight: 10,
      ...(displayOneLine as CSSProperties),
    },
  }),
);

const RoomItem: React.FC<IRoomItem> = ({ room }): JSX.Element => {
  const classes = useStyles();
  const { loggedUser } = useAuth();
  const [members, setMembers] = useState<UserInfo[]>();

  useEffect(() => {
    const otherMembers = room.members.filter((member) => member.id !== loggedUser.id);
    setMembers(otherMembers);
  }, []);

  return (
    <Link href='/room/[id]' as={`/room/${room.id}`}>
      <Box className={classes.root}>
        <ChatIcon />
        <div className={classes.content}>
          <>{members?.length + 1} members </>
          <>(with </>
          {members?.map((member, index) => {
            if (index !== members.length - 1) {
              return member.email + ', ';
            } else {
              return member.email + ')';
            }
          })}
        </div>
      </Box>
    </Link>
  );
};

export default RoomItem;
