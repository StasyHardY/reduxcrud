import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddUserButton from "../../components/AddUserButton";
import { deleteUser, getUsers } from "./userSlice";


const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const userss = useSelector((state) => state.users.users)

  const hadleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  useEffect(() => {
    dispatch(getUsers())
  }, [userss])

  


  const renderCard = () =>
    users.map((user) => (
      <div
        className="bg-gray-300 p-5 w-full flex items-center justify-between"
        key={user.id}
      >
        
        <div className="flex flex-col items-center justify-center gap-4">
          
        {userss === false ? <div>пусто</div> : <button className="border-2  p-2" onClick={() => dispatch(getUsers())}>Получить сотрудников</button> }
        <div className="flex flex-start flex-col text-start">
          сотРУдниКИ
        
        </div>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-700">{users.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link to={`edit-user/${user.id}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </Link>

          <button onClick={() => hadleRemoveUser(user.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    ));
  return (
    <div className="flex w-full flex-col items-center">
      {userss !== [] ? ' не пустой массив' : 'пустой массив'}
      
      
      <Link to="/add-user">
        <AddUserButton>Add User</AddUserButton>
      </Link>
      {/* {users?.map(user => (
        
        <h3  className="font-bold text-lg text-gray-700" key={user.employeeId}>{user.firstName}</h3>
      
      
    ))} */}
      <div className="w-full">
        {users ? (
          renderCard()
        ) : users?.map(user => (
          <div key={user.employeeId}>
          
          <div>{user.firstName}</div>
          </div>
        )) (
          
         
          
          
        )}
      </div>
    </div>
  );
};

export default UserList;
