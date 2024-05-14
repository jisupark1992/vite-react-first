export default function BasicButton({onClick, children}) {
    return(
      <button onClick={e => {
          e.stopPropagation();
          onClick();
      }}>{children}</button>
    );
}