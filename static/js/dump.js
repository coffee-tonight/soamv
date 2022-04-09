[Array(1), Array(8), Array(7), Array(7), Array(7), Array(9)]
['Vehicle Details :']
['', 'MODEL :', 'Winger Ambulance', '', 'Engine CC :', '2179', '', 'MILEAGE']
['', 'Engine Number :', '2.2LDICOR27HPYJ12164', '', 'Type of Rg :', 'LPV', 'dt']
['', 'Chassis Number :', 'MAT460082KUH06217', '', 'Number of Seats :', '8', 'ml']
['', 'Tax :', 'LTT', '', 'Odometer Reading :', '', 'odo']
['', '', '', '', '', '', '', 'old', 'new']


[Array(1), Array(3), Array(7), Array(6), Array(6), Array(6), Array(6)]
['Assignment Details :']
['', 'Campus Assigned to :', 'SUM ULTIMATE']
['', 'Operation Incharge :', 'PABITRA DASH', '', '', 'Mob :', '6372900072']
['', 'Driver 1 :', '', '', '', 'Mob :']
[' ', 'Driver 2 :', '', '', '', 'Mob :']
['', 'Officer Assigned To 1 :', '', '', '', 'Mob :']
['', 'Officer Assigned To 2 :', '', '', '', 'Mob :']


Insurance_Details = [Array(1), Array(6), Array(6), Array(9)]['Insurance Details :']
['', 'Insuring Copany :', 'Royal Sundaram General Insurance Co. Limited', '', 'Policy No :', 'VOC0621309000100']
['', 'Insueance Type :', 'NORMAL', '', 'Valid From :', '1/10/2022']
['', 'Insueance Amount :', 'रु 21,210.50', '', 'Valid To :', '1/9/2023', 'DUE:', '9', 'Months']


(3) [Array(1), Array(6), Array(9)]
Fitness_Details = 
['Fitness :']
['', 'Fitness Friquency :', '2YEAR', '', 'Valid From :', '1/29/2022']
['', '', '', '', 'Valid To :', '1/28/2024', 'DUE:', '21', 'Months']



(4) [Array(1), Array(5), Array(9), Array(0)]
['Permit :']
['', 'Type :', 'N/A', '', 'Valid From :']
['', '', '', '', 'Valid To :', '', 'DUE:', '#NUM!', 'Months']


PUC_Details = [Array(1), Array(9)]['PUC :']
['', 'Valid From :', '1/18/2021', '', 'Valid To :', '1/14/2023', 'DUE:', '9', 'Months']



Battery_Details=[Array(1), Array(2), Array(6), Array(6)]
['Battery Details :']
['', 'Battery Spec :']
['', 'Installed Battery Brand :', '', '', 'Warrenty :', 'Valid From :']
['', '', '', '', '', 'Valid To :']


Tyre_Details = [Array(1), Array(2), Array(2), Array(6), Array(6), Array(6), Array(6), Array(6)]
['Tyre Details :']
['', 'Tyre Size Spec :']
['', 'Tyre Chagne Frequency :']
['', '', 'Curent Tyre Brand', '', 'Odometer at Change', 'Replacement Due']
['', 'FR', '', '', '', '0']
['', 'FL', '', '', '', '0']
['', 'RR', '', '', '', '0']
['', 'RL', '', '', '', '0']


Maintenance_Records = [Array(1), Array(9), Array(9), Array(9)]
['Maintenance History']

['Date', 'DESCRIPTION', '', '', 'Workshop/Mechanic', 'Estimate', 'Spare Cost', 'Labor', 'Total']

['1/27/2022', 'Ambulance Both Side Body Fitness yellow sticker', '', '', 'Climax Sticker Art', '', 'रु 1,500.00', 'रु 0.00', 'रु 1,500.00']

['1/4/2022', 'Wheel Allignment', '', '', 'Lalu Automobiles', '', '', 'रु 400.00', 'रु 400.00']


// 0: ['Insurance Details :']
// 1: (6) ['', 'Insuring Company :', 'Royal Sundaram General Insurance Co. Limited', '', 'Policy No :', 'VPC1608519000100']
// 2: (6) ['', 'Insueance Type :', 'NIL DEP', '', 'Valid From :', '3/10/2022']
// 3: (9) ['', 'Insueance Amount :', 'रु 8,014.56', '', 'Valid To :', '3/9/2023', 'DUE:', '11', 'Months']

// Fitness Details:
// 0: ['Fitness :']
// 1: (5) ['', 'Fitness Friquency :', '', '', 'Valid From :']
// 2: (9) ['', '', '', '', 'Valid To :', '3/12/2031', 'DUE:', '107', 'Months']

// Permit Details:
// 0: ['Permit :']
// 1: (5) ['', 'Type :', 'N/A', '', 'Valid From :']
// 2: (9) ['', '', '', '', 'Valid To :', '', 'DUE:', '#NUM!', 'Months']
// 3: []

// PUC Details:
// 0: ['PUC :']
// 1: (9) ['', 'Valid From :', '3/15/2022', '', 'Valid To :', '9/14/2022', 'DUE:', '5', 'Months']

// Battery Details:  
// 0: ['Battery Details :']
// 1: (3) ['', 'Battery Spec :', 'ML-38B20L, A1B0A136743']
// 2: (7) ['', 'Installed Battery Brand :', '', '', 'Warrenty :', 'Valid From :', '5/7/2020']
// 3: (6) ['', '', '', '', '', 'Valid To :']

// Tyre Details:  
// Array(8)
// 0: ['Tyre Details :']
// 1: (3) ['', 'Tyre Size Spec :', '155/65R14 3G']
// 2: (2) ['', 'Tyre Chagne Frequency :']
// 3: (6) ['', '', 'Curent Tyre Brand', '', 'Odometer at Change', 'Replacement Due']
// 4: (6) ['10/9/2020', 'FR', '155/65R14 Apollo TL Tyr', '', '151581', '151581']
// 5: (6) ['10/9/2020', 'FL', 'APOLLO', '', '', '0']
// 6: (6) ['1/22/2019', 'RR', 'APOLLO', '', '', '0']
// 7: (6) ['1/22/2019', 'RL', 'APOLLO', '', '', '0']



// function vehicle_dets(vh_det, name) {
//     console.log("Vehicle Details: ", vh_det);
//     let vehicle_det = document.getElementById(name);

//     document.getElementsByClassName(".vh_det_div").forEach(element => {
        
//     });

//     vehicle_det.removeChild();

//     for (let i = 0; i < vh_det.length; i++) {
//         let vh_det_row = document.createElement("div");
//         vh_det_row.style.display = "flex";
//         vh_det_row.style.flexDirection = "row";

//         for (let j = 0; j < vh_det[i].length; j++) {
//             var vh_det_div = "";
//             if (document.querySelector("vh_det_div") != null) {
//                 vh_det_div = document.querySelector("vh_det_div");
//             } else {
//                 vh_det_div = document.createElement("div");
//             }
            
//             vh_det_div.classList.add("vh_det_div");
//             vh_det_div.innerHTML = vh_det[i][j];
//             vh_det_div.style.margin = "0px 4px";
//             vh_det_div.style.font_size = "28px";
//             vh_det_row.appendChild(vh_det_div);
//         }
//         vehicle_det.appendChild(vh_det_row);
//     }
// }