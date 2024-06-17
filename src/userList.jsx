
import { UserTableRow } from './UserItem';

export const UserList = ({ items, onSalaryUp, onSalaryDown, onSalaryRemove }) => {
    return (
        <>
            <h3>UserList</h3>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(elm =>
                            <UserTableRow
                                key={elm.id}
                                {...elm}
                                onSalaryUp={onSalaryUp}
                                onSalaryDown={onSalaryDown}
                                onSalaryRemove={onSalaryRemove}
                            />
                        )
                    }


                </tbody>
            </table>
        </>
    )
}