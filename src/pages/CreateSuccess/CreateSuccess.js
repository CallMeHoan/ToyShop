import React from "react";
import "./CreateSuccess.css";
import { AccountSidebar } from "../../components/AccountSidebar/AcccountSidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const CreateSuccess = () => {
  return (
    <div className="success">
      <div className="page-title">
        <h1 className="title pad">Your Account Has Been Created</h1>
        <span className="path">Home </span>
        <ArrowForwardIosIcon fontSize="13px" />
        <span className="path"> Account </span>
        <ArrowForwardIosIcon fontSize="13px" />
        <span className="path"> success</span>
      </div>
      <div className="account-container">
        <div className="account-left">
          <p>
            Congratulations! Your new account has been successfully created!
          </p>
          <p>
            You can now take advantage of member privileges to enhance your
            online shopping experience with us.
          </p>
          <p>
            If you have ANY questions about the operation of this online shop,
            please e-mail the store owner.
          </p>
          <p>
            A confirmation has been sent to the provided e-mail address. If you
            have not received it within the hour, please contact us.
          </p>
          <button className="btn float-right">Continue</button>
        </div>
        <div className="account-right">
          <AccountSidebar />
        </div>
      </div>
    </div>
  );
};
