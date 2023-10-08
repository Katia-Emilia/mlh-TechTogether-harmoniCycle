function calculateCycle() {

    var lastPeriodDate= new Date(document.querySelector('#lastPeriodDate').value);
    var menstruationDuration=document.querySelector('#menstruationDuration').value;
    var follicularDuration=document.querySelector('#follicularDuration').value;
    var ovulationDuration=document.querySelector('#ovulationDuration').value;
    var lutealDuration=document.querySelector('#lutealDuration').value;

    if(menstruationDuration===""){
        menstruationDuration=7;
    }
    if(follicularDuration===""){
        follicularDuration=9;
    }
    if(ovulationDuration===""){
        ovulationDuration=2;
    }
    if(lutealDuration===""){
        lutealDuration=13;
    }

    var menstruationDate = new Date(lastPeriodDate);
    var follicularDate = new Date(menstruationDate);
    follicularDate.setDate(follicularDate.getDate() + menstruationDuration);
    var ovulationDate = new Date(follicularDate);
    ovulationDate.setDate(ovulationDate.getDate() + follicularDuration);
    var lutealDate = new Date(ovulationDate);
    lutealDate.setDate(lutealDate.getDate() + ovulationDuration);
    var mensDate = new Date(lutealDate);   
    mensDate.setDate(mensDate.getDate()+lutealDuration);

    // Display calculated dates
    document.getElementById('menstruationDate').textContent = menstruationDate.toDateString();
    document.getElementById('follicularDate').textContent = follicularDate.toDateString();
    document.getElementById('ovulationDate').textContent = ovulationDate.toDateString();
    document.getElementById('lutealDate').textContent = lutealDate.toDateString();
    document.getElementById('newMenstruationDate').textContent = mensDate.toDateString();
}