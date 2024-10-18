const Formation = ({ formation }) => {
    return (
      <div className="space-y-4 flex flex-col items-start justify-center">
        <div>
          <h3 className="text-[24px] md:text-[30px] font-bold">{formation.diploma}</h3>
          <p className="text-gray-400 text-[18px]">{formation.school}</p>
        </div>
        <p className="text-[16px] md:text-[18px] text-justify">{formation.description}</p>
        <p className="text-gray-500 text-[14px]">
          {`${formation.startDate}${formation.endDate !== "" ? " - " + formation.endDate : ""}`}
        </p>
      </div>
    );
  };

export default Formation;