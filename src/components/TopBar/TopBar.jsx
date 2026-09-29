import "./TopBar.css";

function TopBar({ employeeCount, onAdd }) {
  return (
    <header className="topbar">

      <a
        href="#top"
        className="brand"
      >
        <div className="brand-icon">
          E
        </div>

        <div className="brand-text">
          <strong>Employee</strong>
          <span>Directory</span>
        </div>
      </a>

      <nav className="topbar-nav">
        <a href="#employees">
          Employees
        </a>

        <a href="#about">
          About
        </a>
      </nav>

      <div className="topbar-right">

        <div className="employee-counter">
          <span></span>
          {employeeCount} Employees
        </div>

        <button
          onClick={onAdd}
          className="top-add"
        >
          + Add
        </button>

      </div>

    </header>
  );
}

export default TopBar;