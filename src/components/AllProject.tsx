
import { BackgroundGradientDemo } from "./Projects";
import Git from '../app/Github.jpeg';
import X from '../app/X.png';

import QrScan from '../Assets/Qr Scan.png';
import ShopEase from '../Assets/ShopEase.png';
import CodeCollab from '../Assets/CodeCollab.png';

export default function All(){
    const obj1 = {
        heading : "QR Entry-Exit System",
        para : "We avoid the mannual making log when use make entry exit from University gate (MERN)",
        image : QrScan
    }
    const obj2 = {
        heading : "ShopeEase",
        para : "A DeskTop App which grocery shop owner to keep track of utitlies and their suppliers",
        image : ShopEase
    }

    const obj3 = {
        heading : "Web Chat",
        para : "online chating web app where anyomously anyone can make chat",
        image : X
    }

    const obj4 = {
        heading : "CodeCollab :- working on it",
        para : "A platfromm where evry one make work on sme code and resolve error if any at real time  similar to google docs",
        image : CodeCollab
    }

    return(
        <div className="gap-4 justify-items-center content-center m-2 p-4 flex flex-col sm:flex-row sm:w-auto">
            <BackgroundGradientDemo  obj1 = {obj1}/>
            <BackgroundGradientDemo  obj1 = {obj2}/>
            <BackgroundGradientDemo  obj1 = {obj3}/>
            <BackgroundGradientDemo  obj1 = {obj4}/>
        </div>
    )
}