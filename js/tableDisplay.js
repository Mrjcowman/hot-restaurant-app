const cardTemplate = `
    <div class="col s12 l6">
        <div class="card horizontal">
            <div class="card-content">
                <span class="card-title red-text darken-2-text">
                    Table ${tableNum}
                </span>
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <ul>
                        <li>Name: ${name}</li>
                        <li>Phone: ${phone}</li>
                        <li>Email: ${email}</li>
                        <li>ID: ${id}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;

// $.get("/api/tables", function(data) {
//     console.log(data);
//     if(data){
//         for(table in data){
//             let thisCard = $("<div>").addClass("card horizontal");
//             thisCard.append($("<div>").addClass("card-content").append())
            
//         }
//     }
// })

$.get("/api/tables", function(data) {
    console.log(data);
    if(data){
        let tableNum=1;
        for(table in data){
            const name=table.name;
            const phone=table.phone;
            const email=table.email;
            const id=table.id;
            let thisRow = $("<div>").addClass("row").html(cardTemplate);
            $(".tables").append(thisRow);
            tableNum++;
        }
    }
})