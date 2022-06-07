import { TrashIcon, BookmarkIcon, StarIcon } from '@heroicons/react/solid'


 const EmployeeListItem = ({name, salary, onDelete, rise, increase, onToggleIncrease}) => {


        
        let clazz = ''

        if(increase) {
            clazz += ' text-red-500'
        }
        let addStar = ''
        if(rise) {
            addStar += ' block'
        } else {
            addStar += ' hidden'

        }
        return (
            <li className={'flex items-center justify-between p-3 px-8'+ clazz}>
                <div className='flex-auto'>{name}</div>
                <div className='text-right'>
                    <input type="text" name="" id="" defaultValue={salary + '$'} />
                </div>
                <div className="flex">
                    <BookmarkIcon className={"w-5  cursor-pointer" + clazz}  onClick={onToggleIncrease} />
                    <TrashIcon className="w-5 text-gray-500 cursor-pointer" onClick={onDelete} />
                    <StarIcon className={"w-5 text-gray-500 cursor-pointer" + addStar} />
                </div>
            </li>  
    )
    



   
}
export default EmployeeListItem
