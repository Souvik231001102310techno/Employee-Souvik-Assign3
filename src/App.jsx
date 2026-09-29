import { useMemo, useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Filters from "./components/Filters/Filters";
import BottomBar from "./components/BottomBar/BottomBar";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Souvik Roy",
      employeeId: "EMP001",
      department: "IT",
      gender: "Male",
      phone: "9876543210",
      localAddress: "Kolkata, West Bengal",
      permanentAddress: "Jalpiguri, West Bengal"
    },
    {
      id: 2,
      name: "Priya Das",
      employeeId: "EMP002",
      department: "Finance",
      gender: "Female",
      phone: "9876543211",
      localAddress: "Kolkata, West Bengal",
      permanentAddress: "Durgapur, West Bengal"
    },
    {
      id: 3,
      name: "Rahul Roy",
      employeeId: "EMP003",
      department: "IT",
      gender: "Male",
      phone: "9876543212",
      localAddress: "New Town, Kolkata",
      permanentAddress: "Siliguri, West Bengal"
    },
    {
      id: 4,
      name: "Ananya Sen",
      employeeId: "EMP004",
      department: "Marketing",
      gender: "Female",
      phone: "9876543213",
      localAddress: "Salt Lake, Kolkata",
      permanentAddress: "Howrah, West Bengal"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const departments = useMemo(() => {
    return [
      "All",
      ...new Set(
        employees.map((employee) => employee.department)
      )
    ];
  }, [employees]);

  const filteredEmployees = employees.filter((employee) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      employee.name.toLowerCase().includes(searchValue) ||
      employee.employeeId.toLowerCase().includes(searchValue) ||
      employee.department.toLowerCase().includes(searchValue);

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  const addEmployee = (employee) => {
    setEmployees((previous) => [
      ...previous,
      {
        ...employee,
        id: Date.now()
      }
    ]);

    setShowForm(false);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((previous) =>
      previous.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setEditingEmployee(null);
    setShowForm(false);
  };

  const deleteEmployee = (id) => {
    setEmployees((previous) =>
      previous.filter((employee) => employee.id !== id)
    );
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleAdd = () => {
    setEditingEmployee(null);
    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="app" id="top">

      <div className="background-grid"></div>

      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>
      <div className="background-orb orb-three"></div>

      <TopBar
        employeeCount={employees.length}
        onAdd={handleAdd}
      />

      <main>

        <section className="hero-section">

          <div className="hero-content">

            <span className="hero-badge">
              EMPLOYEE MANAGEMENT SYSTEM
            </span>

            <h1>
              Employee
              <span> Directory</span>
            </h1>

            <p>
              Manage employee information, search records,
              filter departments and maintain employee details
              through an interactive React application.
            </p>

            <div className="hero-actions">

              <button
                className="primary-btn"
                onClick={handleAdd}
              >
                + Add Employee
              </button>

              <a
                href="#employees"
                className="secondary-btn"
              >
                Explore Directory
              </a>

            </div>

            <div className="hero-stats">

              <div>
                <strong>{employees.length}</strong>
                <span>Total Employees</span>
              </div>

              <div>
                <strong>{departments.length - 1}</strong>
                <span>Departments</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Access</span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="visual-ring ring-one"></div>

            <div className="visual-ring ring-two"></div>

            <div className="visual-card">

              <div className="visual-top">
                <span>EMPLOYEE</span>
                <span>LIVE</span>
              </div>

              <div className="visual-avatar">
                👨‍💼
              </div>

              <div className="visual-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="visual-bottom">
                <span>Directory</span>
                <b>✓</b>
              </div>

            </div>

          </div>

        </section>

        {showForm && (
          <EmployeeForm
            onAdd={addEmployee}
            onUpdate={updateEmployee}
            editingEmployee={editingEmployee}
            onCancel={() => {
              setShowForm(false);
              setEditingEmployee(null);
            }}
          />
        )}

        <section
          id="employees"
          className="directory-section"
        >

          <div className="section-heading">

            <div>

              <span className="section-number">
                01
              </span>

              <p>
                EMPLOYEE DATABASE
              </p>

              <h2>
                Employee <span>Directory</span>
              </h2>

            </div>

            <button
              className="add-btn"
              onClick={handleAdd}
            >
              + New Employee
            </button>

          </div>

          <Filters
            search={search}
            setSearch={setSearch}
            department={department}
            setDepartment={setDepartment}
            departments={departments}
            employeeCount={filteredEmployees.length}
          />

          <EmployeeList
            employees={filteredEmployees}
            onEdit={handleEdit}
            onDelete={deleteEmployee}
          />

        </section>

      </main>

      <BottomBar />

    </div>
  );
}

export default App;