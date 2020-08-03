import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const EventCard = ({ imgUrl, title, onClick, selected }) => {
  console.log(selected === title);
  return (
    <Card
      hoverable
      bordered={selected === title}
      style={{ width: 240, margin: "0 24px 24px 24px" }}
      cover={<img alt="example" className="card-image" src={imgUrl} />}
      onClick={onClick}
    >
      <Meta title={title} />
    </Card>
  );
};

export default EventCard;
