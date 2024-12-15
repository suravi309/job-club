import { easeOut, motion } from "framer-motion";
import banar1 from "../../assets/tolal/banar1.jpg";
// import banar2 from "../../assets/tolal/banar2.jpg";

const Bannar = () => {
  
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-1">

    <img
      src={banar1}
      className="max-w-sm w-64 h-80 rounded-t-3xl rounded-br-[40px] border-l-4 border-b-4 border-blue-950 shadow-2xl" />

    </div>
    <div className="flex-1">

      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <motion.h1 animate={{x:50, color:'#250cd5'}}
      transition={{duration:2, delay:1, ease:easeOut,repeat:Infinity}}
      className="text-5xl font-bold"
      >Box <motion.span animate={{color:['#10046b', '#3d0677', '#5b0452']}} transition={{duration:1.5, repeat:Infinity}}>jobs</motion.span> News!</motion.h1>
      
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Bannar;
