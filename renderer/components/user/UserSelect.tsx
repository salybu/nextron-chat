import { Checkbox, ListItem } from '@material-ui/core';
import UserItem from './UserItem';
import { IUser } from '../../lib/type';

interface IUserSelect extends IUser {
  isChecked: Object;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserSelect: React.FC<IUserSelect> = ({ user, isChecked, handleChange }): JSX.Element => {
  return (
    <ListItem key={user.id} style={{ padding: 0 }}>
      {isChecked && <Checkbox checked={isChecked[user.id]} onChange={handleChange} name={user.id} color='primary' />}
      <UserItem user={user} />
    </ListItem>
  );
};

export default UserSelect;
