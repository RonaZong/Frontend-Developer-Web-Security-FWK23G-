const main = async() => {
    // fetch
    const response = await fetch("/data.json");
    const notes = await response.json();

    // render
    var ul = document.createElement("ul");
    ul.setAttribute("class", "notes");

    notes.forEach(function (note) {
        var li = document.createElement("li");
        ul.appendChild(li);
        const img = document.createElement("img");
        img.setAttribute("src", note.img);
        li.appendChild(img);
        li.appendChild(document.createTextNode(note.content));
    });

    document.getElementById("notes").appendChild(ul);
};

main();