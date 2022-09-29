import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getUserList } from "../../store/user-list/user-list.selector";

import "./user-list-table.styles.css";

const UserListTable = () => {
  const userList = useSelector(getUserList);

  return (
    <div className="user-list-table-container">
      {userList && (
        <table className="user-list-table">
          <thead>
            <tr>
              <th>Picutre</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => {
              return (
                <tr key={user.id ? user.id : index + 1}>
                  <td>
                    <img
                      src={user.avatar}
                      alt={user.first_name + " " + user.last_name}
                    />
                  </td>
                  <td>{user.id ? user.id : index + 1}</td>
                  <td>{user.first_name + " " + user.last_name}</td>
                  <td>
                    <Link>{user.email}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserListTable;
