import { TrashIcon, BookmarkIcon } from '@heroicons/react/solid'


const EmployeeListItem = ({name, salary, increase}) => {

let clazz = ''

    if(increase) {
        clazz += ' text-red-500'
    }

    return (
        <div className={'flex items-center justify-between p-3 px-8'+ clazz}>
            <div className='flex-auto'>{name}</div>
            <div className='text-right'>
                <input type="text" name="" id="" defaultValue={salary + '$'} />
            </div>
            <div className="flex">
                <BookmarkIcon className="w-5 text-gray-500" />
                <TrashIcon className="w-5 text-gray-500" />
            </div>
        </div>
    )
}

export default EmployeeListItem