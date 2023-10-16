import { ProfileCard, Avatar, Description, Name, Tag, Location, Stats, Label, Quantity } from "./Profile.styled"


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