import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";

function EmployeeList({
  employees,
  onEdit,
  onDelete
}) {
  if (employees.length === 0) {
    return (
      <div className="empty-state">

        <div className="empty-icon">
          🔍
        </div>

        <h3>
          No Employees Found
        </h3>

        <p>
          Try changing your search or department filter.
        </p>

      </div>
    );
  }

  return (
    <div className="employee-grid">

      {employees.map((employee, index) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          index={index}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default EmployeeList;