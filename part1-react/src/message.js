const Message = (props) =>{
    console.log(props)
    return <h1 style={{color: props.color}}>{props.msg}</h1>
}

export default Message