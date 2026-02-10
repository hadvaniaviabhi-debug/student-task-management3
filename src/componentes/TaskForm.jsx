import React, { useEffect, useState } from "react";

export default function TaskForm({ addTask, editingTask, updateTask }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    date: "",
    priority: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newError = {};

    // Title validation (required + max 6 chars)
    if (!formData.title.trim()) {
      newError.title = "Task title is required";
    } else if (formData.title.trim().length > 6) {
      newError.title = "Title must be maximum 6 characters";
    }

    if (!formData.date.trim()) {
      newError.date = "Due date is required";
    }

    if (!formData.desc.trim()) {
      newError.desc = "Description is required";
    } else if (formData.desc.trim().length > 12) {
      newError.desc = "Description must be at least 12 characters";
    }

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  useEffect(() => {
    setFormData(editingTask);
  }, [editingTask]);

  const handleAdd = (e) => {
    console.log(e);
    e.preventDefault();
    if (validate()) {
      if (editingTask) {
        updateTask(formData);
      } else {
        addTask(formData);
      }
    }
  };
  return (
    <>
      <div className="add-task-card">
        <h2 style={{ marginBottom: "15px" }}>Add New Task</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="Task Title"
              name="title"
              id="title"
              value={formData?.title}
              onChange={handleChange}
            ></input>
            {error.title && <span className="error-msg">{error.title}</span>}
          </div>

          <div>
            <textarea
              placeholder="Description"
              rows="3"
              name="desc"
              id="desc"
              value={formData?.desc}
              onChange={handleChange}
            ></textarea>
            {error.desc && <span className="error-msg">{error.desc}</span>}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1 }}>
              <input
                type="date"
                name="date"
                id="date"
                value={formData?.date}
                onChange={handleChange}
              />
              {error.date && <span className="error-msg">{error.date}</span>}
            </div>

            <div style={{ flex: 1 }}>
              <select
                name="priority"
                id="priority"
                value={formData?.priority}
                onChange={handleChange}
              >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>
            </div>
          </div>

          <div
            className="form-action"
            style={{ display: "flex", gap: "10px", marginTop: "10px" }}
          >
            <button
              type="button"
              className="btn-primary"
              style={{ flex: 1 }}
              onClick={handleAdd}
            >
              {editingTask ? "update" : "Add"}Task
            </button>

            <button
              type="button"
              className="btn-secondary"
              style={{ flex: 1 }}
              onClick={() =>
                setFormData({
                  title: "",
                  desc: "",
                  date: "",
                  priority: "Low",
                })
              }
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
