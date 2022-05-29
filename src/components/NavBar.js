import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  function LinkItem({link}) {
    return <a key={link} href={link}>{link}</a>;
  }

  // const linksElements = links.map((link) => {
  // return <a key={link} href={link}>{link}</a>;
  // });

  const linksElements = links.map((link) => {
    return <LinkItem key={link} link={link} />;
  });

  return <div>
    <nav>{
      <div>
        {linksElements}
      </div>
    }</nav>
  </div>
}

export default NavBar;
