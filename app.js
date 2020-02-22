//to get names input
let name=document.querySelectorAll('#Input');

//to get grade input
let grade=document.querySelectorAll('#grade');

//to get credit hours input
let credit=document.querySelectorAll('#credit');

//to get output div
let output=document.getElementById('output'); 



//calculate button
let calculate_grade=document.querySelector('#cal');
calculate_grade.addEventListener('click',calculate);

//function to calculate grade
function calculate(){
    //array to store names
    let names=[];

    //array to store grades
    let grades=[];

    //array to store credit hours
    let credit_hours=[];

    //to reset value of output
    

    //for loop to store names in an array
    for(let i=0;i<name.length;i++){
        let val =name[i].value;
        if(val===''){

        }
        else{
            names.push(val);
        }
    }

    //for loop to store grades in an array
    for(let i=0;i<grade.length;i++){
        let val1=grade[i].value;
        if(val1==='-'){
            grades.push('F');
        }
        else{
            grades.push(val1);
        }
    }

    //array to store grade in points
    let grades_points=[];
    
    //to convert grades into points
    for(let i=0;i<grades.length;i++){
        if(grades[i]==='A'){
            grades_points.push(Number(4.0));
        }
        else if(grades[i]==='B'){
            grades_points.push(Number(3.0));
        }
        else if(grades[i]==='C'){
            grades_points.push(Number(2.0));
        }
        else if(grades[i]==='D'){
            grades_points.push(Number(1.0));
        }
        else if(grades[i]==='F'){
            grades_points.push(Number(0.0));
        }
    }

    //for loop to store credit hours in an array
    for(let i=0;i<credit.length;i++){
        let val2 = credit[i].value;
        if(val2==='-'){
            credit_hours.push(Number(0));
        }
        else{
            credit_hours.push(Number(val2));
        }
    }
   console.log("credit hours:"+credit_hours);

    //to find sum of all credit hours
    let creditsum=0;
    for(let i=0;i<credit_hours.length;i++){
        creditsum +=Number(credit_hours[i]);
    }
    console.log("Sum Of All Credit hours is:"+creditsum);
    console.log(credit_hours);
    console.log(grades_points);
    
    let final_sum=0;

    //for loop to find product of credit and grades
    for(let i=0;i<6;i++){
        if(credit_hours[i] === '-' && grades_points[i] === '-'){
        }
        else{
            final_sum +=(credit_hours[i])*(grades_points[i]);
        }
        
    }
   
    //gpa calculation
    let gpa;
    gpa =final_sum/creditsum;
    console.log("Your GPA:"+gpa);

    //adding content to html page

    //creating element
    let h=document.createElement('h1');

    //create text node
    let text=document.createTextNode(gpa);

    console.log(text)
    //push text node to h
    h.appendChild(text);
    output.innerHTML=h.textContent;
}

