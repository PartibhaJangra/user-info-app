import UserInputForm from "../../components/user-input-form/user-input-form.component";
import UserListTable from "../../components/user-list-table/user-list-table.component";

import "./user-list.styles.css";

const UserList = () => {
  return (
    <div className="user-list-container">
      <UserInputForm className="child" />
      <UserListTable className="child" />
    </div>
  );
};

export default UserList;
