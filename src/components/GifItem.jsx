

export const GifItem = ({id, title, url}) => {
  console.log(id);
  return (
    <div className="card">
        <img src={url} alt={title} />    
        <p>{title}</p>
    </div>
    );
};
