import Entry from "./Entry";

const Day = ({ entries, dayOfWeek }) => {
  return (
    <div className="day">
      <h4>{dayOfWeek}</h4>
      {entries.map((entry) => {
        return <Entry entry={entry} />;
      })}
    </div>
  );
};

export default Day;
