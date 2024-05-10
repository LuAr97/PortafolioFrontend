import { useState } from "react";
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from "reactstrap";
import CardsDisplay from "./CardsDisplay";
const SimpleCarousel = ( items : Array<any>, type : String) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex : number) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          {item.content}
        </CarouselItem>
      );
    });

    const chunkArray = (arr:Array<any>, size:number) => {
        const chunkedArr = [];
        let index = 0;
        
        while (index < arr.length) {
          chunkedArr.push(arr.slice(index, index + size));
          index += size;
        }
        
        return chunkedArr;
    };
    // const slides = () => chunkArray(items, items.length).map((page, index) => {
    //     return (
    //         <CarouselItem
    //             key={index}
    //             onExiting={() => setAnimating(true)}
    //             onExited={() => setAnimating(false)}
    //         >
    //             <CardsDisplay list={page} type={type} />
    //         </CarouselItem>
    //     );
    // });
  
    return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  };
  
  export default SimpleCarousel;