export const UserTableRow = ({id, name, salary, onSalaryUp , onSalaryDown, onSalaryRemove}) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{salary}</td>
            <td>
                <button className="btn-up" onClick={()=>onSalaryUp(id)}>Salary Up</button>
                <button className="btn-down" onClick={()=>onSalaryDown(id)}>Salary Down</button>
                <button className="btn-rm" onClick={()=>onSalaryRemove(id)}>Remove</button>
            </td>
        </tr>
    )
}