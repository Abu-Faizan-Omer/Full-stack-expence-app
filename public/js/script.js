const form=document.getElementById("form")
form.addEventListener("submit",function(event){
    event.preventDefault()

    const expence=event.target.expence.value
    const des=event.target.Description.value
    const cat=event.target.Categories.value

    let obj={
        Amount:expence,
        Description: des, // Match property name
        Categories: cat    // Match property name     
    }
   
    axios.post("http://localhost:5000/add-expence",obj)
        .then((res) =>{
            showUserOnScreen(res.data.userData)
        })
        .catch((err) =>{
           
            console.log(err);
        })
})

function showUserOnScreen(obj)
{
    const parentElem=document.getElementById("screen")
    const childElem=document.createElement("li")
    childElem.textContent=obj.Amount +" --- "+obj.Categories+" --- "+obj.Description
    parentElem.appendChild(childElem)

    const deletebtn=document.createElement("button")
    
    deletebtn.textContent="Delete Expence"
    

    deletebtn.addEventListener("click",function(event){
        axios.delete(`http://localhost:5000/delete-expence/${obj.id}`)
            .then(() => {
                parentElem.removeChild(childElem);
            })
            .catch(err => {
                console.error("Error deleting expense:", err);
            });
    })
    const edit=document.createElement("button")
    edit.textContent="Edit Expence"

    childElem.appendChild(deletebtn)
    childElem.appendChild(edit)
}

window.addEventListener('DOMContentLoaded', () => {
    // GET request to fetch existing users
    axios.get("http://localhost:5000/add-expence")
        .then((res) => {
            console.log(res.data);
            res.data.forEach(user => {
                showUserOnScreen(user);
            });
        })
        .catch((err) => {
            console.log(err);
        });
});
