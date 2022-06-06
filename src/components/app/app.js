import AppAddForm from "../app-add-form/app-add-form"
import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import AppSearchPanel from "../app-search-panel/app-search-panel"
import EmployeeList from "../employee-list/employee-list"





const App =() => {

    const data = [
        {name: 'Abdullo', salary: '20000', id: 1, increase: true},
        {name: 'Alisher', salary: '30000', id: 2, increase: false},
        {name: 'Alijon', salary: '40000', id: 3, increase: false}
    ]
    return (
    <div className="w-4/6 mx-auto my-16 space-y-5 rounded-lg overflow-hidden">
        <AppInfo />
        <div className="bg-violet-500 w-full p-5 space-y-4">
            <AppSearchPanel />
            <AppFilter />
        </div>
        <EmployeeList data={data} />
        <AppAddForm />
        
    </div>
  
    )
}
export default App