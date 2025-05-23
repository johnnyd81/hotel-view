import { useState } from "react";
import { useUsercontext } from "../../hooks/useUsercontext"; //imports my user context
import { useAuthContext } from "../../hooks/useAuthContext";
import "./editmodal.css";//import the css file
//a fontawesome icon plays the role of a closing icon to my modal
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const EditModal = ({ user, setOpen }) => {
  //an administrator can change a user's username or delete a user from the database
  const [username, setUsername] = useState("");
  //the dispatch function updates my contextual state
  const { dispatch } = useUsercontext();
  //the server variable gets access to the string that connects to the deployed server
  const { server } = useAuthContext();

  const editUser = async (id) => {
    //newName stores the updated name for a user and only a admin can update a username
    const newName = { username };

    const response = await fetch(server + "/api/users/" + id, {
      method: "PUT", //the put method edits the details of a specific user
      body: JSON.stringify(newName), // the newName has to be turned into a string so JSON.stringify method is used
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    //if an error occurs, log it to the console
    if (!response.ok) {
      console.log(json.error);
    }

    if (response.ok) {
      dispatch({ type: "EDIT_USER", payload: json });
      setOpen(false);
    }
  };
  return (
    <div className="editModal">
      <div className="editModalContainer">
        <div className="modalClose">
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="editForm">
          <label className="formLabel">Name: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="formInput"
            placeholder="Enter a new username"
          />
        </div>
        <div className="formBtns">
          <button className="cancelBtn" onClick={() => setOpen(false)}>
            Cancel
          </button>
          <button
            className="saveBtn"
            disabled={username.length < 2 ? true : false}
            onClick={() => editUser(user._id)}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
