const  sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');


const themeToggler = document.querySelector('.theme-toggler');


/*datetime*/

function updateDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  const formattedTime = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

  const fullDateTime = `${day} ${month} ${year}, ${formattedTime}`;

  document.getElementById("datetime").textContent = fullDateTime;
}

// Initial call + update every second
updateDateTime();
setInterval(updateDateTime, 1000);




let homebtn=document.getElementById("homebtn");
let dashboardbtn=document.getElementById("dashboard");
let aitreatmentbtn=document.getElementById("aitreatment");    
let reportsbtn=document.getElementById("reports");
let homeblock=document.getElementById("home");
let dashboardblock=document.getElementById("dashboardmain");
let aitreatmentblock=document.getElementById("aitreatmentmain");
let reportsblock=document.getElementById("reportsmain");

homebtn.addEventListener("click",function(){
    homeblock.style.display="block";
    dashboardblock.style.display="none";
    aitreatmentblock.style.display="none";
    reportsblock.style.display="none";
})

dashboardbtn.addEventListener("click",function(){
    homeblock.style.display="none";
    dashboardblock.style.display="block";
    aitreatmentblock.style.display="none";
    reportsblock.style.display="none";
   
})
aitreatmentbtn.addEventListener("click",function(){
    homeblock.style.display="none";
    dashboardblock.style.display="none";
    aitreatmentblock.style.display="block";
    reportsblock.style.display="none";
})
reportsbtn.addEventListener("click",function(){
    homeblock.style.display="none";
    dashboardblock.style.display="none";
    aitreatmentblock.style.display="none";
    reportsblock.style.display="block";
})

let getstartedbtn=document.getElementById("getit")
let viewdashboardbtn=document.getElementById("viewdashboardbtn")

getstartedbtn.addEventListener("click",function(){
  homeblock.style.display="none";
  dashboardblock.style.display="none";
  aitreatmentblock.style.display="block";
  reportsblock.style.display="none";
})
viewdashboardbtn.addEventListener("click",function(){
  homeblock.style.display="none";
    dashboardblock.style.display="block";
    aitreatmentblock.style.display="none";
    reportsblock.style.display="none";
})

/*animation containers*/
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('box1').classList.add('show'), 100);
  setTimeout(() => document.getElementById('box2').classList.add('show'), 300);
  
});


console.log("hello")



/*userdeatils dom*/
let userdetails=JSON.parse(localStorage.getItem("userdetails"));
let username=document.getElementById("profilename");
let username2=document.getElementById("username2");
let role=document.getElementById("rolename")
username.textContent=userdetails[0].name
username2.textContent=userdetails[0].name
username.style.fontSize=userdetails[0].name.length>10?"20px":"30px";
role.textContent=userdetails[0].role

/*counter*/
function animateCounter(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current + "+";
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}
window.onload = () => {
  animateCounter("patientscount", 0, 50, 4000); // from 0 to 50 in 4 seconds
  animateCounter("doctorcount", 0, 100, 4000); // from 0 to 100 in 4 seconds
  animateCounter("hospitalcount", 0, 48, 4000); // from 0 to 50 in 4 seconds
};


/*ai_treatment_dom*/

/*API*/








function typeText(elementId, text, delay = 1000) {
  const element = document.getElementById(elementId);
  const container = document.getElementById("aireportmain");
  element.innerText = "";  // Clear previous text
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
      // Auto-scroll the container to the bottom
      container.scrollTop = container.scrollHeight;
      setTimeout(type, delay);
    }
  }
  type();
}




let element=document.getElementById("explanation");
function formatApiText(rawText) {
    // Convert bold (**text**) to <strong>
    rawText = rawText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
    // Convert italic (*text*) to <em> (make sure it's not inside bold)
    rawText = rawText.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  
    // Optional: Convert key sections into headers
    rawText = rawText.replace(/<strong>(Patient Health Status Summary:|Key Findings:|Recommendations:|Important Considerations:)<\/strong>/g, '<h3>$1</h3>');
  
    // Convert numbered points like "1." into <ol><li>...</li></ol>
    // You can also add more logic to better structure lists if needed.
  
    // Replace line breaks with <br>
    rawText = rawText.replace(/\n/g, '<br>');
  
    return rawText;
  }
 



  /*new_report_dom*/
  let reportbtn=document.getElementById("newreport");
  let noofreports=0;
  let aitreatmentcontainer=document.getElementById("aitreatmentmain");

function newreportgenerate(){
  
  noofreports+=1
  let reportcontainer=document.createElement("div");
  reportcontainer.className="aireportmain";
  reportcontainer.id="aireportmain";
  aitreatmentcontainer.appendChild(reportcontainer);

  let headercontainer=document.createElement("div");
  headercontainer.className="report-header";
  reportcontainer.appendChild(headercontainer);

  let reportno=document.createElement("p");
  reportno.textContent="Report "+(noofreports);
  headercontainer.appendChild(reportno);

  let savebtn=document.createElement("button");
  savebtn.className="toggle-btn";
  savebtn.id="toggleButton";
  savebtn.textContent="Save report";
  headercontainer.appendChild(savebtn);

  let cancelbtn=document.createElement("button");
  cancelbtn.className="cancel-btn";
  cancelbtn.id="toggleButton";
  cancelbtn.textContent="Cancel report";
  headercontainer.appendChild(cancelbtn);

  let subcontainer=document.createElement("div");
  subcontainer.className="report-container expanded";
  subcontainer.id="reportContainer";
  reportcontainer.appendChild(subcontainer);

  /*scrolling_container_input_field*/
  const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scrollcontainer';

    // 2) Create the inner container with class "ehrinputform"
    const ehrInputForm = document.createElement('div');
    ehrInputForm.className = 'ehrinputform';

    // 3) Create the <form> element
    const form = document.createElement('form');

    // 4) Create the .formalign container
    const formalign = document.createElement('div');
    formalign.className = 'formalign';

    // 5) Create the first column <div>
    const firstColumnDiv = document.createElement('div');

    // -- Age
    const ageField = document.createElement('div');
    ageField.className = 'form-field';
    const ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age:';
    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.id = 'age';
    ageField.appendChild(ageLabel);
    ageField.appendChild(ageInput);
    firstColumnDiv.appendChild(ageField);

    // -- Glucose
    const glucoseField = document.createElement('div');
    glucoseField.className = 'form-field';
    const glucoseLabel = document.createElement('label');
    glucoseLabel.textContent = 'Glucose (mg/dL):';
    const glucoseInput = document.createElement('input');
    glucoseInput.type = 'number';
    glucoseInput.id = 'glucose';
    glucoseField.appendChild(glucoseLabel);
    glucoseField.appendChild(glucoseInput);
    firstColumnDiv.appendChild(glucoseField);

    // -- Systolic
    const systolicField = document.createElement('div');
    systolicField.className = 'form-field';
    const systolicLabel = document.createElement('label');
    systolicLabel.textContent = 'Systolic Blood Pressure(mmHg):';
    const systolicInput = document.createElement('input');
    systolicInput.type = 'number';
    systolicInput.id = 'systolic';
    systolicField.appendChild(systolicLabel);
    systolicField.appendChild(systolicInput);
    firstColumnDiv.appendChild(systolicField);

    // -- BMI
    const bmiField = document.createElement('div');
    bmiField.className = 'form-field';
    const bmiLabel = document.createElement('label');
    bmiLabel.textContent = 'BMI:';
    const bmiInput = document.createElement('input');
    bmiInput.type = 'number';
    bmiInput.step = '0.1';
    bmiInput.id = 'bmi';
    bmiField.appendChild(bmiLabel);
    bmiField.appendChild(bmiInput);
    firstColumnDiv.appendChild(bmiField);

    // -- Exercise Frequency
    const exerciseField = document.createElement('div');
    exerciseField.className = 'form-field';
    const exerciseLabel = document.createElement('label');
    exerciseLabel.textContent = 'Exercise Frequency (hr/day):';
    const exerciseInput = document.createElement('input');
    exerciseInput.type = 'number';
    exerciseInput.id = 'exercise';
    exerciseField.appendChild(exerciseLabel);
    exerciseField.appendChild(exerciseInput);
    firstColumnDiv.appendChild(exerciseField);

    let insulincontainer=document.createElement("div")
    insulincontainer.className="form-field"
    firstColumnDiv.appendChild(insulincontainer)


    let insulinlabel=document.createElement("label")
    insulinlabel.textContent="Insulin(units/day)"
    insulinlabel.setAttribute("for","insulin")

    let insulininput=document.createElement("input")
    insulininput.type="number"
    insulininput.id="insulin"

    insulincontainer.appendChild(insulinlabel)
    insulincontainer.appendChild(insulininput)


    // 6) Create the second column <div>
    const secondColumnDiv = document.createElement('div');

    // -- Gender
    const genderSelectDiv = document.createElement('div');
    genderSelectDiv.className = 'select';
    const genderLabel = document.createElement('label');
    genderLabel.setAttribute('for', 'selectgender');
    genderLabel.textContent = 'Gender';
    const genderSelect = document.createElement('select');
    genderSelect.className = 'selectgender';
    genderSelect.id = 'selectgender';

    const maleOption = document.createElement('option');
    maleOption.value = 'male';
    maleOption.textContent = 'MALE';
    maleOption.selected = true;

    const femaleOption = document.createElement('option');
    femaleOption.value = 'female';
    femaleOption.textContent = 'FEMALE';

    genderSelect.appendChild(maleOption);
    genderSelect.appendChild(femaleOption);
    genderSelectDiv.appendChild(genderLabel);
    genderSelectDiv.appendChild(genderSelect);
    secondColumnDiv.appendChild(genderSelectDiv);

    // -- HbA1c
    const hba1cField = document.createElement('div');
    hba1cField.className = 'form-field';
    const hba1cLabel = document.createElement('label');
    hba1cLabel.textContent = 'HbA1c%';
    const hba1cInput = document.createElement('input');
    hba1cInput.type = 'number';
    hba1cInput.step = '0.1';
    hba1cInput.id = 'hba1c';
    hba1cField.appendChild(hba1cLabel);
    hba1cField.appendChild(hba1cInput);
    secondColumnDiv.appendChild(hba1cField);

    // -- Diastolic
    const diastolicField = document.createElement('div');
    diastolicField.className = 'form-field';
    const diastolicLabel = document.createElement('label');
    diastolicLabel.textContent = 'Diastolic Blood Pressure(mmHg):';
    const diastolicInput = document.createElement('input');
    diastolicInput.type = 'number';
    diastolicInput.id = 'diastolic';
    diastolicField.appendChild(diastolicLabel);
    diastolicField.appendChild(diastolicInput);
    secondColumnDiv.appendChild(diastolicField);

    let medicationcontainer=document.createElement("div")
    medicationcontainer.className="select"
    secondColumnDiv.appendChild(medicationcontainer)

    const medicationLabel = document.createElement('label');
    medicationLabel.setAttribute('for', 'medicationselect');
    medicationLabel.textContent = 'select medication';
    const medicationSelect = document.createElement('select');
    medicationSelect.className = 'selectgender';
    medicationSelect.id = 'medicationselect';

    const insulinOption = document.createElement('option');
    insulinOption.value = 'metformin';
    insulinOption.textContent = 'METFORMIN';
    insulinOption.selected = true;

    const secondOption = document.createElement('option');
    secondOption.value = 'sulfonylureas';
    secondOption.textContent = 'SULFONYLUREAS';

    medicationSelect.appendChild(insulinOption)
    medicationSelect.appendChild(secondOption)
    medicationcontainer.appendChild(medicationLabel)
    medicationcontainer.appendChild(medicationSelect)
    secondColumnDiv.appendChild(medicationcontainer)
    


    let instructioncontainer=document.createElement("div")
    secondColumnDiv.appendChild(instructioncontainer)

   let instructionlabel=document.createElement("p")
    instructionlabel.className="instructionlabel"
   instructionlabel.textContent="Enter your instructions"
   instructioncontainer.appendChild(instructionlabel)

    let textarea=document.createElement("textarea");
    textarea.id="text-area"
    textarea.className="textarea"
    instructioncontainer.appendChild(textarea)

    // 7) Append the two column divs to formalign
    formalign.appendChild(firstColumnDiv);
    formalign.appendChild(secondColumnDiv);

    // 8) Create the Predict Treatment button
    const predictBtn = document.createElement('button');
    predictBtn.className = 'predictbtn';
    predictBtn.id = 'predictbutton';
    predictBtn.textContent = 'Predict Treatment';
    // Attach your function call. If you already have a function named predictTreatment, do:
    predictBtn.setAttribute('type', 'button'); // so it doesn't try to submit the form

    // 9) Assemble the form
    form.appendChild(formalign);
    form.appendChild(predictBtn);

    // 10) Put the form into ehrInputForm, then into scrollContainer
    ehrInputForm.appendChild(form);
    scrollContainer.appendChild(ehrInputForm);

    subcontainer.appendChild(scrollContainer);


    /*results_div*/
    const outerDiv = document.createElement('div');

    // 2) Create the .aitreatmentresult <div>
    const aiTreatmentResultDiv = document.createElement('div');
    aiTreatmentResultDiv.className = 'aitreatmentresult';

    // 3) Create the .aitreatmentresultcard <div>
    const aiTreatmentResultCardDiv = document.createElement('div');
    aiTreatmentResultCardDiv.className = 'aitreatmentresultcard';

    // 4) Create the <p id="treatmentResult"> with inner HTML
    const pTreatmentResult = document.createElement('p');
    pTreatmentResult.id = 'treatmentResult';
    pTreatmentResult.innerHTML = '<strong>Recommended treatment:</strong>';

    // 5) Create the explanation container <div id="explanation-container">
    const explanationContainerDiv = document.createElement('div');
    explanationContainerDiv.id = 'explanation-container';

    // 6) Create the <span id="explanation" style="white-space: pre-wrap;">
    const explanationSpan = document.createElement('span');
    explanationSpan.id = 'explanation';
    explanationSpan.style.whiteSpace = 'pre-wrap';  // matches your snippet
    explanationSpan.style.color="black"

    // 7) Create the <span id="cursor">|</span>
    const cursorSpan = document.createElement('span');
    cursorSpan.id = 'cursor';
    cursorSpan.textContent = '|';

    // 8) Append explanation and cursor spans to explanation-container
    explanationContainerDiv.appendChild(explanationSpan);
    explanationContainerDiv.appendChild(cursorSpan);

    // 9) Append <p> and explanation-container to the .aitreatmentresultcard
    aiTreatmentResultCardDiv.appendChild(pTreatmentResult);
    aiTreatmentResultCardDiv.appendChild(explanationContainerDiv);

    // 10) Append .aitreatmentresultcard to the .aitreatmentresult <div>
    aiTreatmentResultDiv.appendChild(aiTreatmentResultCardDiv);

    // 11) Append .aitreatmentresult <div> to the outer <div>
    outerDiv.appendChild(aiTreatmentResultDiv);

    subcontainer.appendChild(outerDiv);
    
    predictBtn.addEventListener("click", function() {

    predictbtntreatment(genderSelect,ageInput,glucoseInput,systolicInput,bmiInput,exerciseInput,hba1cInput,diastolicInput,explanationSpan,medicationSelect,insulininput,textarea);
  })
  
  cancelbtn.addEventListener("click",function(){
    reportcontainer.style.display="none"
    noofreports-=1
  })
  savebtn.addEventListener("click",function(){
    let explanationelement=document.getElementById("explanation")
    let latestupdate=document.getElementById("latestupdate")
    console.log(explanationelement)
    if (explanationelement.innerHTML.length>1){
      alert("report can saved")
      const now = new Date();

      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
      const year = now.getFullYear();

      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');


      const dateStr = `${day}-${month}-${year}`;
      const timeStr = `${hours}:${minutes}:${seconds}`;

      const timestamp = `${dateStr} ${timeStr}`
     
      latestupdate.textContent=timestamp
      latestupdate.style.color="red"


      let age=ageInput.value;
      let glucose=glucoseInput.value;
      let hba1c=hba1cInput.value;
      let systolic=systolicInput.value;
      let diastolic=diastolicInput.value;
      let bmi=bmiInput.value;
      let exercise=exerciseInput.value;
      let gender=genderSelect.value
      let medicationtreat=medicationSelect.value;
      let insulin=insulininput.value

      
      
      
      let stringformat=JSON.stringify({
        "Age": age,
        "Glucose": glucose,
        "gender":gender,
        "HbA1c": hba1c +"%",
        "Systolic_BP": systolic,
        "Diastolic_BP": diastolic,
        "BMI": bmi,
        "Medication": 1,
        "Exercise": exercise,
        "medication":medicationtreat,
        "Insulin":insulin
      });



      addreports(reportno,timeStr,dateStr,stringformat,explanationSpan);
      updatedashboard(glucose,hba1c,systolic,diastolic,bmi,exercise,insulin)

    }
    else{
      alert("Enter inputs and get AI-treatment")
    }
  })

}




  reportbtn.addEventListener("click",function(){
    const loader = document.getElementById("loader");
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none";
      newreportgenerate()
    }, 1000);
      
  });


  /*toggle button*/



  async function getGeneratedContent(prompt,explanationSpan) {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt })
      });
      const data = await response.json();
      console.log(data.generated_text);
      explanationSpan.innerHTML=formatApiText(data.generated_text);
      
      // Process/display data.generated_text as needed
    } catch (error) {
      return 'Error: '
    }
  }
  

  let predictbutton=document.getElementById("predictbutton")
  console.log(predictbutton)


  async function getsolution(data){
    try {
      const response = await fetch('https://project001-ro90.onrender.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const data = await response.json();
      
      
      // Process/display data.generated_text as needed
    } catch (error) {
      return 'Error: '
    }
  }

  function predictbtntreatment(genderSelect,ageInput,glucoseInput,systolicInput,bmiInput,exerciseInput,hba1cInput,diastolicInput,explanationSpan,medicationSelect,insulininput,textarea) { 
      let Solution=""
      let age=ageInput.value;
      let glucose=glucoseInput.value;
      let hba1c=hba1cInput.value;
      let systolic=systolicInput.value;
      let diastolic=diastolicInput.value;
      let bmi=bmiInput.value;
      let exercise=exerciseInput.value;
      let instruction=textarea.value;
      let gender=genderSelect.value
      let medicationtreat=medicationSelect.value;
      let insulin=insulininput.value

      console.log(medicationtreat)
      
      
      
      let stringformat=JSON.stringify({
        "Age": age,
        "Glucose": glucose,
        "gender":gender,
        "HbA1c": hba1c +"%",
        "Systolic_BP": systolic,
        "Diastolic_BP": diastolic,
        "BMI": bmi,
        "Medication": medicationtreat,
        "Exercise": exercise+"hr/day",
        "Insulin":insulin+"units/day"
      });
      let solution=getsolution(stringformat)
      getGeneratedContent("the below is my EHR data"+ stringformat +"suffering with diabetes. Generate a summary of the patient's health status and any recommendations for treatment or lifestyle changes.and below are the patients prompt"+instruction+Solution,explanationSpan);
  }




/*reports download functionality*/



function downloadHTML(dashboardcontainer,explanationSpan) {
  const container = document.getElementById('myContainer');
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Downloaded HTML</title>
      </head>
      <body>
        ${dashboardcontainer.outerHTML}
        ${explanationSpan.outerHTML}
      </body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'container.html';
  link.click();
  URL.revokeObjectURL(link.href);
}

let tablebody=document.getElementById("tablebody")
let savednoofreports=0
console.log(tablebody)

function addreports(reportno,timeStr,dateStr,stringformat,explanationSpan){
      savednoofreports+=1
      
      let tabletr=document.createElement("tr")
      tablebody.appendChild(tabletr)

      let tablereportno=document.createElement("td")
      tablereportno.textContent=savednoofreports
      tabletr.appendChild(tablereportno)

      let reportname=document.createElement("td")
      reportname.textContent=reportno.textContent
      tabletr.appendChild(reportname)


      

      let date=document.createElement("td")
      date.textContent=dateStr
      tabletr.appendChild(date)

      let time=document.createElement("td")
      time.textContent=timeStr
      tabletr.appendChild(time)

      let downloadbtn=document.createElement("button")
      downloadbtn.textContent="Download";
      downloadbtn.style.color="black"
      let buttontd=document.createElement("td")
      buttontd.appendChild(downloadbtn)

      tabletr.appendChild(buttontd)

      let dashboardcontainer=document.getElementById("dashboardmain")
      downloadbtn.addEventListener("click", async function() {
        downloadHTML(dashboardcontainer,explanationSpan);
        sendEmail();
      })

}

/*dashboard dom*/

function updatedashboard(glucose,hba1c,systolic,diastolic,bmi,exercise,insulin){
  let glucoselevel=document.getElementById("glucoselevel")
  let hemoglobin=document.getElementById("hba1clevel")
  let bloodpressure=document.getElementById("bplevel");
  let bmilevel=document.getElementById("bmilevel")
  let exerciselevel=document.getElementById("exerciselevel")
  let insulinlevel=document.getElementById("insulinlevel")  

  let glucosewm=document.getElementById("glucosewm");
  let hbA1cwm=document.getElementById("hemowm");
  let bpwm=document.getElementById("bpwm");
  let bmiwm=document.getElementById("bmiwm")
  let exercisewm=document.getElementById("exwm")
  let insulinwm=document.getElementById("insulinwm")






  glucoselevel.textContent=glucose+"/200"
  hemoglobin.textContent=hba1c+"/10"
  bloodpressure.textContent=systolic+"/140"
  bmilevel.textContent=bmi+"/30"
  exerciselevel.textContent=exercise+"/4"
  insulinlevel.textContent=insulin+"/60"
  console.log(insulinlevel)
  console.log(bmilevel)
  console.log(exerciselevel)



   glucose=parseInt(glucose)
   hba1c=parseInt(hba1c)
   systolic=parseInt(systolic)
   diastolic=parseInt(diastolic)
   bmi=parseInt(bmi)
    exercise=parseInt(exercise)
    insulin=parseInt(insulin)

   let dia=parseInt(diastolic)
  if (glucose>0){
    if (glucose < 70) {
      glucosewm.textContent = "🔴 Warning: Your glucose level is too low!";
      glucosewm.style.color = "red";
    } else if (glucose >= 70 && glucose <= 130) {
      glucosewm.textContent = "✅ Glucose level is normal.";
      glucosewm.style.color = "green";
    } else if (glucose > 130 && glucose <= 180) {
      glucosewm.textContent = "🟡 Caution: Glucose level is slightly high.";
      glucosewm.style.color = "orange";
    } else {
      glucosewm.textContent = "🔴 Alert: Your glucose level is too high!";
      glucosewm.style.color = "red";
    }
  }
  if (hba1c>0){
    if (hba1c < 5.7) {
      hbA1cwm.textContent = "✅ HbA1c is normal.";
      hbA1cwm.style.color = "green";
    } else if (hba1c >= 5.7 && hba1c < 6.5) {
      hbA1cwm.textContent = "🟡 Caution: You are in the prediabetes range.";
      hbA1cwm.style.color = "orange";
    } else if (hba1c >= 6.5 && hba1c < 8.0) {
      hbA1cwm.textContent = "🔴 Alert: You are in the diabetes range.";
      hbA1cwm.style.color = "red";
    } else {
      hbA1cwm.textContent = "🔴 Warning: HbA1c indicates poor glucose control!";
      hbA1cwm.style.color = "darkred";
    }
  }
  if (systolic>0){
    if (systolic >= 180 || dia >= 120) {
      bpwm.textContent = "🚨 Hypertensive Crisis: Seek immediate medical attention!";
      bpwm.style.color = "darkred";
    } else if (systolic >= 140 || dia >= 90) {
      bpwm.textContent = "🔴 Stage 2 Hypertension: Medical attention needed.";
      bpwm.style.color = "darkred";
    } else if ((systolic >= 130 && systolic <= 139) || (dia >= 80 && dia <= 89)) {
      bpwm.textContent = "🔴 Stage 1 Hypertension: Monitor closely.";
      bpwm.style.color = "red";
    } else if (systolic >= 120 && systolic < 130 && dia < 80) {
      bpwm.textContent = "🟡 Elevated: Lifestyle changes recommended.";
      bpwm.style.color = "orange";
    } else if (systolic < 120 && dia < 80) {
      bpwm.textContent = "✅ Blood pressure is normal.";
      bpwm.style.color = "green";
    } else {
      bpwm.textContent = "⚠️ Please enter accurate values.";
      bpwm.style.color = "gray";
    }
  }

  if(bmi>0){
    
    let message = "", color = "";

    if (bmi < 18.5) {
      message = `⚠️ Your BMI is ${bmi}. You are underweight.`;
      color = "orange";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = `✅ Your BMI is ${bmi}. You have a normal weight.`;
      color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = `⚠️ Your BMI is ${bmi}. You are overweight.`;
      color = "orange";
    } else if (bmi >= 30 && bmi <= 34.9) {
      message = `🔴 Your BMI is ${bmi}. Obesity Class I.`;
      color = "red";
    } else if (bmi >= 35 && bmi <= 39.9) {
      message = `🔴 Your BMI is ${bmi}. Obesity Class II.`;
      color = "darkred";
    } else {
      message = `🚨 Your BMI is ${bmi}. Severe obesity! Immediate attention needed.`;
      color = "darkred";
    }

    bmiwm.textContent = message;
    bmiwm.style.color = color;
  }
  
 if(exercise!=0){
    if (exercise < 1) {
      exercisewm.textContent = "🔴 Warning: Low exercise frequency!";
      exercisewm.style.color = "red";
    } else if (exercise >= 1 && exercise <= 2) {
      exercisewm.textContent = "🟡 Moderate exercise frequency.";
      exercisewm.style.color = "orange";
    } else {
      exercisewm.textContent = "✅ Good job! High exercise frequency.";
      exercisewm.style.color = "green";
    }
  }

  if(insulin>0){
    if (insulin < 20) {
      insulinwm.textContent = "✅ Insulin level is normal.";
      insulinwm.style.color = "green";
    } else if (insulin >= 20 && insulin <= 50) {
      insulinwm.textContent = "🟡 Caution: Insulin level is slightly high.";
      insulinwm.style.color = "orange";
    } else {
      insulinwm.textContent = "🔴 Alert: High insulin level!";
      insulinwm.style.color = "red";
    }
  }

  
}

/*progress bar*/
function updateProgress() {
  const glucose = parseFloat(120);
  const maxGlucose = 200; // Adjust this max value as needed

  if (isNaN(glucose) || glucose < 0) return;

  const percent = Math.min((glucose / maxGlucose) * 100, 100).toFixed(0);
  const offset = 188.5 - (188.5 * percent) / 100;

  document.querySelector(".progress-ring").style.strokeDashoffset = offset;
  document.getElementById("glucosePercent").textContent = `${percent}%`;
}


/*email send*/

/*
  localStorage.setItem("userdetails", JSON.stringify([
    { email: "test@example.com", ...otherData }
  ]));
*/

// This snippet runs in the browser (e.g., inside a <script> tag or a separate JS file).
function sendEmail() {
  // 1) Retrieve the array from localStorage
  const userdetails = JSON.parse(localStorage.getItem("userdetails")) || [];

  // 2) Get the first object’s email
  const userEmail = userdetails.length > 0 ? userdetails[0].email : null;
  console.log(userEmail)

  if (!userEmail) {
    console.error("No user email found in localStorage");
    return;
  }

  // 3) Send the email to your Node server
  fetch("http://127.0.0.1:5000/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail }),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log("Server response:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
