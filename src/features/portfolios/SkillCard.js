import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const SkillCard = ({ skill }) => {
    const { image, name } = skill;
    return (
        <Card>
            <CardImg width='100%' src={image} alt={name} />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default SkillCard;