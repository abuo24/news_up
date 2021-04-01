const ShortNewsItem = ({title, create}) => {
    return (<>
            <p className={"row"}>
                <div className={"col-8"}>{title}
                </div>
                <div className={"muted text-muted col-4"}>{create.slice(5,11)}</div>
            </p>
            <span className="line"></span>
        </>
    )
};

export default ShortNewsItem;
