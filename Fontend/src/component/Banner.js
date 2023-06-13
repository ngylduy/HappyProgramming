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
    console.log("run");
    return (
        <>
            <section className='section'>
                <div className="introduce">
                    <div className='hello'>Hello, it's Me</div>
                    <div className='name'>Technoly De</div>
                    {
                       textIntroduce &&  <div className='introduce-text'>And I'm a  <span className='animation-text'>{textIntroduce}</span></div>
                    }
                    <p className='describe'>
                    Master your craft with leading mentors at your side. Grow with every online mentoring session and take the next step in your career. All on your terms, for a flat monthly price.
                    </p>

                    

                    <button className='btn-downloadCv'>
                       Download CV
                    </button>
                </div>

                <div className="avatarWrap">
                    <div className='moon'>
                        <div className="avtart">
                            <img src='https://kenh14cdn.com/thumb_w/660/2019/2/4/photo-1-1549282130239476130621.jpg' />
                        </div>
                        <div className='orbit'>
                            <p>✈️</p>
                            {/* <div className='luxurious'>⭐️</div> */}
                            <div className='rob'>☄️</div>
                        </div>
                    </div>
                </div>
            </section>
        </ >
    );
}

export default Banner;

