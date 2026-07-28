export default function Button(props){
    const {btntext,type,className,theme}=props;
    return(
        <>
        <button type={type} className={className} theme={`${theme}`} {...props}>{btntext}</button>
        </>
    )
} 


