
import { BackgroundGradientDemo } from "./Projects";
import Git from '../app/Github.jpeg';
import X from '../app/X.png';

import chat from '../Assets/chat-app.png'
import QrScan from '../Assets/Qr-scan.png';
import ShopEase from '../Assets/produc-java.png';
import CodeCollab from '../Assets/collaborative-coding.jpg';
import smvdex from '../Assets/smvdex-home.png'
import todo from '../Assets/todo.png'

export default function All() {
    const obj0 = {
        heading: "SmvdeX",
        para: "A versetile platform where user can make coding and teaching e",
        image: smvdex,
        url : 'projects/SmvDex'
    }
    
    const obj1 = {
        heading: "QR Entry-Exit System",
        para: "We avoid the mannual making log when use make entry exit from University gate (MERN)",
        image: QrScan,
        url : 'projects/Qr-system'
    }
    const obj2 = {
        heading: "ShopeEase",
        para: "A DeskTop App which grocery shop owner to keep track of utitlies and their suppliers",
        image: ShopEase,
        url : 'projects/ShopeEase'
    }

    const obj3 = {
        heading: "Web Chat",
        para: "online chating web app where anyomously anyone can make chat",
        image: chat,
        url : 'projects/chat-app'
    }

    const obj4 = {
        heading: "Shop :- ecommerce",
        para: "Get the experrenc on e-commerce how they work, how redux toolkit is used for adding product cart",
        image: CodeCollab,
        url : 'https://my-shop-app.vercel.app/'
    }
    const obj5 = {
        heading: "Todo app",
        para: "Keep track of your own working, feature like timmer, progress bar etc",
        image: todo,
        url : 'projects/Todo'
    }

    return (
        <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 max-w-7xl mx-auto">
            <BackgroundGradientDemo obj1={obj0} />
            <BackgroundGradientDemo obj1={obj1} />
            <BackgroundGradientDemo obj1={obj2} />
            <BackgroundGradientDemo obj1={obj3} />
            <BackgroundGradientDemo obj1={obj4} />
            <BackgroundGradientDemo obj1={obj5} />
        </div>

    )
}