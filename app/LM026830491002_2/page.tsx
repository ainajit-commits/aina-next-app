"use client";
import Header from "./components001/header01";
import Footer from "./components001/footer01";
import { useState } from "react";
import { myPets } from "./components/myPets";
import HerbForm from "./components/HerbFrom";

export default function HerbHome(){

    const todoList = [...myPets];

    const [tasks, setTasks] = useState(todoList);
    const [numOfTasks, setNoft] = useState(tasks.length);
    const [status, setStatus] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [editingTask, setEditingTask] = useState(null);

    const resetEditingTask = () => setEditingTask(null);

    const filteredTask = 
            status == null 
            ? tasks
            : tasks.filter(
                (item) => item.status == status);


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

    const Status = (status : boolean) => {
        if(status)
            return <span style={{color: "green"}}>มีในคลังสินค้า</span>
        return <span style={{color: "red"}}>ไม่มีในคลังสินค้า</span>
    }

    const onEdit = (t) => {
        //alert(`งานที่คุณต้องการแก้ไข ${t}`);
        setEditingTask(t);
    }

    const updateTask = (id, name, status, det) => {
        setTasks(
            tasks => tasks.map(
                t => t.id === id ?
                {
                ...t,
                name: name,
                status: status,
                detail: det
                } : t
            ));
            setEditingTask(null);
    }

    const onDelete = (id) => {
        //alert(`คุณต้องการลบข้อมูล รหัสงาน ${id}?`);
        const updateTasks = tasks.filter(
            item => item.id != id
        );
        setTasks(updateTasks);
    }


    
    const tmpTdl= filteredTask.map((item)=>{
    const {id, name, detail, type, supplier, openStatus } = item;

    return (
      
      <div className="w-full max-w-sm p-6 bg-blue border border-blue-200 rounded-2xl shadow-md bg-blue-400 dark:border-blue-300" key={id}>
        <h3 className="text-lg font-bold text-gray-200 dark:text-white">{name}</h3>
        <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{detail}</p>
        <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{type} </p>
        <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{supplier}</p>
        <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{Status(openStatus)}</p>

        <div className="flex gap-2 mt-2">
    {/* View 
    <button onClick={(e)=>{setSelectedTask(item);setOpen(true);}} className="bg-green-500 text-white px-3 py-1 rounded">View</button>

    {/* Edit 
    <button onClick={(e)=>onEdit(item)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>*/}

    {/* Delete */}
    <button onClick={(e)=>onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
</div>
      </div>);
});
     const addTask =( name, det,  sup, status) => {
        const newTask = {
            id: tasks.length+1,
            name: name,
            detail: det,
            type: status,
            supplier: sup
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
                
                    ชื่อ-สกุล: {name}
                    สาขาวิชา: {major}
                    กลุ่มเรียน/ชั้นปี: {classSec} / {classYear}
                    สถานะภาพการศึกษา: {isActive(active)}
                </p>
            
            </div> 
            </div>

            <HerbForm 
            addTask={addTask}
            editingTask={editingTask}
            updateTask={updateTask}
            resetEditingTask={resetEditingTask}
            />
            {/* <div className="flex justify-center gap-3  space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-body bg-pink-200 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">งานที่ต้องทำ {numOfTasks} รายการ</div>
                {/*<div>
                    <button onClick={addTask} className="text-body bg-purple-200 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">เพิ่มงาน</button>
                </div>*/}
             
                    

                <div className="inline-flex gap-5 rounded-base shadow-xs -space-x-px" role="group">   
                </div>

                    {/* <button onClick={() => setStatus(null)} className="text-body bg-green-200 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-e-base text-sm px-3 py-2 focus:outline-none">[A] All</button>
                    <button onClick={() => setStatus(true)} className="text-body bg-blue-200 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 text-sm px-3 py-2 focus:outline-none">[C] Complete</button>
                    <button onClick={() => setStatus(false)} className="text-body bg-yellow-200 border border-default hover:bg-neutral-secondary-medium hover:text-heading 
                    focus:ring-3 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-s-base text-sm px-3 py-2 focus:outline-none">[P] Pending</button> */}
                
          
            <div className="flex justify-center gap-3  space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tmpTdl}
            </div>
            {/* <Modal open={open} onClose={()=>setOpen(false)}>
                {selectedTask && (
                    <>
                        <h2 className= "mt-2 text-sm text-black dark:text-gray-200">{selectedTask.title}</h2>
                        <p className= "mt-2 text-sm text-black dark:text-gray-200">{selectedTask.desc}</p>
                        <p className= "mt-2 text-sm text-black dark:text-gray-200">{selectedTask.data_added}</p>
                        <p className= "mt-2 text-sm text-black dark:text-gray-200">{selectedTask.author}</p>
                        <p className= "mt-2 text-sm text-black dark:text-gray-200">{selectedTask.status ? 'Complete' : 'Pending'}</p>
                    </>
                )}
            </Modal> */}
        <Footer/>
        </>
    );
}