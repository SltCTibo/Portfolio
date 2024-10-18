const Formation = ({ formation }) => {
    return (
        <div className="space-y-4 flex flex-col items-start justify-center">
            <div className="">
            <h3 className="text-[30px]">{formation.diploma}</h3>
            <p className="text-gray-400">{formation.school}</p>
            </div>
            <p>{formation.description}</p>
            <p>{`${formation.startDate}${formation.endDate !== "" ? " - "+ formation.endDate : ""}`}</p>
        </div>
    )
}

export default Formation;