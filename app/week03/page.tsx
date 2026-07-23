import Header from "../components/header";
import Footer from "../components/footer";
import {toDoList} from "../data/toDolist";


export default function ToDoList(){
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

    const tmpTdl= toDoList.map(item=>
<div className="w-full max-w-sm p-6 bg-blue border border-blue-200 rounded-2xl shadow-md bg-blue-400 dark:border-blue-300">
      <h3 className="text-lg font-bold text-gray-200 dark:text-white">{item.title}</h3>
      <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{item.desc}</p>
      <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{item.data_added}</p>
      <p className="mt-2 text-sm text-gray-200 dark:text-gray-200">{item.author}</p>

    </div>
    )
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
            <div className="flex justify-center gap-3">
                {tmpTdl}
            </div>
        <Footer/>
        </>
    );
}