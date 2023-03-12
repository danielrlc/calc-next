import React from "react"
import Head from 'next/head'

export default function Home() {
  const [outputStr, setOutputStr] = React.useState("0");

  const handleInput = input => () => {
    console.log(`Input: ${input}`);
    return
  }

  return (
    <>
      <Head>
        <title>Calculator app</title>
        <meta name="description" content="Frontend Mentor challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-2xl">
        <div className="bg-blue-801 flex flex-col items-center">
          <div className="bg-blue-902 mt-6 px-6 pt-5 pb-3 min-w-[324px] rounded-lg text-white text-3xl text-right">{outputStr}</div>
          <div className="keyboard-grid grid grid-cols-4 gap-3 bg-blue-902 p-6 rounded-lg m-6">
            <button onClick={handleInput(7)} className="c-key-base">7</button>
            <button onClick={handleInput(8)} className="c-key-base">8</button>
            <button onClick={handleInput(9)} className="c-key-base">9</button>
            <button onClick={handleInput("del")} className="c-key-blue">del</button>
            <button onClick={handleInput(4)} className="c-key-base">4</button>
            <button onClick={handleInput(5)} className="c-key-base">5</button>
            <button onClick={handleInput(6)} className="c-key-base">6</button>
            <button onClick={handleInput("+")} className="c-key-base">+</button>
            <button onClick={handleInput(1)} className="c-key-base">1</button>
            <button onClick={handleInput(2)} className="c-key-base">2</button>
            <button onClick={handleInput(3)} className="c-key-base">3</button>
            <button onClick={handleInput("-")} className="c-key-base">-</button>
            <button onClick={handleInput(".")} className="c-key-base">.</button>
            <button onClick={handleInput(0)} className="c-key-base">0</button>
            <button onClick={handleInput("/")} className="c-key-base">/</button>
            <button onClick={handleInput("x")} className="c-key-base">x</button>
            <button onClick={handleInput("reset")} className="c-key-blue u-reset-btn">reset</button>
            <button onClick={handleInput("=")} className="c-key-red u-equals-btn">=</button>
          </div>
        </div>
      </main>
    </>
  )
}
