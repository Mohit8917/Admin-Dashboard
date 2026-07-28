export default function Button(props){
    const {btntext,type,className}=props;
    return(
        <>
        <button type={type} className={className} {...props} >{btntext}</button>
        </>
    )
} 


