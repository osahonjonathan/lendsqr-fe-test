import Card from '../../component/shared/card/card';

interface UserCardContainerProps {
  cards: {
    title: string;
    value: string;
    color: string;
    iconSrc: string;
  }[];
}

const UserCardContainer = ({ cards }: UserCardContainerProps) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          value={card.value}
          color={card.color}
          iconSrc={card.iconSrc}
        />
      ))}
    </div>
  );
};

export default UserCardContainer;
