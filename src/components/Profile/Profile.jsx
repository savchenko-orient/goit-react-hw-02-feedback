import PropTypes from 'prop-types'; // ES6
import { Wrapper, Description, Avatar, Name, Tag, Location, List, ListItem, Span } from './Profile.styled';

const Profile = ({
  username = 'Petra Marica',
  tag = 'pmarica',
  location = 'Salvador, Brasil',
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats = {
    followers: 1000,
    views: 200,
    likes: 35
  }
}) => {
  return (
    <Wrapper >
      <Description >
        <Avatar src={avatar} alt="User avatar" />
        <Name >{username}</Name>
        <Tag >@{tag}</Tag>
        <Location>{location}</Location>

        <List>
          <ListItem >
            <Span>Followers</Span>
            <Span>{stats.followers}</Span>
          </ListItem>
          <ListItem >
            <Span>Likes</Span>
            <Span>{stats.views}</Span>
          </ListItem>
          <ListItem>
            <Span>Views</Span>
            <Span>{stats.likes}</Span>
          </ListItem>
        </List>
      </Description>
    </Wrapper>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}

export default Profile