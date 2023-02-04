/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Dynamic Hand Gesture recognition using 3D RCNN model in real time",
    authors:
      "Mithun Channayanamath, Akshay Math, Venkat Peddigari, Shilpa Kamath, Kavita Chachadi, Faisal Sabeeh, Ameen Attar",
    conferences:
      "Springer Singapore",
    researchYr: 2018,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "Ameen Attar.",
    },
    abstract:
      "Hand gesture recognition in computer science and language translation is the means of recognizing hand gestures through mathematical methods. Gesture recognition has become one of growing fields of research. Hand gesture recognition has ample number of applications including human–computer interaction, sign language and virtual/augmented gaming technology. Users can perform gestures to control or interact with devices without physically touching them. There are many architectures designed in the field of gesture detection, but existing traditional solutions are not robust to detect hand gestures with high accuracy in real time in the presence of complex patterns in performing hand gestures. In this paper, we present a fast and efficient algorithm for classifying different dynamic hand gestures using 3D-convolution neural networks. Unlike 2D-convolution neural networks, 3D-convolution networks extract features along the temporal dimension for analysis of gestures performed in videos. The paper also focuses on improving accuracy and describes data preprocessing and optimization techniques for obtaining the model inference in real time at 30fps. Our method achieves a correct recognition accuracy of 90.7% for the evaluation made on the testing videos in Chalearn LAP Continuous Gesture dataset [1]. The detection process can be tested on laptops with standard specifications.",
    absbox: "absPopup1",
  },

 
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
