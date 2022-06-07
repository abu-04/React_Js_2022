import { data } from "autoprefixer"
import { Component } from "react"
import AppAddForm from "../app-add-form/app-add-form"
import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import AppSearchPanel from "../app-search-panel/app-search-panel"
import EmployeeList from "../employee-list/employee-list"


export default class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [
                {name: 'Abdullo', salary: '20000', id: 1, increase: true, rise: false},
                {name: 'Alisher', salary: '30000', id: 2, increase: false, rise: false},
                {name: 'Alijon', salary: '40000', id: 3, increase: false, rise: true}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data : data.filter(item => item.id !== id)
            }
        })
    }
    addEmployee = (name, salary) => {
        this.setState(() => {
         data.push({
                name: 'asdf',
                salary: 'dsaf'
            })
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
           data: data.map((elem => {
                if(elem.id === id) {
                    return {...elem, increase: !elem.increase}
                }
                return elem
            }))
        }))
    }

    onToggleRise = (id) => {

    }
    render () {
        
        const {data} = this.state
        const employee = data.length
        const increase = data.filter((item) => item.increase).length

        return (
            <div className="w-4/6 mx-auto my-16 space-y-5 rounded-lg overflow-hidden">
                <AppInfo employee={employee} increase={increase}/>
                <div className="bg-violet-500 w-full p-5 space-y-4">
                    <AppSearchPanel />
                    <AppFilter />
                </div>
                <EmployeeList data={data} onDelete={this.deleteItem} onToggleIncrease={this.onToggleIncrease} />
                <AppAddForm />
                
            </div>
          
            )
    }
}