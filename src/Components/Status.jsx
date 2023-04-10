import "../index.css";

import { useParams } from "@reach/router";
import { useEffect, useState } from "react";
import { auth, firestore } from "../base";

import "./Status.css";

const Status = () => {
  const { rid } = useParams();
  const [requestObject, setRequestObject] = useState(null);
  const [requestAdmins, setRequestAdmins] = useState([]);

  useEffect(() => {
    if (!rid) {
      return;
    }
    const fetchRequest = async () => {
      const request = await firestore.getRequest(rid);
      setRequestObject(request);
      // setRequestAdmins([]);
      // request.admin_ids.forEach((adminId) => {
      //   (async () => {
      //     const admin = await firestore.getUser(adminId);
      //     setRequestAdmins((prev) => [...prev, admin]);
      //   })();
      // });
      // const uniqueAdmins = [...new Set(requestAdmins)];
      // setRequestAdmins(uniqueAdmins);
      console.log(request);
    };
    fetchRequest();
  }, [rid]);

  useEffect(() => {
    const fetchAdmins = async () => {
      const admins = requestObject?.admin_ids.map((adminId) => {
        return (async () => {
          const admin = await firestore.getUser(adminId);
          return admin;
        })();
      });
      setRequestAdmins(await Promise.all(admins));
    };
    fetchAdmins();
  }, [requestObject]);

  const handleEmailButtonClick = (destEmail, destName) => {
    const subject = `Career Advancement Exchange Personal Portfolio Help Request`;
    const body = `Dear ${destName},\n\nMy name is ${auth.currentUser?.displayName}. I am writing in regards to my personal portfolio request.`;
    const mailtoUrl = `mailto:${destEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    // window.location.href = mailtoUrl;
    window.open(mailtoUrl, "_blank");
  };

  const goToCollab = () => {
    window.location.href = "/collab/" + rid;
  };

  if (!requestObject) {
    return (
      <div className="status">
        <h1>
          Loading Request...{" "}
          <div className="spinner-border" role="status"></div>
        </h1>
      </div>
    );
  }
  return (
    <div className="status">
      <h1>Thank you for your submission!</h1>
      <div className="coller">
        <div className="coller1">
          <h2>
            Our team will review your request and get back to you as soon as
            possible.
          </h2>
          {requestAdmins.length ? (
            <>
              <h4>Assigned Admins</h4>
              <ul>
                {requestAdmins.map((admin) => {
                  return (
                    <li key={admin.id} className="adminlist-card">
                      <h2>{admin.name}</h2>
                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          handleEmailButtonClick(admin.email, admin.name)
                        }
                      >
                        Email
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="coller2" onClick={goToCollab}>
          <h2>Visit Creation Page</h2>
          <p>Here you can collaborate on your page with your engineer</p>
        </div>
      </div>
    </div>
  );
};
export default Status;
