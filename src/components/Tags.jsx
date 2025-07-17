function Tags(props){
    const tags = props.tags.map((tag, index) => (
    <span key={index} className="tag">
      {tag}
    </span>
  ));

  return(
    <h3 className="tagsContainer">{tags}</h3>
  )
}

export default Tags;
