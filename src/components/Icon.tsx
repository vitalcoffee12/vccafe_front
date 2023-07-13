export default function Icon(props: {
  icon: string;
  size?: number;
  color?: string;
}) {
  return (
    <>
      <span
        className="material-symbols-outlined"
        style={{
          color: props.color ?? "black",
          fontSize: props.size ?? 18,
        }}
      >
        {props.icon}
      </span>
    </>
  );
}
