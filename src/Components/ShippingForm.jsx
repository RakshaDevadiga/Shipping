import React,{useState} from "react";

function ShippingForm(props) {
    const [title,setTitle]=useState("");
    const[weight,setWeight]=useState("");
    const [color,setColor]=useState("");
    const [place,setPlace]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
      const data ={
      Title:title,
      weight:weight,
      color:color,
      place:place
      
      };
    props.addToListCallBack(data)
      
      };
      

  return (
    <div> <h2>Shipping Form</h2>
        <form onSubmit={ handleSubmit}>
<input type="text" placeholder='Enter the item name' value={title}  onChange={(e)=>setTitle(e.target.value)}/><br></br>
<input type="number" placeholder='Enter the weight of he item' value={weight} onChange={(e)=>setWeight(e.target.value)}  /><br></br>
<label>color of box</label>
<input type="color" value={color} onChange={(e)=>setColor(e.target.value)} /><br></br>
<input type="text" placeholder='Enter the shifting place' value={place} onChange={(e)=>setPlace(e.target.value)}/><br></br>
<button type="submit">submit</button>
        </form>

      
    </div>

    
  )
}

export default ShippingForm
