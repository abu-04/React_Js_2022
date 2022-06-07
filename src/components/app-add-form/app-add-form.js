import { Component } from "react";


export default class AppAddForm extends Component {

    constructor (props) {
        super(props)
    }

    render() {
        
        return (
            <div className="bg-violet-500 w-full p-5 space-y-5">
                <h2 className="text-white text-2xl">Добавление нового сотрудника</h2>
                <div className="flex space-x-3">
                    <input type="text" placeholder="Имя"  className="w-80"/>
                    <input type="text" placeholder="З/П" className="w-80" />
                    <button className="py-3 px-4 border border-white rounded-xl text-white">Добавить</button>
                </div>
            </div>
        )
    }
}

