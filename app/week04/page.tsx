"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import {dataItem, appendItem} from "../data/dataItem";
import { useState } from "react";
import { title } from "process";


export default function ToDoList(){

    const todoList = [...dataItem, ...appendItem];
    const [tasks, setTasks] = useState(todoList);
    const [numOfTasks, setNoft] = useState(tasks.length);
    const [status, setStatus] = useState(null);

    const filteredTask = 
            status == null ? tasks
            : tasks.filter(
                (item) => item.status == status
            );
    let name = "Aina Jitchuchuen";
    let major = "เทคโนโลยีสารสนเทศ (Information Technology)";
    let classYear = 2;
    let classSec = "ทส.ท./ทส.ต.";
    let active = true;

    const isActive = (act : boolean) => {
        if(act)
            return <span style={{color: "green"}}>กำลังศึกษาอยู่</span>
        return <span style={{color: "red"}}>ไม่ได้เป็นนักศึกษาแล้ว</span>
    }

    const tmpTdl= filteredTask.map(item=>{
    const {id, title, desc, data_added, author, status} = item;
    return (
      <div className="w-full max-w-sm p-6 bg-blue border border-blue-200 rounded-2xl shadow-md bg-blue-400 dark:border-blue-300" key={id}>
        <h3 className="text-lg font-bold text-gray-200 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{desc}</p>
        <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{data_added} / {item.data_added}</p>
        <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{author}</p>
        <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{status}</p>
      </div>);
});
     const addTask =() => {
        const newTask = {
            id: tasks.length+1,
            title: "ทดสอบเพิ่มงาน",
            desc: "รายละเอียดของงานที่เพิ่ม",
            data_added: "13/07/2569",
            author: "นายทดสอบ ระบบ",
            status: true
        }; 

        setTasks([...tasks, newTask]);
        setNoft(tasks.length+1);
     }
    //const isActive2 = (act : boolean) => (act) ? "กำลังศึกษาอยู่" : "ไม่ได้เป็นนักศึกษาแล้ว";
    console.log(`Name: ${name}`);
    console.log(`Major: ${major}`);

    return(
        <>
        <Header/>
        <div className="flex justify-center mt-30 mb-10">  
            <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs bg-blue-300 ">
            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">To Do List</h5>
             <p className="text-body">
                <p>
                    ชื่อ-สกุล: {name}
                    สาขาวิชา: {major}
                    กลุ่มเรียน/ชั้นปี: {classSec} / {classYear}
                    สถานะภาพการศึกษา: {isActive(active)}
                </p>
            </p>
            </div> 
            </div>

            
            <div className="flex justify-center gap-3  space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-body bg-pink-600 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">งานที่ต้องทำ {numOfTasks} รายการ</div>
                <div>
                    <button onClick={addTask} className="text-body bg-purple-700 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">เพิ่มงาน</button>
                </div>
                <div>
                    

                <div className="inline-flex gap-5 rounded-base shadow-xs -space-x-px" role="group">   
                </div>

                    <button onClick={() => setStatus(null)} className="text-body bg-green-900 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">[A] All</button>
                    <button onClick={() => setStatus(true)} className="text-body bg-blue-700 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">[C] Complete</button>
                    <button onClick={() => setStatus(false)} className="text-body bg-yellow-500 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">[P] Pending</button>
                </div>
            </div>
            <div className="flex justify-center gap-3  space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tmpTdl}
            </div>
        <Footer/>
        </>
    );
}