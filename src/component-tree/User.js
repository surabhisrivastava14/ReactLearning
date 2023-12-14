import React from "react";
import Card from "../components/Card";
import UserImg from "../images/user.png";
import useHeader from "./useHeader";
import useUserEvents from "./useUserEvents";

const User = () => {

  const {header,onChange} = useHeader();
  const {onChangeBackground,onAddRandomProduct,onClick} = useUserEvents();

  const cardProps = {
    imageURL: UserImg,
    title: "User",
    description: "sdfdsuierieriotgtr",
    actionName: "Go Details",
    actionEvent: onClick,
  };

  return (
    //method 1 of passing parameters
    // <Card
    //   imageURL={cardProps.imageURL}
    //   title={cardProps.title}
    //   description={cardProps.description}
    //   actionName={cardProps.actionName}
    //   actionEvent={cardProps.actionEvent}
    // />
    //method 2 of passing parameters
    <>
      {header && (
        <p style={{ minWidth: "100px", minHeight: "20px" }} className="border">
          {header}
        </p>
      )}
      <input
        className="form-control"
        style={{
          maxWidth: "250px",
        }}
        placeholder="Enter User Heading"
        type="text"
        onChange={onChange}
      />
      <Card {...cardProps}></Card>
      <button className="mt-2 btn btn-primary" onClick={onChangeBackground}>
        Set Random Background Color
      </button>
      <button className="mt-2 btn btn-primary" onClick={onAddRandomProduct}>
        Set Random Products
      </button>
    </>
  );
};

export default User;
