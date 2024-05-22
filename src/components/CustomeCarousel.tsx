import { useState } from "react";
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";
import CardsDisplay from "./CardsDisplay";
interface Item {
  id: number;
  content: JSX.Element; 
}
const CustomedCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  //   const items = [
  //     {
  //         id : 1,
  //         content:
  //         <Row>
  //           <Col sm="4">
  //             <Card>
  //               <CardImg top width={50} height={300} src="/experience/bioProfile.jpeg" alt="about me" />              
  //             </Card>
  //           </Col>
  //           <Col sm="8">
  //             <Card>
  //               <CardBody>
  //                   <CardTitle>About me</CardTitle>
  //                   <CardSubtitle>
  //                       I'm Luisa, a Colombian soul with a passion for tech and a heart full of warmth. I'm that person always ready to 
  //                       jump in and help out, whether it's with a tricky coding problem or just lending an ear. 
  //                       My two furry companions are my world outside of work they keep me grounded and remind me to appreciate the little things.
  //                   </CardSubtitle>
  //                   <CardText>Coming from a Computer Science background, I pursued a bachelor's degree in Computer Science in Guatemala. 
  //                       During this time, I participated in various activities aimed at promoting women in technology. 
  //                       I gained experience as a web developer, utilizing technologies such as PHP, SQL, and Symfony. Later on, 
  //                       I obtained a Master's degree in Cybersecurity in Australia, where I had the opportunity to work on projects at IAG, 
  //                       using ORBIT, React, and SQL. Additionally, I acquired skills in automation with Selenium and Cucumber."
  //                   </CardText>
  //               </CardBody>
  //             </Card>
  //           </Col>
  //         </Row>  
        
  //     }
  // ]
    const items = [
      {
          id : 1,
          content:  
          <div className="d-flex justify-content-center align-items-center">
            <Card className="d-flex flex-row" >
              <CardImg top width={50} height={300} src="/experience/bioProfile.jpeg" alt="about me" />
              <CardBody style={{overflowY : "scroll"}}>
                  <CardTitle>About me</CardTitle>
                  <CardSubtitle>
                      I'm Luisa, a Colombian soul with a passion for tech and a heart full of warmth. I'm that person always ready to 
                      jump in and help out, whether it's with a tricky coding problem or just lending an ear. 
                      My two furry companions are my world outside of work they keep me grounded and remind me to appreciate the little things.
                  </CardSubtitle>
                  <CardText>Coming from a Computer Science background, I pursued a bachelor's degree in Computer Science in Guatemala. 
                      During this time, I participated in various activities aimed at promoting women in technology. 
                      I gained experience as a web developer, utilizing technologies such as PHP, SQL, and Symfony. Later on, 
                      I obtained a Master's degree in Cybersecurity in Australia, where I had the opportunity to work on projects at IAG, 
                      using ORBIT, React, and SQL. Additionally, I acquired skills in automation with Selenium and Cucumber."
                  </CardText>
              </CardBody>
            </Card>
          </div>
        }
    ]
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }

    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }

    const slides = items.map(item => (
      <CarouselItem key={item.id}>
        {item.content}
      </CarouselItem>
    ));
    
  
    return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous} interval={false} style={{ maxWidth: '80%', alignContent: 'center'}}>
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  };
  
  export default CustomedCarousel;