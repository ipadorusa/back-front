import { useState } from "react";
import Iframe from "react-iframe";
export default function Page() {
  const [src, setSrc] = useState('');
  const [show, setShow] = useState(false);
  const handleButtonClick = () => {
    // Set the new src for the iframe when the button is pressed
    setSrc('https://www.saramin.co.kr/zf_user/member/apply/login?rec_idx=46846339&category=&t_category=main&t_content=platinum_fix_expand');
    setShow(!show);
  };
  return (
    <div>
    <Iframe url={src}
      width="640px"
      height="320px"
      id=""
      className=""
      display={show ? "block" : "none"}
      position="relative"/>
    <button type='button' onClick={handleButtonClick}>button</button>
  </div>
    )
}
