import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../base";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  arrayUnion,
} from "firebase/firestore";
import { doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import "./Assign.css";
import { navigate, useParams } from "@reach/router";
import PickerButton from "antd/es/date-picker/PickerButton";
const Assign = () => {
  const { rid } = useParams();
  const [request, setRequest] = useState(null);
  const [adminList, setAdminList] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      const admins = await firestore.getAdmins();
      setAdminList(admins);
    };
    fetchAdmins();

    const fetchRequest = async () => {
      const req = await firestore.getRequest(rid);
      setRequest(req);
    };
    fetchRequest();
  }, []);

  async function submit(e) {
    e.preventDefault();
    if (!admin) {
      alert("Please select an admin!");
      return;
    }
    await firestore.addRequestAdmin(rid, admin);
    window.location.reload();
  }
  const handleChange = (e) => {
    setAdmin(e.target.value);
  };

  const goBack = () => {
    navigate("/story/" + rid);
    window.location.reload();
  };

  return (
    <div className="assign">
      <div className="story1">
        <h3>Assigned Admins:</h3>
        {/* list of admin names that request has and allow deletion */}
        <ul>
          {request &&
            request.admin_ids.map((adminId) => {
              const admin = adminList.find((admin) => admin.id === adminId);
              // list item that displays admin name and email, with button to remove them from adminlist
              return (
                <li key={adminId}>
                  {admin.name} - {admin.email}
                  <button
                    onClick={async () => {
                      await firestore.removeRequestAdmin(rid, adminId);
                      window.location.reload();
                    }}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
        </ul>
        <h3>Assign {rid} to:</h3>
        {/* dropdown menu containing list of admin names */}

        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Select Assignee</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={handleChange}
            >
              {adminList.map((admin) => {
                return (
                  <option key={admin.id} value={admin.id}>
                    {admin.name} - {admin.email}
                  </option>
                );
              })}
            </select>
            <div onClick={submit} className="edit1">
              Submit
            </div>
          </div>
        </form>
      </div>
      <div className="edit1" onClick={goBack}>
        Go Back
      </div>
    </div>
  );
};
export default Assign;
