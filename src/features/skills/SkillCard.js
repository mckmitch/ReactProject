import { Card, CardImg } from 'reactstrap';

const SkillCard = ({ skill }) => {
    const { image, name } = skill;
    return (
        <Card>
            <CardImg width='100%' src={image} alt={name} />
        </Card>
    );
};

export default SkillCard;