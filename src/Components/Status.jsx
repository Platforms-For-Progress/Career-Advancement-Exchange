import "../index.css";

import { useParams } from "@reach/router";
import { useEffect, useState } from "react";
import { firestore } from "../base";

const Status = () => {
  const { rid } = useParams();
  const [requestObject, setRequestObject] = useState(null);

  useEffect(() => {
    if (!rid) {
      return;
    }
    const fetchRequest = async () => {
      const request = await firestore.getRequest(rid);
      setRequestObject(request);
      console.log(request);
    };
    fetchRequest();
  }, [rid]);

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
          {/* <p>Ideas: {requestObject.request_data.request_idea}</p>
          <p>Reason for request: {requestObject.request_data.request_reason}</p> */}
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
