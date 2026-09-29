import "./BottomBar.css";

function BottomBar() {
  return (
    <div className="bottom-bar" id="about">

      <div className="bottom-brand">

        <div className="bottom-logo">
          E
        </div>

        <div className="bottom-brand-text">
          <strong>Employee Directory</strong>
          <span>Employee Management System</span>
        </div>

      </div>

      <div className="bottom-info">
        Built with React
      </div>

      <a
        href="#top"
        className="back-top"
      >
        Back to top ↑
      </a>

    </div>
  );
}

export default BottomBar;