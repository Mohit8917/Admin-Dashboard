export default function Button(props){
    const {btntext,type,className,theme}=props;
    return(
        <>
        <button type={type} className={className} {...props} >{btntext}</button>
        </>
    )
} 


