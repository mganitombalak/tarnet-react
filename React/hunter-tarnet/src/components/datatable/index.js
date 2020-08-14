import React from "react";

const Datatable = (props) => 
{ 
    return (
        <tbody>
            {props.data.map((item, index) =>  
            <tr key={item.id}>
            <td>
                {item.displayOrder}
                </td>
            <td>
                {item.name}
                </td>
            <td>
                <i className={item.isActive ? "toggle on icon" : "toggle of icon"}></i> 
            </td>
            <td>
                {item.createdAt}
            </td>
            <td>
                <i onClick={props.onDelete} className="trash alternate icon"></i>
            </td>
          </tr>   )}               
        </tbody>
      );

}

export default Datatable;