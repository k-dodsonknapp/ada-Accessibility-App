import Day from "./Day";
import "./tracker.css";

const Tracker = () => {
  const week = [
    {
      dayOfWeek: "Monday",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Monday",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Monday",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Monday",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Monday",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Monday",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Monday",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
  ];

  return (
    <div className="tracker-page-wrapper">
      <h2>Track your thoughts?</h2>
      <p> October 16 - 23 </p>

      <div className="week">
        {week.map((day) => {
          return <Day dayOfWeek={day.dayOfWeek} entries={day.entries} />;
        })}
      </div>
    </div>
  );
};

export default Tracker;
