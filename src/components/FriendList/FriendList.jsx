import { FriendListItem } from "./FriendListItem"
import { List } from "./FriendList.styled"
import PropTypes from 'prop-types'

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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }   
    ))
}