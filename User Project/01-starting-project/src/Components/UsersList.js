import UserItem from './UserItem';
import styled from './UserList.module.css';
import Card from './Card';

function UsersList(props){
    return(
        <Card className={styled.users}>
            <ul >
                <li>
                    {props.users.map(user => (
                        <UserItem 
                            key={user.id}
                            name={user.name}
                            age={user.age}
                        />
                    ))}
                </li>
            </ul>
        </Card>
    )
}

export default UsersList;