import { Card } from "./card";

export function HomeTxtCards(){
    return(
        <>
        <Card colour={"green"} variant={"horizontal_md"} className="p-8 w-auto  h-fit">
            <img src="/icons/image1.png" className="w-16 p-2 border rounded-full bg-emerald-200"></img><br/>
            <h3 className="text-2xl font-semibold text-slate-700">Early cancer detection</h3><br></br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi corrupti provident, quis numquam eius non, commodi.</p><br/>
            <h3 className="text-xl font-semibold text-teal-400">Read more</h3>
        </Card>
        <Card colour={"red"} variant={"horizontal_md"} className="p-8 w-auto  h-fit">
            <img src="/icons/image1.png" className="w-16 p-2 border rounded-full bg-emerald-200"></img><br/>
            <h3 className="text-2xl font-semibold text-slate-700">Early cancer detection</h3><br></br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi corrupti provident, quis numquam eius non, commodi.</p><br/>
            <h3 className="text-xl font-semibold text-teal-400">Read more</h3>
        </Card>
        <Card colour={"purple"} variant={"horizontal_md"} className="p-8 w-auto h-fit">
            <img src="/icons/image1.png" className="w-16 p-2 border rounded-full bg-emerald-200"></img><br/>
            <h3 className="text-2xl font-semibold text-slate-700">Early cancer detection</h3><br></br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi corrupti provident, quis numquam eius non, commodi.</p><br/>
            <h3 className="text-xl font-semibold text-teal-400">Read more</h3>
        </Card>
        </>
    )
}