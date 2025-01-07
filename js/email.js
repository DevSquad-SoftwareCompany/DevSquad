function sendbtn() {
    var param ={
      name:document.getElementById("full_name").value,
      email:document.getElementById("email").value,
      phone:document.getElementById("phone").value,
      message:document.getElementById("message").value,
  
    };
  
    const serviceId="service_0suqota";
    const templateId="template_6m7ze69";
    
  
    emailjs
    .send(serviceId,templateId,param)
    .then((res)=>{
      document.getElementById("full_name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your Message Send!")
    })
    .catch((err)=>console.log(err));
  
    
  }