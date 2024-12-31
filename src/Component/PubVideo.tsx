function Pub() {
  return (
    <>
      <div className="pub_container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/samnD_4Nu5s"
          title="Example Video"
          frameBorder="0" // Correct camelCase property
          allow="autoplay; encrypted-media"
          referrerPolicy="no-referrer"
          allowFullScreen
        />
      </div>
    </>
  );
}
export default Pub;
