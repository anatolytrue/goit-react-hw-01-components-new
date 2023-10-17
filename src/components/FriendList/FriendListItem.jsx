import {Item, Status, Avatar, Name} from "./FriendList.styled"

export function FriendListItem({ avatar, name, isOnline, id }) {
    return (<Item>
                <Status isOnline={isOnline} >{' '}●</Status>
                <Avatar src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </Item>)
} 