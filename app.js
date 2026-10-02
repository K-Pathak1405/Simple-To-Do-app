 let todo = [];

 let request = prompt("Please enter your request");

 while(true) {
    if(request == "quit") {
        console.log("quiting app");
        break;
    }

    if(request == "list"){
        console.log("------------------");
        for(let i = 0 ; i<todo.length ; i++) {
            console.log(i,todo[i]);
        }
        console.log("------------------");
    }
    else if(request == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");

    }
    else if(request == "delete") {
        let det = prompt("Please enter the task index that you want to delete");
        todo.splice(det,1)
        console.log("task deleted");

    }
    else {
        console.log("You enter wrong request")
    }
    request = prompt("Please enter your request");
 }