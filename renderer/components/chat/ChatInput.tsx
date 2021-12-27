import { Dispatch, FormEvent, SetStateAction } from 'react';
import { TextField } from '@material-ui/core';
import { StyledButton } from '../../lib/styles';

interface IChatInput {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  sendMessage: (e: FormEvent<HTMLFormElement>) => void;
}

const ChatInput: React.FC<IChatInput> = ({ input, setInput, sendMessage }): JSX.Element => {
  return (
    <form onSubmit={sendMessage}>
      <div style={{ display: 'flex' }}>
        <TextField variant='outlined' value={input} onChange={(e) => setInput(e.target.value)} placeholder='say something nice' style={{ flexGrow: 1 }} />
        <StyledButton type='submit' disabled={!input} style={{ padding: 15 }}>
          🕊️ Send
        </StyledButton>
      </div>
    </form>
  );
};

export default ChatInput;
