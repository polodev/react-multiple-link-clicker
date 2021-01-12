function LinkCard({link}) {
    return <div className="card my-2">
        <div className="card-header">
            {link.title}
        </div>
        <div className="card-body">
            <a target="_blank" href={link.url}>{link.url}</a>
            <div className='description' dangerouslySetInnerHTML={{__html: link.description}}>
        </div>
        </div>
    </div>
}

export default LinkCard;

