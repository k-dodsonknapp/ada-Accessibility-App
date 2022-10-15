const Entry = ({ entry }) => {
  return (
    <div className="entry">
      <p>{entry.rating}</p>
      <p>{entry.title}</p>
    </div>
  );
};

export default Entry;
