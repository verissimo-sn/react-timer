import './styles.css';

const Container = ({ mainTitle, children }) => {
  return (
    <div className="Container">
      <div className="container-content">
          <h3 className="content-title">{mainTitle}</h3>
          {children}
      </div>
    </div>
  );
}

export default Container;