function createSVG(path) {
  return {
     __html: path    
  };
}; 

export default function Skill(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} fill="currentColor" dangerouslySetInnerHTML={createSVG(props.img)}></svg>
      {/* <img className="mb-2 text-3xl font-extrabold dark:text-gray-400" src={`data:image/svg+xml;utf8,${props.img}`} alt={props.name} /> */}
      <span>{props.name}</span><span className="font-light text-gray-500 dark:text-gray-400">{props.time}</span>
    </div>
  );
}
