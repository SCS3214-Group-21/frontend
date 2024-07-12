function ServicesCategoryCard(props) {

    const { img, alt, type, href } = props
    return (
        <div>
            <a href={href} className="shadow-xl  card bg-base-100 image-full w-[225px] h-[180px]">
                <figure>
                    <img
                        src={img}
                        alt={alt} />
                </figure>
                <div className="card-body">
                    <div className="justify-start mt-24 card-actions">
                        <h2 className="text-white card-title">{type}</h2>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ServicesCategoryCard;