import { FriendListItem } from "./FriendListItem"
import {List} from "./FriendList.styled"

export function FriendList({ friends }) {
    return <List>
        { friends.map(({avatar, name, isOnline, id}) => {
            return (<FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />)
            }
        )}
    </List>
}