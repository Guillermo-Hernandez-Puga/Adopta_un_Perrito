// src/components/Tags.jsx


const Tags = ({ text = 'Tag por defecto', color = 'secondary' }) => (
  <div className={`badge bg-${color}`}>
    {text}
  </div>
);

export default Tags;
