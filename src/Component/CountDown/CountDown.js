import React from "react";
import CountUp, {useCountUp} from "react-countup";

const CountDown = () => {
  const {start, countUp, pauseResume, reset, update} = useCountUp({
    duration: 5,
    end: 1000,
	startOnMount : false
  });
  return (
    <div>
      <p>CountUp basic is here...</p>
      <CountUp end={200} />
      <p>count up with props</p>
      <CountUp end={10000} duration={10} prefix="$" decimals={2} />

      <div>
        <div>{countUp}</div>
        <button onClick={start}>start</button>
        <button onClick={pauseResume}>pauseResume</button>
        <button onClick={reset}>reset</button>
        <button onClick={() => update(2000)}>update</button>
      </div>
    </div>
  );
};

export default CountDown;
