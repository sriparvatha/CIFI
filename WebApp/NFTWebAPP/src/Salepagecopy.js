import React, { useState,useEffect } from "react";
import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";

import Nft from "./Nft";
import Sendpage from "./Sendpage";
import Newpage from "./Newpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";
//import getaaa from "./abinft";
import Saleimagepage from "./Saleimagepage";
import Myitem from "./Myitem";
import firebase from "./firebase";
import fireDb from "./firebase";
import Allcontractpage from "./Allcontractpage";
import {abi} from './data'
import Mypurchasepage from './Mypurchasepage'
import Explore from './Explore'
import Createandpurchasepage from './Createandpurchasepage'


// console.log(`abi`, abi)


function Salepagecopy() {




const[getImgreff,setgetImgreff]=useState([]);

const[getIm,setgetIm]=useState([]);



  var abcd;

  
  //var names=[];
  const [afternames,setAfternames] = useState([]);
  
  console.log("afternamescheck",afternames)
  const [names,setnames] = useState([]);

  // console.log("initialnames",names)
  
  // const accounts = [];

  
  const [getAddressDb,setGetAddressDb]=useState([]);

  const [pa,setPa]=useState();
  // console.log("initialgetaddress",getAddressDb)
  

  
//  const getAdressbyAccount = async  ()=>{
//   const accounts = await web3.eth.getAccounts();


//     // console.log("getaddress0",accounts[0])
  
//     // console.log("function called");
//    let address =[];
//    let add=fireDb.database().ref(`contractaddress/${accounts[0]}`);
//    console.log("addget",add)
//    fireDb.database().ref(`contractaddress/${accounts[0]}`).on("value",(snapshot) =>{
//      snapshot.forEach((s)=>{
//        address.push(s.val());
//      });
     
//    });

//    setGetAddressDb(address)  
//    //console.log("mani",address)

   

   
//  }

  
//   useEffect(()=>{
// getAdressbyAccount()
// setTimeout(()=>{

//   newget()

// },5000)
// setTimeout(()=>{

//   s()

// },10000)
//   },[])



let btn;
  var accounts;

  const connectmm = async () => {


    //var getaddress=localStorage.getItem('myaddress')

    //if(getaddress !== ""){


      //var btn = document.getElementById("bu");
        //btn.value = accounts[0]; // will just add a hidden value
        //btn.innerHTML = accounts[0];
        //btn.innerHTML = "CONNECTED"



    //}
    //else{


      //window.alert("Do you want to connect with metamask");


      //event.preventDefault();
     //bring in user's metamask account address

     

     //const demo=await getaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})

      
      //alert("acc"+accounts[0])

      accounts = await web3.eth.getAccounts();//.send({from:accounts[0]})

      if(accounts[0] !== ""){

      

        //accounts[0
        //document.getElementById("bu").
        //document.getElementById("bu").append("CONNECTED")

        btn= document.getElementById("bu");
        //btn.value = accounts[0]; // will just add a hidden value
        //btn.innerHTML = accounts[0];
        btn.innerHTML = "CONNECTED"


        localStorage.setItem('myaddress', accounts[0]);
      
      }
      else{
        //document.getElementById("bu").remove("");
        //document.getElementById("bu").replaceWith("NOT CONNECTED")
        var btns = document.getElementById("bu");
        //btns.value = accounts[0]; // will just add a hidden value
        btns.innerHTML = "NOT CONNECTED";
        localStorage.setItem('myaddress', "");
      }

    
  };    
  useEffect(()=>{connectmm()},[])



  //new function start

  const getImgpa = async() =>{

    const accounts = await web3.eth.getAccounts();
    let req = [];
    let req2 = [];
    //let kreq =[];
    firebase.database().ref("imageref").child(accounts[0]).on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          console.log("keycheck",d.key)
          req.push(d.val())
          //req.push(d.key)
          
        });
        
      }

    });

    setgetImgreff(req)

      getImgreff.map((a)=>{
      console.log(`a`, a)
    
      //Object.keys(a).map((b)=>{
    
        console.log(`bba`, a)
        console.log(`bbnexta`, a.imageUrl)
        console.log(`bbaddessa`,a.cAddress)
        console.log(`bbpricea`,a.priceSet)
        console.log(`bbkeyid`,a.keyIds)
        //console.log(`bbowner`,)
//change here
        req2.push({
          //addAcc:
          addPrices:a.priceSet,
          addcAdd:a.cAddress,
          addIds:a.id,
          addImgs:a.imageUrl,
          addKeyI:a.keyId,
        addName:a.userName,
      addSymbol:a.userSymbol,
    addIpfs:a.ipfsUrl})
              
      //})
    })


    
    setgetIm(req2)
    
    console.log("cfba",req)

    setPa(0)
  }


  useEffect(()=>{getImgpa()},[getIm])
  //end here



//  const newget = async()=>{
//   const accounts = await web3.eth.getAccounts();
//   let n =[]
//   getAddressDb.forEach(async(add)=>{
//     let poda = add
//         let getaaaa=new web3.eth.Contract(abi,poda);
        
        
//         let printgeta=await getaaaa.methods.tokensOfOwner(accounts[0]).call();

//         printgeta.forEach((p=>{
//         n.push(p)
// }))
//       setnames(n);    
      
//     })
//  }

//   const s =  async ()=>{
//   const accounts = await web3.eth.getAccounts();

//   let after = []
//    getAddressDb.forEach(async(a)=>{
//        let poda = a
//         let getaaaa=new web3.eth.Contract(abi,poda);
//         names.forEach(async (n)=>{
//           console.log(`n`, n)
//           // console.log(`object`,n, await getaaaa.methods.tokenURI(n).call())     }) 
//           after.push({
//             add:poda,
//             addId:n,
//             addImgSrc:await getaaaa.methods.tokenURI(n).call()})
//    })
//   })

//    console.log(`after`, after)
// setAfternames(after)
//  }


   
const setprice =async (a)=>{

  //let t= document.createElement("textbox")

  //t="Added for sale";
  //b.innerHTML="Enable Sale";

             var isd = a.addIds;//a
             console.log("targetid",isd)

            console.log(`a`, a)
            let getaaaa=new web3.eth.Contract(abi,a.addcAdd);
            const accounts = await  web3.eth.getAccounts();
            await getaaaa.methods.setTokenState([isd],"true").send({from:accounts[0]});
           // salepage.settokenstate();
            console.log("checking")
            let price = window.prompt("enter the price for your token");


            await getaaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})
            const priceamount = await getaaaa.methods.items(isd).call();
            console.log(priceamount.price)


            await getaaaa.methods.setApprovalForAll(a.addcAdd,"true").send({from:accounts[0]})

            await getaaaa.methods.approve(a.addcAdd,a.addIds).send({from:accounts[0]})


            fireDb.database().ref(`imageref/${accounts[0]}`).child(a.addKeyI).update({
              id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0]
            
            });


            fireDb.database().ref(`imagerefexplore/${accounts[0]}`).child(a.addKeyI).set({
              id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0]
            
            });


            
                      


            
           //let pa = priceamount.state;
           setPa(priceamount.state)
         if(pa === 1){
           //c.append(t)
           console.log("checkcon","Added for sale console")



         }
         else{
           //c.append(b)
           console.log("checkcons","not for sale console")
         }

          

}

const send=async(a)=>{

  //let getaaaa=new web3.eth.Contract(abi,a.addcAdd);
  //const accounts = await  web3.eth.getAccounts();
  //console.log("logd1",accounts[0])
  //console.log("logd2",a.addKeyI)


  //console.log("logdele",ab)

  let getaaaa=new web3.eth.Contract(abi,a.addcAdd);
  const accounts = await  web3.eth.getAccounts();

  let toaddressget = window.prompt("enter for your sender address");

  if(toaddressget === null){

    alert("please enter address")

  }
  else{


    await getaaaa.methods.safeTransferFrom(accounts[0],toaddressget,a.addIds).send({
      from:accounts[0]
    });
  
    console.log("checkinga",a.addOwnerAddress)
  
    fireDb.database().ref(`imagerefbuy/${toaddressget}`).child(a.addKeyI).set({
      id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
      userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget
    })
  
    fireDb.database().ref(`imageref/${toaddressget}`).child(a.addKeyI).set({
      id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
      userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget
    })


    fireDb.database().ref('imageref').child(accounts[0]).child(a.addKeyI).remove();

  try{

    fireDb.database().ref('imagerefbuy').child(accounts[0]).child(a.addKeyI).remove();

  }catch(error)
  {
    
  }

  

  }  

}


  

  return (    
    

    <div>

    

    




<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Explore");
                }}>
                Explore
              </button>

              {" "}
      
<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepagecopy");
                }}>
                My items
              </button>
              {" "}
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Followingpage");
                }}
              >
                Following
              </button>
              {" "}
              <button 
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Activitypage");
                }}>
                Activity
              </button>
              {" "}
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Howitworkpage");
                }}
              >
                How it work
              </button>
              {" "}

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Communitypage");
                }}
              >
                Community
              </button>

              {" "}
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                     history.push("/Nft");
                }}
              >
              Create
              </button>

              {" "}

              <button
              
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Mypurchasepage");
                }}>
               Mypurchase
              </button>

              {" "}


              <button
              
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Createandpurchasepage");
                }}
                
                >
               Create and Purchase
              </button>

              {" "}
              <button
              id="bu"
                class="btn btn-info btn-block"
                type="button"
                onClick= {connectmm}>
               Connect wallet
              </button>

              {" "}





              <br></br>
<br></br>










{/* <button
                class="btn btn-info btn-block"
                type="button"
               onClick={s}
              >
              
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={newget}
              >
              
              </button> */}


              {/* <button
                class="btn btn-info btn-block"
                type="button"
                onClick={getImgpa}
              >
              
              Refresh
              </button> */}
{getIm.length === 0 ? null : 
<div style={{backgroundColor:'skyblue',display:'flex',flexWrap:'wrap'}}>
{getIm.map((a)=>{
  console.log(`a`, a)

  if(a.addImgSrc !=='' && pa === 0){
  return (
    <div style={{backgroundColor:'skyblue',height:'600px',width:'600px'}}>

  <img   src={a.addImgs}  style={{height:250,width:250}}    alt={""} />
  {' '}
  <br></br>
  
  <h3>Name : {a.addName}</h3>
  
  <h3>Symbol : {a.addSymbol}</h3>
  
  <h3>price : {a.addPrices}</h3>
  
  <button onClick={()=>setprice(a)} >SetPrice</button>

  {' '}

  <button onClick={()=>send(a)} >Send</button>
  
  </div>
  )
  }else{
   
    //return (
  //     <div>
  
  // <img   src={a.addImgs}  style={{height:250,width:250}}  alt={""}   />
  //   {''}
  //   <br></br>
  //   <h3>Name : {a.addName}</h3>
    
  //   <h3>Symbol : {a.addSymbol}</h3>
    
  //   <h3>price : {a.addPrices}</h3>
    
  //   <h3> Added for sale</h3>

  //   <button onClick={()=>send(a)} >Send</button>
    
  //   </div>
  //   )
    
  }
})}
</div>
}


      

<br></br>




	      
<br></br>
<br></br>




<br></br>
<br></br>



                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            
            <Route path="/Myitem">
              <Myitem />
            </Route>
            <Route path="/nft">
              <Nft />
            </Route>
            <Route path="/sendpage">
              <Sendpage />
            </Route>
            <Route path="/tokencreate">
              <Tokencreate />
            </Route>
            <Route path="/newpage">
              <Newpage />
            </Route>
            <Route path="/printallimage">
              <Printallimage />
            </Route>
            <Route path="/Saleimagepage">
              <Saleimagepage />
            </Route>
            <Route path="/Mypurchasepage">
              <Mypurchasepage />
            </Route>
            <Route path="/Explore">
              <Explore />
            </Route>

            <Route path="/Createandpurchasepage">
              <Createandpurchasepage />
            </Route>
            
            
          </Switch>
        </Router>




        


{/* <div style={{flexDirection:'column',width:'500px',flexWrap:'wrap'}}>

<ul id="prabha">

</ul>


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    </div> */}
	  

    </div>

  );
  
}

export default Salepagecopy;