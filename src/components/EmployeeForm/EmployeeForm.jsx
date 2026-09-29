import { useState } from "react";
import "./EmployeeForm.css";

function EmployeeForm({
  onAdd,
  onUpdate,
  editingEmployee,
  onCancel
}) {
  const [form, setForm] = useState(
    editingEmployee || {
      name: "",
      employeeId: "",
      department: "",
      gender: "",
      phone: "",
      localAddress: "",
      permanentAddress: ""
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingEmployee) {
      onUpdate({
        ...form,
        id: editingEmployee.id
      });
    } else {
      onAdd(form);
    }
  };

  return (
    <section className="form-section">

      <div className="form-heading">

        <div>
          <span>
            {editingEmployee
              ? "EDIT PROFILE"
              : "NEW EMPLOYEE"}
          </span>

          <h2>
            {editingEmployee
              ? "Update Employee"
              : "Add Employee"}
          </h2>
        </div>

        <button
          className="close-form"
          onClick={onCancel}
          type="button"
        >
          ×
        </button>

      </div>

      <form
        className="employee-form"
        onSubmit={handleSubmit}
      >

        <div className="input-group">
          <label>Full Name</label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter employee name"
            required
          />
        </div>

        <div className="input-group">
          <label>Employee ID</label>

          <input
            name="employeeId"
            value={form.employeeId}
            onChange={handleChange}
            placeholder="EMP001"
            required
          />
        </div>

        <div className="input-group">
          <label>Department</label>

          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Department
            </option>

            <option value="Human Resources">
              Human Resources
            </option>

            <option value="Finance">
              Finance
            </option>

            <option value="IT">
              IT
            </option>

            <option value="Marketing">
              Marketing
            </option>

            <option value="Operations">
              Operations
            </option>
          </select>
        </div>

        <div className="input-group">
          <label>Gender</label>

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </div>

        <div className="input-group">
          <label>Phone Number</label>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="9876543210"
            type="tel"
            required
          />
        </div>

        <div className="input-group">
          <label>Local Address</label>

          <input
            name="localAddress"
            value={form.localAddress}
            onChange={handleChange}
            placeholder="Current address"
            required
          />
        </div>

        <div className="input-group full">
          <label>Permanent Address</label>

          <textarea
            name="permanentAddress"
            value={form.permanentAddress}
            onChange={handleChange}
            placeholder="Permanent address"
            required
          />
        </div>

        <div className="form-actions">

          <button
            type="button"
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="save-btn"
          >
            {editingEmployee
              ? "Update Employee"
              : "Add Employee"}
          </button>

        </div>

      </form>

    </section>
  );
}

export default EmployeeForm;