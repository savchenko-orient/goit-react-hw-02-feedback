import PropTypes from 'prop-types'
import { List, ListItem, IsOnline, IsOffline, Avatar, Name } from './Friends.styled'
function FriendList({ data }) {
    return (
        <List>
            {data.map(({ id, isOnline, avatar, name }) => {
                return (<ListItem key={id} >
                    {isOnline ? <IsOnline /> : <IsOffline />}
                    <Avatar src={avatar} alt="User avatar" />
                    <Name >{name}</Name>
                </ListItem>)
            })
            }
        </List>
    )
}

FriendList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FriendList
