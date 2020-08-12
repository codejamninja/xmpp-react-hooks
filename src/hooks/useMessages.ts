import Jid from '@xmpp-ts/jid';
import { Message } from '@xmpp-ts/message';
import { useSelector } from 'react-redux';
import { State } from '../state';

export default function useMessages(jid: Jid): Message[] {
  return useSelector((state: State) => {
    console.log('state', state.messages);
    console.log(jid.bare().toString(), 'jid');
    return state.messages[jid.bare().toString()];
  });
}
