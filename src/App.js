import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Basicdisplay from "./Compo1/Basics/Basicdisplay";

import Butadd from "./Compo1/Buttons/Butadd";
import Butmul from "./Compo1/Buttons/Butmul";
import Butchangemsg from "./Compo1/Buttons/Butchangemsg";
import Basicchildrentprop from "./Compo1/Proplearn/Basicchildrentprop";
import Basicprops from "./Compo1/Proplearn/Basicprops";
import Basicpropsandchildrenprops from "./Compo1/Proplearn/Basicpropsandchildrenprops";
import Basicclasscomponent from "./Compo1/Proplearn/Basicclasscomponent";
import Basicsubcomponents from "./Compo1/Architecture/Basicsubcomponents";
import Puttitlebyusingstate from "./Compo1/Basics/Puttitlebyusingstate";
import Basiclet from "./Compo1/Usingletandif/Let/Basiclet";
import If from "./Compo1/Usingletandif/If1/If";
import Usermain from "./Action/Usermain";
import Desfunct from "./Compo1/Destruction/Desfunct";
import Desclass from "./Compo1/Destruction/Desclass";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Desclass></Desclass> */}
        {/* <Desfunct name="Metho" age="30"></Desfunct> */}
        <Usermain />
        {/* <If></If> */}
        {/* <Basiclet title="How to use let in reactjs"></Basiclet> */}
        {/* <Puttitlebyusingstate></Puttitlebyusingstate> */}
        {/* <Basicsubcomponents name="Metho"> woow</Basicsubcomponents> */}
        {/* <Basicclasscomponent name="Metho" age="30"> is a cool guy</Basicclasscomponent> */}
        {/* <Basicpropsandchildrenprops name="Metho" age="30">is </Basicpropsandchildrenprops> */}

        {/* <Basicprops name="Metho" age="20"></Basicprops> */}
        {/* <Basicchildrentprop>If you want to access the element,
         you have to call childrent props</Basicchildrentprop> */}
        {/* <Butchangemsg></Butchangemsg> */}
        {/* <Butmul></Butmul> */}
        {/* <Butadd></Butadd> */}
        {/* <Counteradd1></Counteradd1>
      <Countermul5></Countermul5> */}
        {/* <Stamain></Stamain> */}

        {/* <Button1/> */}
        {/* <Letmain title="User List">

       </Letmain> */}
        {/* <Ifmain title="Student Details"></Ifmain>  */}

        {/* <Let1 name="Metho">
       <p>Metho</p>
         <p>Huzni</p>
         <p>Arshad</p>
       </Let1> */}

        {/*        
       <Test1 name="Metho" school="Loyola">
       <p>He studied in this college for 13 years</p>
       </Test1> */}

        {/* <Test2 name="Huzni" >
       <p>Name: Huzni | Age: 25</p>
       </Test2>  */}
        {/* <Greet name="Metho" age="30">  </Greet>
        <Greet name="Huzni" age="25">
        <p><u><b> Huzni is my teacher and this is a children property</b></u></p>
        <p><u><b> This is second childrent prperty</b></u></p>
         </Greet>
          <Welcome name="Arshad" heroName="Spiderman">
          </Welcome> */}

        {/* <Basicdisplay></Basicdisplay> */}
      </div>
    );
  }
}

export default App;
