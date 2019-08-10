import React, { useState } from 'react';

function SideMenu() {

  const [active, setActAve] = useState('')

  const handleSectionSelect = (el: any) => {
    const hash = el.target.name;
    setActAve(hash)

    var element = document.getElementById(hash);
    document.body.scrollTo({
      top: element ? element.offsetTop : 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="sidebar">
      <a
        className={active === "material" ? "active" : ""}
        onClick={(el) => handleSectionSelect(el)}
        href="#material">
        Material de estudos
      </a>
      <a
        className={active === "exercicios" ? "active" : ""}
        onClick={(el) => handleSectionSelect(el)}
        href="#exercicios">
        Exercícios
      </a>
    </div>
  );
}

export default SideMenu;