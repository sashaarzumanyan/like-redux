import {INCRIMENT, DECREMENT} from "./types"

export function IncrementLikes(){
    return {
        type: INCRIMENT 
    }
}

export function decrementLikes(){
    return {
        type: DECREMENT 
    }
}

