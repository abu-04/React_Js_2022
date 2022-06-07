import EmployeeListItem from "../employee-list-item/employee-list-item"



const EmployeeList = ({data, onDelete, onToggleIncrease}) => {
    const employees = data.map((employee) => {
        const {id, ...others} = employee
        return (
            <EmployeeListItem key={id} {...others} onDelete={() => onDelete(id)} onToggleIncrease={() => onToggleIncrease(id)} />
        )

    })
    return (
        <ul className="divide-y border">
            {employees}
        </ul>
    )
}
export default EmployeeList