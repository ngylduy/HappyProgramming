import { useEffect,useState } from 'react';



const Banner = () => {

   
    const [textIntroduce,setIntroduce] = useState("")

    const handleText = () =>{
        setTimeout(()=>{
                setIntroduce("Frontend Dev")
        },0)
        setTimeout(()=>{
            setIntroduce("Tester")
        },3000)
        setTimeout(()=>{
            setIntroduce("TikToker IT")
        },6000)
    }
    useEffect(()=>{
        if(textIntroduce !== "Frontend Dev"){
            handleText()
        }
        const interval = setInterval(()=>{
        handleText()
        },9000)
        return () => clearInterval(interval)
    },[])
  
    return (
        
        <>
            <section className='section'>
                <div className="introduce">
                    <div className='hello'>Hello, it's Me</div>
                    
                    {
                       textIntroduce &&  <div className='introduce-text'>And I'm a  <span className='animation-text'>{textIntroduce}</span></div>
                    }
                    <p className='describe'>
                    <h5>Learn a new skill, launch a project, land your dream career.</h5>
                    </p>

                    

                    
                </div>

                <div className="avatarWrap">
                    <div className='moon'>
                        <div className="avtart">
                            <img src='https://cdn.dribbble.com/users/1068771/screenshots/14225432/media/0da8c461ba3920a8c827d864a6e051ed.jpg?compress=1&resize=400x300&vertical=center&fbclid=IwAR1-ibGX2MrRK8wQXXzZxkTRWwZ2k3uOBhIyB3yB0p_HFOjoHE-FuTCPYyo' />
                        </div>
                        <div className='orbit'>
                            <p>✈️</p>
                            <div className='luxurious'>⭐️</div>
                            <div className='rob'>⭐️</div>
                        </div>
                    </div>
                </div>
            </section>
        </ >
    );
}

export default Banner;

