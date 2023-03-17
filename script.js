const bookDetails = [];
var setInfo;

class Model{    //KANI SIYA PANG ASSIGN SA DATA
    constructor(title,author,date){     //Data Assignment of roles such as Title, Author, Date
    this.title = title;     //First role, Title
    this.author = author;   //Second role, Author
    this.date = date;       //Third role, Date
    }
}

function View(){ //KANI SIYA TIG DISPLAY For UI
    var set = '';   
    for (i=0; i<bookDetails.length;i++){ //looping the data for vertical listing
        set += bookDetails[i] + "<br>";
    }
    document.getElementById('view').innerHTML=set; //Display to HTML
}

function Controller(){ //KANI SIYA MAG KUHA SA DATA NGA I ASSIGN 
    const bookinfo = document.getElementById('input').value; //Getting the value of Inputted Data
    const infos = bookinfo.split('-') // Separating them based on dash sign -->> -
    setInfo = new Model(infos[0],infos[1],infos[2]); //Pass the separated data for assigning into the Model
    bookDetails.push("Title: " + setInfo.title + "<br>" + "Author: " + setInfo.author+ "<br>" + "Date: " + setInfo.date + "<br>"); // Adding the data to the Array
    View(); //Calling view for data updates to display 
}