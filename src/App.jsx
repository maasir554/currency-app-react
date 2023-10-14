import { useState } from "react"
import { InputBox } from "./components"
import { useCurrencyInfo } from "./hooks"


function App() {

   const [amount, setAmount] = useState(1)
   const [from, setFrom] = useState("usd")
   const [to, setTo] = useState("inr")
   const currencyData = useCurrencyInfo(from)
   const allCurrencyOptions = Object.keys(currencyData)

   return(
      <> 
         <h1 className="flex items-center w-full text-transparent justify-center text-5xl mb-10 font-bold bg-gradient-to-br from-cyan-700 to-cyan-300 bg-clip-text h-auto p-5">Currency converter app</h1>
         <main className="flex flex-col gap-5 w-[50rem] bg-zinc-800 rounded-3xl border-zinc-700 border-4 p-5 shadow-2xl shadow-zinc-700">

           <InputBox 
              label="From"
              selectCurrency={from}
              amount={amount}
              onAmountChange={newValue => newValue ? newValue>0 ? setAmount(newValue) : setAmount(0) : setAmount(0)}
              onCurrencyChange={newVal => setFrom(newVal)}
              currencyOptions={allCurrencyOptions}
           />

           <InputBox 
              amount={amount * Number(currencyData[to])}
              label="To"
              selectCurrency={to}
              onCurrencyChange={newVal => setTo(newVal)}
              ammountDisabled
              currencyOptions={allCurrencyOptions}
           />

            <p className="w-full bg-zinc-200 rounded-lg h-24 text-zinc-800 flex items-center justify-center font-semibold text-2xl p-5">
               {amount} &nbsp; <span className="text-cyan-800">  {from.toUpperCase()} </span> &nbsp; =  &nbsp;{amount * Number(currencyData[to])} &nbsp;  <span className="text-cyan-800">  {to.toUpperCase()}</span>.
            </p>

            <button 
               type="button" 
               className="w-full h-15 p-5 text-2xl bg-cyan-50 text-cyan-800 font-semibold rounded-lg hover:bg-white cursor-pointer active:scale-[0.99] transition-transform"
               onClick={ _ => {setFrom(to); setTo(from)}}
            >
               Swap
            </button>
         </main>

      </>
   )
}

export default App
