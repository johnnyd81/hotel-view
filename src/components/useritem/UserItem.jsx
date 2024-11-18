import { useState } from "react";
import { useUsercontext } from "../../hooks/useUsercontext";
import EditModal from "../editmodal/EditModal"; //the edit modal is used to edit a specific user
import "./useritem.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const UserItem = ({ user }) => {
  //opens and closes the modal depending on the boolean value
  const [openModal, setOpenModal] = useState(false);
  //the dispatch function updates the contextual state
  const { dispatch } = useUsercontext();
  const { server } = useAuthContext();

  //the deleteUser function removes a user from the database
  const deleteUser = async (id) => {
    const response = await fetch(server + "/api/users/" + id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }

    if (response.ok) {
      dispatch({ type: "DELETE_USER", payload: json });
    }
  };

  return (
    <>
      <div className="userItem">
        <p>
          <b>Name :</b> {user.username}
        </p>
        <p>
          <b>Id :</b> {user._id}
        </p>
        <p>
          <b>Admin :</b> {user.isAdmin ? "Yes" : "No"}
        </p>
        <div className="btnContainer">
          <button
            className="editBtn"
            onClick={() => setOpenModal(true)}
            title="Edit the user's name"
          >
            Edit
          </button>
          <button
            className="deleteBtn"
            onClick={() => deleteUser(user._id)}
            title="Delete user from the database"
          >
            Delete
          </button>
        </div>
      </div>
      {openModal && <EditModal user={user} setOpen={setOpenModal} />}
    </>
  );
};

export default UserItem;
