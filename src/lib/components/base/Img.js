export default function Img({src, alt = "alt", classImg, ...props}) {
  const style = classImg !== undefined ? classImg + " img-fluid" : "img-fluid"
  let imgsrc = src !== undefined ? src : "http://via.placeholder.com/300x300";

  return (
    <>
      <img src={imgsrc} alt={alt} className={style} {...props}/>
    </>
  )
}