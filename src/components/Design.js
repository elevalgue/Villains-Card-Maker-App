import React, { useState, useEffect } from "react";
import Header from "./HeaderFooter/Header";
import Collapsible from "./Collapsible";
import Preview from "./cardPreview/Preview";
import Palletes from "./colorPalletes/Palletes.js";
import Fill from "./FillComponents/Fill";
import ShareContent from "./shareComponents/ShareContent";
import Footer from "./HeaderFooter/Footer";

// sass
import "../stylesheets/pages/design.scss";

let userData = {
  pallete: 2,
};

function Design() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("myValueLocalStorage")) || userData
  );
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    //setLoading(true);
    localStorage.setItem("myValueLocalStorage", JSON.stringify(data));
    //setLoading(false);
  });

  const handleInputsValue = (inputInfo) => {
    // console.log(inputInfo);

    setData({
      /* name: data.name,
      job: data.job,
      email: data.email,
      linkedin: data.linkedin,
      github: data.github,
      phone: data.phone, */
      ...data,
      [inputInfo.attr]: inputInfo.value,
    });
  };

  const resetUserData = () => {
    setData({});
  };

  /*const handlePalleteValue = (ev) => {
    console.log('paleta', ev);
  };*/
  // console.log(userData, data, userData === data);

  return (
    <div>
      <Header />
      <main className='design__container'>
        <Preview data={data} reset={resetUserData} />
        <section>
          <form className='form'>
            <fieldset className='form__design collapsable--open'>
              <Collapsible
                name='Diseña'
                icon='far fa-object-ungroup'
                iconCollapse='fas fa-chevron-down'
              />
              <Palletes inputValue={handleInputsValue} />
            </fieldset>
            <fieldset className='form__fill collapsable--open'>
              <Collapsible
                name='Rellena'
                icon='far fa-keyboard'
                iconCollapse='fas fa-chevron-down'
              />
              <Fill inputValue={handleInputsValue} data={data} />
              {/* <p>
                {loading === true ? "Cargando..." : "Mostrando tus datos..."}
              </p> */}
            </fieldset>

            <fieldset className='form__share collapsable--open'>
              <Collapsible
                name='Comparte'
                icon='fas fa-share-alt'
                iconCollapse='fas fa-chevron-down'
              />
              <ShareContent iconTwitter='fab fa-twitter' />
            </fieldset>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Design;
