import "./EmployeeCard.css";

function EmployeeCard({
  employee,
  index,
  onEdit,
  onDelete
}) {
  const initials = employee.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Delete ${employee.name}?`
    );

    if (confirmed) {
      onDelete(employee.id);
    }
  };

  return (
    <article
      className="employee-card"
      style={{
        "--delay": `${index * 0.08}s`
      }}
    >

      <div className="card-shine"></div>

      <div className="employee-card-top">

        <span className="employee-number">
          #{String(employee.id).padStart(3, "0")}
        </span>

        <span className="card-arrow">
          ↗
        </span>

      </div>

      <div className="employee-avatar">
        {initials}
      </div>

      <div className="employee-main">

        <span className="profile-label">
          EMPLOYEE PROFILE
        </span>

        <h3>
          {employee.name}
        </h3>

        <p className="employee-id">
          ID: <strong>{employee.employeeId}</strong>
        </p>

        <div className="employee-details">

          <div className="detail">
            <span>Department</span>
            <strong>
              {employee.department}
            </strong>
          </div>

          <div className="detail">
            <span>Gender</span>
            <strong>
              {employee.gender}
            </strong>
          </div>

          <div className="detail">
            <span>Phone</span>
            <strong>
              {employee.phone}
            </strong>
          </div>

        </div>

        <div className="address-box">

          <div>
            <span>Local Address</span>
            <p>
              {employee.localAddress}
            </p>
          </div>

          <div>
            <span>Permanent Address</span>
            <p>
              {employee.permanentAddress}
            </p>
          </div>

        </div>

      </div>

      <div className="employee-actions">

        <button
          className="edit-btn"
          onClick={() => onEdit(employee)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>

      </div>

    </article>
  );
}

export default EmployeeCard;