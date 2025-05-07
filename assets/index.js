async function start() {
    content = ``;
    await fetch("assets/data.json")
        .then(data => data.json())
        .then(data => {
            data.forEach((item, index) => {
                content += `
                    <div class="card">
                        <p>Entry No. ${index+1}</p>
                        <hr/>
                        ${item.tagalog}
                        <br/><br/>
                        ${item.english}
                    </div>
                `;
            });
        })
    document.getElementById("card-section").innerHTML = content;
}