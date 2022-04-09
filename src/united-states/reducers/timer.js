
const Timer = (state = 15, action) => {
    let counter
    const StartTimer = (state) => {
        return counter = setInterval(timer, 1000);
        function timer(){
            state-- 
        } 
    }

    const ResetTimer = (state = 15) => {
        clearInterval(counter);
        return StartTimer(state)
    }
    switch(action.type){
        case 'START_TIMER': 
            const start = StartTimer(state)
            return start
        case 'RESET_TIMER': 
            const reset = ResetTimer()
            return reset
        default: return state
    }
}

export default Timer;