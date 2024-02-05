const MyHOC = (OriginalComponent, name) => {
    const NewComponent = (props) =>{
        return (
        <div className="wrapper"> 
            <OriginalComponent name={name.name} {...props}/> 
        </div>
        )
    }
    return NewComponent
}

export default MyHOC