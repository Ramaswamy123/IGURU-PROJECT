let result;
const url = 'http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521'

fetch(url).then(response => response.json())
          .then(data => {
            result = data
            responseData()
          }) 
function responseData() {
    console.log(result);
    let studentDetails = result.Response.ProgressList
    console.log(studentDetails)
    
    let englishIntT1 = document.getElementById("english-pt-1-2").textContent;
    let englishT1 = document.getElementById("english-term-1").textContent;
    let englishIntT2 = document.getElementById("english-pt-3-4").textContent;
    let englishT2 = document.getElementById("english-term-2").textContent;
    
    let englishObtT1 = document.getElementById("english-marks-obt-t1").textContent = parseInt(englishIntT1) + parseInt(englishT1);
    let englishObtT2 = document.getElementById("english-marks-obt-t2").textContent = parseInt(englishIntT2) + parseInt(englishT2);
    let englishTotalMarks = document.getElementById("english-term-1and2").textContent = parseInt(englishObtT1) + parseInt(englishObtT2);
    

    let hindiIntT1 = document.getElementById("hindi-pt-1-2").textContent;
    let hindiT1 = document.getElementById("hindi-term-1").textContent;
    let hindiIntT2 = document.getElementById("hindi-pt-3-4").textContent;
    let hindiT2 = document.getElementById("hindi-term-2").textContent;
    
    let hindiObtT1 = document.getElementById("hindi-marks-obt-t1").textContent = parseInt(hindiIntT1) + parseInt(hindiT1);
    let hindiObtT2 = document.getElementById("hindi-marks-obt-t2").textContent = parseInt(hindiIntT2) + parseInt(hindiT2);
    let hindiTotalMarks = document.getElementById("hindi-term-1and2").textContent = parseInt(hindiObtT1) + parseInt(hindiObtT2);

    let mathsIntT1 = document.getElementById("maths-pt-1-2").textContent;
    let mathsT1 = document.getElementById("maths-term-1").textContent;
    let mathsIntT2 = document.getElementById("maths-pt-3-4").textContent;
    let mathsT2 = document.getElementById("maths-term-2").textContent;
    
    let mathsObtT1 = document.getElementById("maths-marks-obt-t1").textContent = parseInt(mathsIntT1) + parseInt(mathsT1);
    let mathsObtT2 = document.getElementById("maths-marks-obt-t2").textContent = parseInt(mathsIntT2) + parseInt(mathsT2);
    let mathsTotalMarks = document.getElementById("maths-term-1and2").textContent = parseInt(mathsObtT1) + parseInt(mathsObtT2);

    let totalIntT1 = document.getElementById("total-pt-1-2").textContent = parseInt(englishIntT1) + parseInt(hindiIntT1) + parseInt(mathsIntT1);
    let totalT1 = document.getElementById("total-term-1").textContent = parseInt(englishT1) + parseInt(hindiT1) + parseInt(mathsT1);
    let totalMarksObtT1 = document.getElementById("total-marks-obt-t1").textContent = parseInt(englishObtT1) + parseInt(hindiObtT1) + parseInt(mathsObtT1);
    
    let totalIntT2 = document.getElementById("total-pt-3-4").textContent = parseInt(englishIntT2) + parseInt(hindiIntT2) + parseInt(mathsIntT2);
    let totalT2 = document.getElementById("total-term-2").textContent = parseInt(englishT2) + parseInt(hindiT2) + parseInt(mathsT2);
    let totalMarksObtT2 = document.getElementById("total-marks-obt-t2").textContent = parseInt(englishObtT2) + parseInt(hindiObtT2) + parseInt(mathsObtT2);
    let totalMarks = document.getElementById("total-term-1and2").textContent = parseInt(englishTotalMarks) + parseInt(hindiTotalMarks) + parseInt(mathsTotalMarks);
    let totalGrade = document.getElementById("total-grade").textContent;
    
    let percentage =  Math.round((totalMarks/600) * 100)

    document.getElementById("result").textContent += " PASS"
    document.getElementById("Percentage").textContent += percentage + "%";
    let grade = document.getElementById("grade").textContent += totalGrade;
    
    // document.getElementById("school-heading").textContent;
    // document.getElementById("school-heading").textContent;
    // document.getElementById("school-heading").textContent = studentDetails.SchoolName;
    // document.getElementById("school-address").textContent = studentDetails.SchoolAddress + ", " + "Ph.: "  + studentDetails.SchoolPhoneNumber;
    // document.getElementById("school-email").textContent = "Reach Us at: " + studentDetails.SchoolEmail;

  
    // document.getElementById("roll-no").textContent += studentDetails.RollNumber;
    // document.getElementById("father-name").textContent += studentDetails.FatherName;
    // document.getElementById("attendance").textContent += studentDetails.cusAttendance[0].PresenceDays + studentDetails.cusAttendance[1].PresenceDays ;

    // document.getElementById("class-name").textContent += studentDetails.ClassName;
    // document.getElementById("student-name").textContent += studentDetails.Name;
    // document.getElementById("mother-name").textContent += studentDetails.MotherName;
    // document.getElementById("date-of-birth").textContent += studentDetails.DOB;
    
    // let res = studentDetails.lstStudent[0].SubjectGrade
    // let filter = result.Response.ProgressList.stGrades.map(each =>each.grade === res)
    // console.log(filter)
  }     

// document.getElementById("res").textContent=20
// let listEl = document.getElementById("element")
// let value = 20
// listEl.textContent += value