function ReusableComponent(props)
{
    return(
        <div>
            <span>{props.item.name}</span>
            <span>{props.item.email}</span>
            <span>{props.item.contact}</span>
        </div>
    )
}

export default ReusableComponent;