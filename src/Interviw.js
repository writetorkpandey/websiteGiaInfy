import React, { useState } from "react";

export default function Interviw() {
  const [ratingDiv, setratingDiv] = useState(0);

  return (
    <div>
      {console.log(ratingDiv)}
      {ratingDiv > 0 ? (
        <div className="interviewCol" onClick={() => setratingDiv(1)}>
          1 div
        </div>
      ) : (
        <div className="interview" onClick={() => setratingDiv(1)}>
          1 div
        </div>
      )}

      {ratingDiv > 1 ? (
        <div className="interviewCol" onClick={() => setratingDiv(2)}>
          2 div
        </div>
      ) : (
        <div className="interview" onClick={() => setratingDiv(2)}>
          2 div
        </div>
      )}
      {ratingDiv > 2 ? (
        <div className="interviewCol" onClick={() => setratingDiv(3)}>
          3 div
        </div>
      ) : (
        <div className="interview" onClick={() => setratingDiv(3)}>
          3 div
        </div>
      )}
      {ratingDiv > 3 ? (
        <div className="interviewCol" onClick={() => setratingDiv(4)}>
          4 div
        </div>
      ) : (
        <div className="interview" onClick={() => setratingDiv(4)}>
          4 div
        </div>
      )}
      {ratingDiv > 4 ? (
        <div className="interviewCol" onClick={() => setratingDiv(5)}>
          5 div
        </div>
      ) : (
        <div className="interview" onClick={() => setratingDiv(5)}>
          5 div
        </div>
      )}
    </div>
  );
}
