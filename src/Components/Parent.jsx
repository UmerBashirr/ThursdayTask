import Child from "./Child";
import List from "./List";
import A from "./ComponentA"
const Parent=()=>
{
    const method = () => {
        console.log("I am working ");
    }    

    return(
        <div className="Parent">
             
        <Child/>
        <A/>
        <List/>
        </div>
        
    );
}

export default Parent;