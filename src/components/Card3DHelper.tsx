import LeetCode from '../app/LeetCode.png'
import X from '../app/X.png'
import GFG from '../app/GFG.jpg'
import Git from '../app/Github.jpeg'
import CN from '../app/Coding-Ninjas.jpg'
import { ThreeDCardDemo } from './Card3D'

export default function CardHelper (){
    const card01 = {
        head : "LeetCode :- Coding Practice",
        para : " Passionate Problem Solver | Solved 300+ LeetCode problems across various topics including data structures, algorithms, and system design. Continuously improving problem-solving skills through daily challenges and exploring optimized solutions.",
        image : LeetCode,
        url : "https://leetcode.com/u/Gaurav_krrr/"
    }
    const card02 = {
        head : "GeeksForGeeks :- Coding Practice",
        para : " I am also solving problem on GeekForGeeks for improve my self",
        image : GFG,
        url : "https://www.geeksforgeeks.org/user/gauravkrrr/"
    }
    const card03 = {
        head : "GitHub :- Coding Practice",
        para : " Working collobrativly ",
        image : Git,
        url : "https://github.com/gk022135"
    }
    

    return (
        <div className='flex flex-col gap-4 sm:flex-row w-auto p-4 m-2'>
            <ThreeDCardDemo card01 = {card01} />

            <ThreeDCardDemo card01 = {card02} />

            <ThreeDCardDemo card01 = {card03} />


        </div>
    )
}