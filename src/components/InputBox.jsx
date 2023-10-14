import React, {useId} from "react"

function InputBox(
    {
        label, 
        amount=0, 
        onAmountChange, 
        onCurrencyChange,
        currencyOptions = ["usd", "inr"],
        selectCurrency= "usd",
        ammountDisabled = false,
        currencyDisabled=false,
        className="" 
    }
    
    ){
    
    const inpId = useId()

    return(
        <div className= {` w-full p-5 h-auto bg-zinc-300 rounded-lg flex flex-row gap-6 ${className} `} >
            
            <div className="flex flex-col w-1/2" >
                <label htmlFor={inpId} className="text-cyan-800 font-semibold pb-2 text-xl pl-1">
            
                    {label}:
            
                </label>

                <input 
                    type="number" 
                    name="CurrencyInput" 
                    id={inpId} 
                    className = "bg-zinc-200 p-3 rounded-xl" 
                    disabled = {ammountDisabled}
                    onChange={e => onAmountChange && onAmountChange(e.target.value)}
                    value={amount}
                    onClick={e => e.target.select()}
                />
            </div>

            <div className="flex flex-col w-1/2 items-end" >
                <label htmlFor={inpId} className="text-cyan-800 font-semibold pb-2 text-xl pr-3">
            
                   Currency:
            
                </label>
            
                <select 
                    value={selectCurrency} 
                    onChange={ e => onCurrencyChange && onCurrencyChange(e.target.value)} 
                    className="bg-zinc-200 p-3 rounded-xl w-24 cursor-pointer"
                    disabled = {currencyDisabled}
                    name="currency"
                    title="currency"
                    >

                    {currencyOptions.map( currency => (

                        <option key={currency} value={currency} className="text-lg text-cyan-800" > 
                            {currency} 
                        </option>
                        

                    ))}

                </select>    
            </div>
            

        </div>
    )
}

export default InputBox