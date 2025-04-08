let bills = [275, 40, 430];

function calcTotal(bill) {
    let tip = bill >= 50 && bill < 300 ? 0.15 : 0.2;
    console.log(
        `The bill was ${bill} the tip was ${bill * tip}, and the total value ${bill + bill * tip}.`
    );
}

let i = 0;
for (const element of bills) {
    console.log(`For Data ${++i} : `);
    calcTotal(element);
}
