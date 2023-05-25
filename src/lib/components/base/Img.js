export default function Img({src, alt = "alt", classImg, ...props}) {

  let imgsrc = src !== undefined ? src : "http://via.placeholder.com/300x300";

  return (
    <>
      <img src={imgsrc} alt={alt} className={classImg} {...props}/>
    </>
  )
}