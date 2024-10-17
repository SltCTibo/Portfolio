const LargeProjectCard = ({ title, subtitle, description, skills, gihtubLink, productionLink }) => {
    return (
        <div className="flex flex-col w-full space-y-10">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{gihtubLink}</p>
            <p>{description}</p>
            <p>{skills}</p>
            <p>{productionLink}</p>
        </div>
    )
}

const MediumProjectCard = ({ title, subtitle, description, skills, gihtubLink, progress }) => {
    return (
        <div className="w-[70%]">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{gihtubLink}</p>
            <p>{description}</p>
            <p>{skills}</p>
            <p>{progress}</p>
        </div>
    )
}

const SmallProjectCard = ({ title, subtitle, description, skills, startDate }) => {
    return (
        <div className="w-full">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
            <p>{startDate}</p>
            <p>{skills}</p>
        </div>
    )
}

const ProjectCard = ({ data, size }) => {
    switch (size) {
        case "large":
            return <LargeProjectCard title={data.name} subtitle={data.subtitle} description={data.description} skills={data.skills} gihtubLink={data.gihtubLink} productionLink={data.productionLink} />
        case "medium":
            return <MediumProjectCard title={data.name} description={data.description} skills={data.skills} gihtubLink={data.gihtubLink} progress={data.progress} />
        case "small":
            return <SmallProjectCard title={data.name} description={data.description} skills={data.skills} startDate={data.startDate}/>
        default:
            return <div>Rien du tout</div>
    }
}

export default ProjectCard;