import EmployeeListItem from "../employee-list-item/employee-list-item"



const EmployeeList = ({data}) => {
    const employees = data.map((employee) => {
        return (
            <li><EmployeeListItem  {...employee} /></li>
        )

    })
    return (
        <ul className="divide-y border">
            
            {employees}
        </ul>
    )
}
export default EmployeeList