import { useState , useCallback ,useEffect,useRef } from 'react'
import './App.css'

function App() {
const [length , setLength ] = useState(8)
const [numberAllowed,setNumberAllowed] = useState(false)
const [spChrAllowed,setSpChrAllowed] = useState(false)
const [password,setPassword] = useState("")

const passwordRef = useRef(null)
 useEffect(()=>{
  passwordGenerstor()
 },[length,numberAllowed,spChrAllowed])

const passwordGenerstor = useCallback(()=>{
  let pass = ""
  let str = "ASBCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) str += "1234567890"
  if(spChrAllowed)str+= " ~`!@#$%^&* ()-_+= {} []|;:<>,./?"
  for (let index = 1; index <= length; index++) {
    let chr = Math.floor(Math.random()*str.length+1)
   
    pass += str.charAt(chr)
    
  }
setPassword(pass)  
}
, [length,numberAllowed,spChrAllowed,setPassword])

const copytoclipboard = useCallback(( )=>{
  window.navigator.clipboard.writeText(password)
},[password])

  return (

 <>
 <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-8 text-center text-rose-800 bg-black'> password generator 
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={password}
    className='outline w-full py-1 px-4'
    readOnly
    ref={passwordRef}
    /> <button
    onClick={copytoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5'>copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
 <div className='flex text-sm gap-x-2'>
 <label> length : {length} </label><input 
  
  type="range" 
  min={8}
  max={32}
  value={length}
  className='cursor-pointer'
  onChange={ (e)=>{
    setLength(e.target.value)
  } 
}
/>
</div> 
<div className='flex text-sm gap-x-2'><label> number</label>
<input type="checkbox" 
defaultChecked = {numberAllowed}
id='numberinput' 
onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
</div>
<div className='flex text-sm gap-x-2'><label> chracter</label>
<input type="checkbox" 
defaultChecked = {spChrAllowed}
id='spChrinput' 
onChange={()=>{setSpChrAllowed((prev)=>!prev)}}/>
</div>
</div>
 </div>
 </>
  )
}

export default App
 