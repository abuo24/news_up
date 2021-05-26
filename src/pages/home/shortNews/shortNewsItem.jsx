const ShortNewsItem = ({title, create}) => {
    return (<>
            <div className={"row mb-3"}>
                <span className={"col-9"}>{title}</span>
                <span className={"muted text-muted col-3 text-right"}>{create.slice(5,11)}</span>
            </div>
            <span className="line"></span>
        </>
    )
};

export default ShortNewsItem;
