import React, {useState} from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import "../styles/App.css";
import { display } from "@mui/system";

function App() {


  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };



  const [entry, updateEntry] = useState([]);
  let itemsList = entry;

  const [text, setText] = useState("");
  function changed(e) {
    setText(e.target.value);
  }

  function addEntry(e) {
    e.preventDefault();

    if(text === ""){
      alert("Item title cannot be empty");
      return ;
    }

    const item = {
      text: text,
      date: Date(),
      itemDesc: ""
    };
    updateEntry((itemsList) => [...itemsList, item]);
    setText("");
    // console.log(uuid.v4());
  }

  
  const [head, setHead] = useState("notes topic");
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState("")
  function sider(e){
    const h = e.target.getAttribute("value");
    setHead(h);
    const i = e.target.getAttribute("id");
    updateCurr(i);
    let finder = itemsList.filter((item, id)=>{
      if(id==i){
        console.log(item);
        setDesc(item.itemDesc);
        return item;
      }
    })
    setDate(finder[0].date);
  }
  function updateDesc(e){
    const d = e.target.value;
    setDesc(d);
    const now = Date();
    const i = e.target.getAttribute("id");
    let finder = itemsList.filter((item, id) =>{
      if(id == i){
        item.itemDesc=e.target.value;
        console.log(item);
        return item;
      }
    })
    let tempp = itemsList.filter((item, id)=>{
      if(id == i){
        item.date = Date();
        setDate(item.date);
      }
      return item;
    })
    console.log(itemsList);
    updateEntry(tempp);
    console.log(itemsList);
  }

  function deleteItem(index){
    const i = index.id;
    console.log(i);
    let finder = itemsList.filter((item, id) => {
      if(id != i)  return item;
    })
    console.log(finder);
    updateEntry(finder);
  }

  const [curr, updateCurr] = useState(-1);

  return (
    <div className="main">
      <div className="inputs">
        <form onSubmit={addEntry} className="inpForm">
          <TextField id="standard-basic outlined-required" label="Add ITEM" variant="standard" type="text" onChange={changed} value={text} className="addItem" required />
          <Button variant="text" style={ {color: "black"} } onClick={addEntry} className="btn">
            <AddCircleOutlineRoundedIcon fontSize="large" className="icon" />
          </Button>
        </form>
        <>
          {itemsList.map((item, id) => {
            return (
              <div className="arrList">
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" key={id} id={id} value={item.text} onClick={sider} style={{width: "80%"}} >
                {item.text}
              </Typography>
              <div style={{width: "20%"}} onClick={() => deleteItem({id})}>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
              </div>
              </div>
            );
          })}
        </>
      </div>



      <div className="sider">
        <h1 className="head">{head}</h1>
        <p>{date}</p>
        <TextField rows={10} fullWidth label="Enter Description" id={curr} className="desc" onChange={updateDesc} value={desc} />
      </div>

    </div>
  );
}
export default App;
