import Logo from "./Logo/Logo";
import MenuRightHeader from "./MenuRightHeader/MenuRightHeader";

export default function Header() {
  return (
    <div className={"header container"}>
      <Logo />
      <MenuRightHeader />
    </div>
  )
}