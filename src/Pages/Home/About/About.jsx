
import img1 from "../../../assets/home/chef-service.jpg"
const About = () => {


    const bannerContainerStyle = {
        position: 'relative',
        width: '100%',
        height: '60vh', 
        overflow: 'hidden',
      };
    
      const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      };
    
      const overlayStyle = {
      
        position: 'absolute',
        inset: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       
        backgroundColor: 'white',
      };
    

      const companyTitleStyle = {
        fontSize: '2rem',
        
       
      };
    
      const taglineStyle = {
        fontSize: '1rem',
        
      };

    return (
        <div  style={bannerContainerStyle}>
        <img src={img1} alt=""   style={imageStyle}/>
        <div style={overlayStyle}>
        <div className="text-center max-w-[70%]">
          <h1 style={companyTitleStyle}>Bistro Boss</h1>
          <p style={taglineStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
        </div>
        </div>
      </div>
    );
};

export default About;




