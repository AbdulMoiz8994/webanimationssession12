import React,{useEffect} from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './style.css'

export const RedQueenRace = () => {

// console.log(useWebAnimations)

//make two variable for background moving as per req
let playbackRq=1;
let playbackBg=0;

//keyFrame in variable
const sceneryFunction=[
    {transform: 'translateX(100%)'},
    {transform: 'translateX(-100%)'},
]
//web animation properties in variable
const secneryTimingBackground={
    duration: 36000,
    iteration: Infinity,
    playbackRate: playbackBg,
}
const sceneryTimingForground={
    duaration: 12000,
    iteration: Infinity,
    playbackRate: playbackBg,

}



const background1Movement=useWebAnimations({
    keyframes: sceneryFunction,
    timing: secneryTimingBackground,
})
const background2Movement=useWebAnimations({
    keyframes: sceneryFunction,
    timing: secneryTimingBackground,
})

const forground1Movement=useWebAnimations({
    keyframes: sceneryFunction,
    timing: sceneryTimingForground,
}) 


const forground2Movement=useWebAnimations({
    keyframes: sceneryFunction,
    timing: sceneryTimingForground,
}) 


const spiritFrame=[
    {transform: 'translateY(0)'},
    {transform: 'translateY(-100%)'},
]
//another way to write animation property below
const spiritTiming={
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 600,
        playbackRate: playbackRq,
        iterations: Infinity
}

const redQueen_alice=useWebAnimations({
    keyframes: spiritFrame,
    timing: spiritTiming,
    
})


//make funtion in that inside cond
const adjustBackgroundPlayBack=() =>{
    if(playbackRq < 0.8){
        playbackBg=(playbackRq / 2) * -1;
    }else if(playbackRq > 1.2){
        playbackBg=playbackRq / 2;
    }else{
        playbackBg=0;
    }
    console.log(playbackBg)
    forground1Movement.getAnimation().playbackRate =playbackBg;
    forground2Movement.getAnimation().playbackRate =playbackBg;
    background1Movement.getAnimation().playbackRate =playbackBg;
    background2Movement.getAnimation().playbackRate =playbackBg;

}


// const goFaster=() =>{
// return redQueen_alice.getAnimation().playbackRate *=1.1 
// }


useEffect(function() {
// let fganimation=forground1Movement.getAnimation();
// fganimation.currentTime=fganimation.effect.getTiming().duration / 2;

// let bganimation=background1Movement.getAnimation();
// bganimation.currentTime=bganimation.effect.getTiming().duration / 2;


// setInterval(() =>{
//     if(playbackRq > 0.4){
//         playbackRq *=0.9  // like playbackRq = playbackRq*0.9
//         redQueen_alice.getAnimation().playbackRate=playbackRq
//     }
//     adjustBackgroundPlayBack()
// },3000)

   document.addEventListener('click',() =>{
     playbackRq  *=1.1
    redQueen_alice.getAnimation().playbackRate=playbackRq ;
    adjustBackgroundPlayBack()
   })
})


    return (
        <div>
            <div className="wrapper">
  <div className="sky"></div>
  <div className="earth">
    <div id="red-queen_and_alice" >
      <img   id="red-queen_and_alice_sprite" 
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" 
      srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" 
      alt="Alice and the Red Queen running to stay in place."
      ref={redQueen_alice.ref}
      />

    </div>
  </div>

  <div className="scenery" id="foreground1" ref={forground1Movement.ref}>
    <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
  </div>

  <div className="scenery" id="foreground2" ref={forground2Movement.ref}>    
    <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>

    <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
  </div>

  <div className="scenery" id="background1" ref={background1Movement.ref}>

    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>

    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>

    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>

  </div>

  <div className="scenery" id="background2" ref={background2Movement.ref}>

    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>

    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" 
    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
  </div>
</div>
        </div>
    )
}
