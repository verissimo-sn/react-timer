import './styles.css';

const Button = ({ action, name }) => {
  return (
    <button onClick={action} className="button">{name}</button>
  );
}

export default Button;