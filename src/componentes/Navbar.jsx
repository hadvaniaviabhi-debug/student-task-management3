import React from "react";

function Navbar({title,onLogout,onAddTaskBtnClick,isFormopen}) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{title}</h1>
      </div>
      <div className="navbar-actions">
        <button className={isFormopen?'btn-secondary':'btn-primary'}onClick={onAddTaskBtnClick}>
          {isFormopen? 'Close':'Add task'}</button>
     
      <button className="btn-secondary" onClick={onLogout}>Logout</button>
       </div>
    </nav>
    
  );
}

export default Navbar;