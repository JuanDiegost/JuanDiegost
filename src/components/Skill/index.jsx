export default function Skill(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="mb-2 text-3xl font-extrabold" src={`data:image/svg+xml;utf8,${props.img}`} alt={props.name} />
      <span>{props.name}</span><span className="font-light text-gray-500 dark:text-gray-400">{props.time}</span>
    </div>
  );
}
