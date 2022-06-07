

const AppInfo = ({employee, increase}) => {
    return (
        <div className="w-full bg-violet-500 p-5 space-y-3">
            <h1  className="text-5xl text-white  font-semibold">Учет сотрудников в комании А</h1>
            <h2 className="text-3xl text-white">Общее число сотрудников: {employee}</h2>
            <h2 className="text-3xl text-white">Премию получат: {increase} </h2>

        </div>
    )
}
export default AppInfo