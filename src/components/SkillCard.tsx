import { Card, CardImg, CardTitle } from "reactstrap";

const SkillCard = ({ item } : { item : any }) =>{
    return(
        <Card className="my-5 mx-auto skill-card">
            <CardImg 
                top 
                src={item.img} 
                alt={item.name}
                maxWidth='20px'
                height='auto' 
                className="card-image"
                
            />
            <CardTitle style={{color: 'rgb(5, 58, 99)'}}>{item.name}</CardTitle>
        </Card>
    )
};

export default SkillCard;