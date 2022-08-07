function createSVG(path) {
  return {
    __html: path,
  };
}

export default function Skill(props) {
  return (
    <div className="flex flex-col gap-2 sm:justify-center sm:items-center">
        <svg
          className="hidden sm:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={props.viewBox}
          fill="currentColor"
          dangerouslySetInnerHTML={createSVG(props.img)}
        ></svg>
      <div className="flex flex-row gap-2 md:flex-col items-start justify-start sm:items-center sm:justify-center">
        <span className="text-left sm:text-center">{props.name}</span>
        <span className="text-left font-light text-gray-500 dark:text-gray-400 sm:text-center">
          {props.time}
        </span>
      </div>
    </div>
  );
}
