import { Link } from "react-router-dom";

export default function TButton({
  classes = "",
  href = "",
  to = "",
  handle = () => {},
  target = "_blank",
  children,
}) {
  return (
    <>
      {href && <a href={href} className={classes} target={target}></a>}
      {to && (
        <Link to={to} className={classes}>
          {children}
        </Link>
      )}
      {!to && !href && (
        <button onClick={handle} className={classes}>
          {children}
        </button>
      )}
    </>
  );
}
