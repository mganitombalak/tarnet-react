import React from "react";

const Datatable = (props) => {
  return (
    <table className="ui selectable celled table">
      <thead>
        <tr>
            {props.columns.map((item, index) => (
                <th key={index}>{item}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.displayOrder}</td>
            <td>{item.name}</td>
            {item.isActive &&
                <td>
                <i className="toggle on icon"></i>{" "}
                </td>
            }
            {!item.isActive &&
                <td>
                    <i className="toggle off icon"></i>{" "}
                </td>
            }
            <td>{item.createdAt}</td>
            <td>
              <i className="trash alternate icon"></i>{" "}
              <i className="edit icon"></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
