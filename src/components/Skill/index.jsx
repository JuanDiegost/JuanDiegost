function createSVG(path) {
  return {
    __html: path,
  };
}

export default function Skill(props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
        <svg
          className="hidden sm:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={props.viewBox}
          fill="currentColor"
          dangerouslySetInnerHTML={createSVG(props.img)}
        ></svg>
      <div className="flex flex-col items-center justify-center">
        <span className="text-center">{props.name}</span>
        <span className="font-light text-gray-500 dark:text-gray-400 text-center">
          {props.time}
        </span>
      </div>
    </div>
  );
}
