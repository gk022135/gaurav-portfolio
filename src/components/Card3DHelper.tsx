"use client"

import { Code,Link2 } from "lucide-react";

export default function CardHelper() {
    const codingPlatforms = [
        { name: "LeetCode", solved: 470, total: 3000, rating: 1350, color: "bg-yellow-500" , url : "https://leetcode.com/u/Gaurav_krrr/"},
        { name: "GeeksForGeeks", solved: 180, total: 2000, rating: 0, color: "bg-orange-500" , url : "https://www.geeksforgeeks.org/user/gauravkrrr/"},
        { name: "Codeforces", solved: 5, total: 3000, rating: 0, color: "bg-blue-500", url : "https://codeforces.com/profile/gk022135" },
        { name: "HackerRank", solved: 50, total: 3000, rating: 0, color: "bg-green-500", url : "https://www.hackerrank.com/profile/gk022135" }
    ];


    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Coding Platforms
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {codingPlatforms.map((platform, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                            <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <Code size={24} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{platform.name}</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Solved:</span>
                                    <span className="text-green-400">{platform.solved}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-300">Rating:</span>
                                    <span className="text-blue-400">{platform.rating}</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className={`${platform.color} h-2 rounded-full transition-all duration-1000`}
                                        style={{ width: `${(platform.solved / platform.total) * 100}%` }}
                                    />
                                </div>
                                <a href={platform.url}><Link2 size={30} color="green" /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}