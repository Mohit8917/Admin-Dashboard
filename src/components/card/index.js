import Images from "../image";  

export default function Card(props){
    const {heading,Num,task,image,hg,wd}=props;
    return(
        <>
            <div className="w-[250px] h-[140px] flex justify-around border-2 rounded-xl bg-white-100">
                <div id="left" className="flex flex-col justify-around">
                    <h1 className="font-semibold">{heading}</h1>
                    <div id="lower">
                        <h1 className="font-bold mb-[20] text-3xl">{Num}</h1>
                        <p>{task}</p>
                    </div>
                </div>
                <div id="right" >
                    <Images src={image} altText={heading} hg={hg} wd={wd} className="mt-[8] p-2 rounded-sm "/>
                </div>
            </div>
        </>
    )
}