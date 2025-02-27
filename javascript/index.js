// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
//getInstruction(
//  "mashedPotatoes",
//  0,
//  step1 => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//  },
//  error => console.log(error)
//);

//getInstruction(
//  "mashedPotatoes",
//  1,
//  step2 => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
//  },
//  error => console.log(error)
//);

//getInstruction(
//  "mashedPotatoes",
//  2,
//  step3 => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
//  },
//  error => console.log(error)
//);

//getInstruction(
//  "mashedPotatoes",
//  3,
//  step4 => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
//  },
//  error => console.log(error)
//);

//getInstruction(
//  "mashedPotatoes",
//  4,
//  step5 => {
//    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//  },
//  error => console.log(error)
//);

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  step0 => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      step1 => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          step2 => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              step3 => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  step4 => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
                    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
                  },
                  error => console.log(error)
                );
              },
              error => console.log(error)
            );
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  },
  error => console.log(error)
);
// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0)
  .then(step0 => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then(step1 => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then(step2 => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then(step3 => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then(step4 => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then(step5 => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then(step6 => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  })
  .catch(err => console.log("An Error occured", err))
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
    //const step0 = await obtainInstruction("broccoli", 0);
    //document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    for (const step of broccoli) {
      const steps = await obtainInstruction("broccoli", broccoli.indexOf(step));
      document.querySelector("#broccoli").innerHTML += `<li>${steps}</li>`;
    }
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log("An async error on 'broccoli' occurred", error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// ..
const sproutPromises = [
  obtainInstruction("brusselsSprouts", 0), //.then(step0 => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`;});
  obtainInstruction("brusselsSprouts", 1), //.then(step1 => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`;});
  obtainInstruction("brusselsSprouts", 2), //.then(step2 => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`;});
  obtainInstruction("brusselsSprouts", 3), //.then(step3 => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`;});
  obtainInstruction("brusselsSprouts", 4), //.then(step4 => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`;});
  obtainInstruction("brusselsSprouts", 5), //.then(step5 => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`;});
  obtainInstruction("brusselsSprouts", 6), //.then(step6 => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`;});
  obtainInstruction("brusselsSprouts", 7), //.then(step7 => {document.querySelector("#brusselsSprouts").innerHTML += `<li>${step7}</li>`;});
];

Promise.all(sproutPromises)
  .then(steps => {
    //console.log(steps);
    steps.forEach(step => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });
    document.querySelector("#brusselsSproutsImg").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch(err => console.log("promise.all error", err));
