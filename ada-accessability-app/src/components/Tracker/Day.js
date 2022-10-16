import Entry from "./Entry";

import { BsChevronDown } from "react-icons/bs";

const Day = ({ entries, dayOfWeek, dateNum }) => {
  return (
    <div className="day">
      <h4 className="uppercase">{dayOfWeek}</h4>

      <h2 className="uppercase">{dateNum}</h2>
      {entries.map((entry) => {
        return <Entry entry={entry} />;
      })}
      {entries.length > 5 ? (
        <BsChevronDown
          className="down-caret"
          style={{ color: "#008080", fontSize: "20px" }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Day;
