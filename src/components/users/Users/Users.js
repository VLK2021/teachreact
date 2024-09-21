import React from 'react';
import styles from './Users.module.css';
import {Outlet, useNavigate} from "react-router-dom";
import {useGetUsersQuery} from "../../../store/userApi";


const Users = () => {
    const {data: users, error, isLoading} = useGetUsersQuery();
    const navigate = useNavigate();

    if (isLoading) return <div>Завантаження...</div>;
    if (error) return <div>Помилка завантаження користувачів</div>;

    console.log(users);

    return (
        <div>
            <h2>Список користувачів</h2>

            <div>
                <Outlet/>
            </div>

            <ul>
                {users?.map((user) => (
                    <div key={user.id}>
                        <li>{user.name}</li>

                        {/*<button onClick={() => navigate(`/users/${user.id}`)}>Details</button>*/}
                        {/*<button onClick={() => navigate(`/users/${user.id}/posts`)}>User Posts</button>*/}
                            </div>
                            ))}
                    </ul>
                    </div>
                    );
                };

                export default Users;