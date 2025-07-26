interface CardProps {
  title: string;
  value: string;
  color: string;
  iconSrc: string;
}

export default function Card({ title, value, iconSrc, color }: CardProps) {
  console.log(iconSrc,'icon source');
  return (
    <div className={`card card--${color}`}>
      <div className="card__icon">
        <img src={iconSrc} alt={title} />
      </div>
      <div className="card__content">
        <p className="card__title">{title}</p>
        <h3 className="card__value">{value}</h3>
      </div>
    </div>
  );
}
