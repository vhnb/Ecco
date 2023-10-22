ScrollReveal({ reset: true });

ScrollReveal().reveal(".animation1", {
  duration: 1000,
  origin: "left",
  distance: "15px",
  delay:200,
  easing: "ease-in-out"
});

ScrollReveal().reveal(".animation2", {
    duration: 1000,
    origin: "right",
    distance: "15px",
    delay:200,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation3", {
    duration: 1000,
    origin: "bottom",
    distance: "5px",
    delay:200,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation4", {  
    duration: 1000,
    origin: "top",
    distance: "5px",
    delay:200,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation5", {  
    duration: 1000,
    origin: "left",
    distance: "5px",
    delay:225,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation6", {  
    duration: 1000,
    origin: "left",
    distance: "10px",
    delay:225,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation7", {  
    duration: 1000,
    origin: "left",
    distance: "10px",
    delay:225,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation8", {  
    duration: 1000,
    origin: "right",
    distance: "5px",
    delay:225,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation9", {  
    duration: 1000,
    origin: "right",
    distance: "10px",
    delay:225,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation10", {  
    duration: 1000,
    origin: "right",
    distance: "15px",
    delay:225,
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation11", {  
    duration: 1000,
    origin: "right",
    distance: "10px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".animation12", {  
    duration: 1000,
    origin: "left",
    distance: "10px",
    easing: "ease-in-out"
  });

  // sistema de pesquisa para recursos

  function inputRecursos(){
    const searchInput = document.getElementById("inputRecursos");
    const productList = document.getElementById("recursosContent");
    const products = productList.getElementsByClassName("recursosCards");
    
        const searchTerm = searchInput.value.toLowerCase();
    
        for(let i = 0; i < products.length; i++){
            const product = products[i];
            const productName = product.textContent.toLowerCase();
    
            if (productName.includes(searchTerm)){
                product.scrollIntoView({behavior: "smooth", block: "start"});
                break;
            }
        }
  }


  // sistema de pesquisa para recursos

  // sistema de pesquisa para social

  function inputSocial(){
    const searchInputSocial = document.getElementById("inputSocial");
    const productListSocial = document.getElementById("contribuirSocial");
    const productsSocial = productListSocial.getElementsByClassName("containerContribuirSocial");
    
        const searchTermSocial = searchInputSocial.value.toLowerCase();
    
        for(let i = 0; i < productsSocial.length; i++){
           const productSocial = productsSocial[i];
           const productNameSocial = productSocial.textContent.toLowerCase();
    
           if (productNameSocial.includes(searchTermSocial)){
              productSocial.scrollIntoView({behavior: "smooth", block: "start"});
              break;
        }
      }
  }



  // sistema de pesquisa para social

  // sistema da sidebar
  
  function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}

  // sistema da sidebar

  // sistema calculadora de carbono

  function calculateCarbonFootprint() {
    const electricityConsumption = parseFloat(document.getElementById("electricity").value);
    const carMileage = parseFloat(document.getElementById("car").value);
    const meatConsumption = parseFloat(document.getElementById("meat").value);
    const publicTransportUsage = parseFloat(document.getElementById("publicTransport").value);

    const electricityCarbon = electricityConsumption * 0.5;
    const carCarbon = carMileage * 0.2;
    const meatCarbon = meatConsumption * 14;
    const publicTransportCarbon = publicTransportUsage * 0.03;

    const totalCarbonFootprint = electricityCarbon + carCarbon + meatCarbon + publicTransportCarbon;
    
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Sua pegada de carbono é de ${totalCarbonFootprint.toFixed(2)}kg`;
}

    
// sistema calculadora de carbono

// sistema calculadora ambiental

function calcular() {
  const usoAgua = parseFloat(document.getElementById("aguaInput").value);
  const producaoLixo = parseFloat(document.getElementById("lixoInput").value);
  const consumoEnergia = parseFloat(document.getElementById("energiaInput").value);

  const fatorAgua = 0.005;
  const fatorLixo = 0.1;
  const fatorEnergia = 0.7;

  const impactoAgua = usoAgua * fatorAgua;
  const impactoLixo = producaoLixo * fatorLixo;
  const impactoEnergia = consumoEnergia * fatorEnergia;

  const totalImpacto = impactoAgua + impactoLixo + impactoEnergia;

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = "Impacto Ambiental Total: " + totalImpacto.toFixed(2) + " kg de CO2";
}

// sistema calculadora ambiental


