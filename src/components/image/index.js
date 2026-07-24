import Image from "next/image"
export default function Images(props){
    const {src,altText,wd,hg,className  }=props;
    return(
        <>
        <Image src={src} alt={altText} width={wd} height={hg} className={className}/>
        </>
    )
}