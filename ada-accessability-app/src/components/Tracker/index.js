import Day from "./Day";
import "./tracker.css";

const Tracker = () => {
  const week = [
    {
      dayOfWeek: "Sunday",
      dateNum: "16",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Monday",
      dateNum: "17",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Tuesday",
      dateNum: "18",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Wednesday",
      dateNum: "19",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
        { title: "went to the gym", rating: "smile" },
        { title: "went to the gym", rating: "smile" },
      ],
    },

    {
      dayOfWeek: "Thursday",
      dateNum: "20",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
        { title: "meditate", rating: "big smile" },
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Friday",
      dateNum: "21",
      entries: [
        { title: "went to the gym", rating: "smile" },
        { title: "meditate", rating: "big smile" },
      ],
    },
    {
      dayOfWeek: "Saturday",
      dateNum: "22",
      entries: [{ title: "went to the gym", rating: "smile" }],
    },
  ];

  return (
    <div className="tracker-page-wrapper">
      <h2 className="track-your-thoughts">Track your thoughts</h2>
      <p className="date-range">
        {" "}
        &lt; &nbsp; &nbsp; &nbsp; October 16 - 23 &nbsp; &nbsp; &nbsp; &gt;{" "}
      </p>

      <div className="week">
        {week.map((day) => {
          return (
            <Day
              dayOfWeek={day.dayOfWeek}
              entries={day.entries}
              dateNum={day.dateNum}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tracker;
