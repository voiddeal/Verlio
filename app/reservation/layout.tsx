export default function ReservationPageLayoutt(props: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <div>
      <div id="portal-container" />
      {props.children}
    </div>
  )
}
