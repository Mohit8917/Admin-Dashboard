export default function Button(props){
    const {btnText,type,className}=props;
    return(
        <>
        <button type={type} className={className} {...props}>{btnText}</button>
        </>
    )
} 


