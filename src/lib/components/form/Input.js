export default function Input({type = "text", name, id = name, callback, ...props}) {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input onChange={(e) => callback(e.target.value)} id={id + "_input"} name={name} type={type} {...props}/>
    </>
  )
}

/*
<Input type={"text"} name={"pseudo"} id={"pseudo_id"} callback={(pseudo) => setValue((prevState) => ({...prevState, pseudo: pseudo}))} />
 */
