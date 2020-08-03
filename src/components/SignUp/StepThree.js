import React, { useState } from "react";
import "./styles.css";
import EventCard from "./EventCard";

import { Card, Typography, Col, Row } from "antd";
const { Meta } = Card;

const { Title } = Typography;

const StepThree = () => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (title) => {
    setSelected(title);
  };
  return (
    <>
      <Title level={2} className="subtitle">
        Select the type of your event
      </Title>
      <div className="cards-wrapper">
        <EventCard
          title="Anniversary"
          imgUrl={require("../../images/love.svg")}
          onClick={() => handleSelect("Anniversary")}
          selected={selected}
        />
        <EventCard
          title="Birthday"
          imgUrl={require("../../images/birthday.svg")}
          onClick={() => handleSelect("Birthday")}
          selected={selected}
        />
        <EventCard
          title="Graduation"
          imgUrl={require("../../images/graduation.svg")}
          onClick={() => handleSelect("Graduation")}
          selected={selected}
        />
        <EventCard
          title="Baby shower"
          imgUrl={require("../../images/baby.svg")}
          onClick={() => handleSelect("Baby shower")}
          selected={selected}
        />
        <EventCard
          title="Mother's Day"
          imgUrl={require("../../images/mother.svg")}
          onClick={() => handleSelect("Mother's Day")}
          selected={selected}
        />
        <EventCard
          title="Father's Day"
          imgUrl={require("../../images/father.svg")}
          onClick={() => handleSelect("Father's Day")}
          selected={selected}
        />
      </div>
    </>
  );
};

export default StepThree;
