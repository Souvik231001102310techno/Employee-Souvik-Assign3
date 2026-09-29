import "./Filters.css";

function Filters({
  search,
  setSearch,
  department,
  setDepartment,
  departments,
  employeeCount
}) {
  return (
    <div className="filters">

      <div className="search-wrapper">

        <span>⌕</span>

        <input
          type="text"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          placeholder="Search employee, ID or department..."
        />

        {search && (
          <button
            onClick={() => setSearch("")}
          >
            ×
          </button>
        )}

      </div>

      <div className="department-filter">

        <label>
          Department
        </label>

        <select
          value={department}
          onChange={(event) =>
            setDepartment(event.target.value)
          }
        >
          {departments.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

      </div>

      <div className="result-count">
        {employeeCount} Result
        {employeeCount !== 1 ? "s" : ""}
      </div>

    </div>
  );
}

export default Filters;