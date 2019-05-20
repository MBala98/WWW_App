

function generateEmptyTable() {
    let element = document.getElementById('top_table') as HTMLTableElement;
    for (let i = 0; i < 5; i++) {
        let row = element.insertRow(-1);
        let newCell = row.insertCell(0);
        let newCell2 = row.insertCell(1);
        newCell.innerHTML = "random" + i.toString();
        newCell2.innerHTML = (500 - (i*3)).toString();
    }
}

function min(a: number, b: number) : number {
    if (a < b)
        return b;
    else
        return a;
}

function findNameLength(name: string): number {
    for (let i = 0; i < name.length; i++) {
        if (name[i] == '/')
            return i;
    }
    return -1;
}
function generateTable(results: Array<[number, string]>) {
    let element = document.getElementById('top_table') as HTMLTableElement;
    for (let i = 0; i < min(10, results.length); i++) {
        let row = element.insertRow(-1);
        let newCell = row.insertCell(0);
        let newCell2 = row.insertCell(1);
        let length_of_name = findNameLength(results[i][1]);
        newCell.innerHTML = results[i][1].substr(0, length_of_name);
        newCell2.innerHTML = results[i][0].toString();
    }
}

function compare(a: [number, string], b: [number, string]): number {
    return b[0]-a[0];
}

function setResultTable() {
   // localStorage.clear();
    let results : Array<[number, string]> = new Array<[number, string]>();
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        results.push([Number(localStorage.getItem(localStorage.key(i))), localStorage.key(i)]);
        console.log( localStorage.getItem( localStorage.key( i ) ) );
      }

    results.sort(compare)
    if (results.length == 0) {
        generateEmptyTable();
    }
    else {
        generateTable(results);
    }

}

setResultTable();