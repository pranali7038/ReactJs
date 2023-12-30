function LiftingStateUp(props)
{
    const data="pranali jahagirdar"
    return(
        <div>
            <h2>User Name</h2>
            <button onClick={()=>props.alert(data)}>Cliclk Me</button>
        </div>
    )
}

export default LiftingStateUp;