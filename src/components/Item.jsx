
export default function Item({name, isPacked}) {
  return (
    // <li>
    //   {isPacked ? name + ' ✓' : name}
    // </li>
    <li>
      {name} {isPacked && ' ✓'}
  </li>
  )
}