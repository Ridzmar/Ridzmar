"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "BBYYYYY",
      "PLEASE BBYY",
      "SHUN ISTG",
      "PLEASE POOKS",
      "I THOUGHT YOU LOVED ME",
      "SHUNBBY OMG PLEASE",
      "ILL KMS",
      "im dead",
      "this is his ghost",
      "still hasnt changed your mind?",
      "PLEASE BBY",
      "AWW MAN",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/rJwMzrNNNDAAAAAC/%E3%82%AD%E3%82%B9-%E3%81%BB%E3%81%A3%E3%81%BA.gif" />
          <div className="my-4 text-4xl font-bold">YIPPIE THANKS POOKS!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.tenor.com/c8EpI_ihPqoAAAAi/%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88-%E3%81%8A%E8%8A%B1.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
