export default function Content({style, children, ...props}) {
  return (
    <p className={style} {...props}>
      {children}
    </p>
  )
}