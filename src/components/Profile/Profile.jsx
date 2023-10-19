import { ProfileCard, Avatar, Description, Name, Tag, Location, Stats, Label, Quantity } from "./Profile.styled"
import PropTypes from 'prop-types'

export function Profile({ username, tag, location, avatar, stats }) {
const { followers, views, likes } = stats 
  return (
  <ProfileCard>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
      />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <li>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </li>
    </Stats>
  </ProfileCard>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.number.isRequired
  )
}
