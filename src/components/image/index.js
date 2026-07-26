import Image from "next/image"
export default function Images(props){
    const {src,alttext,wd,hg,className  }=props;
    return(
        <>
        <Image src={src} alt={alttext} width={wd} height={hg} className={className} {...props}/>
        </>
    )
}