function displayImage() {

    //Letter
    const input1_letter = document.getElementById("charInput1").value.toUpperCase();
    const input2_letter = document.getElementById("charInput2").value.toUpperCase();

    //Number
    const input1_number = input1_letter.charCodeAt(0) - 64; //Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII
    const input2_number = input2_letter.charCodeAt(0) - 64;//Converts the letter to a number (https://www.ascii-code.com); For instance, 'A' is 65 in ASCII


    const imgElement1 = document.getElementById("displayedImage1");
    const imgElement2 = document.getElementById("displayedImage2");
    const imgElement3 = document.getElementById("displayedImage3");
    const imgElement4 = document.getElementById("displayedImage4");
    const imgElement5 = document.getElementById("displayedImage5");
    const imgElement6 = document.getElementById("displayedImage6");
    const imgElement7 = document.getElementById("displayedImage7");
    const imgElement8 = document.getElementById("displayedImage8");
    const imgElement9 = document.getElementById("displayedImage9");
    const imgElement10 = document.getElementById("displayedImage10");
    const imgElement11 = document.getElementById("displayedImage11");
    const imgElement12 = document.getElementById("displayedImage12");
    const imgElement13 = document.getElementById("displayedImage13");
    const imgElement14 = document.getElementById("displayedImage14");
    const imgElement15 = document.getElementById("displayedImage15");


    //     'B': 'Baked',
    //     'S': 'Simmered',
    //     'G': 'Grilled',
    //     'F': 'Fried'
    // FRUIT: A (APPLE), G (GRAPES), H (HONEYDEW), K (KIWI), T (TOMATO), W (WATERMELON)
    // MEAT: B (BEEF), C (CHICKEN), D (DUCK), P (PORK), Q (QUILL), R (RABBIT), V(VEAL/VENISON)
    // VEGGIES: J (JALAPENO), L (LETTUCE), N (NAPA CABBAGE), Y(YAM), Z (ZUCCHINI)
    // SEAFOOD: E (EEL), F (FLOUNDER), O (OCTOPUS), S (SALMON/SQUID,), U (URCHIN (SEA))

    if (input1_number >= 1 && input1_number <= 26) {
        // Default to hiding all images
        const allImages = [imgElement1, imgElement2, imgElement3, imgElement4, imgElement5, imgElement6, imgElement7, imgElement8, imgElement9, imgElement10, imgElement11, imgElement12, imgElement13, imgElement14, imgElement15];
        allImages.forEach(img => img.style.display = "none");


        // FRUIT + BAKED
        if ((input1_number === 1 || input1_number === 7 || input1_number === 8 || input1_number === 11 || input1_number === 20 || input1_number === 23) && input2_number === 2) {
            imgElement1.src = "cookingmama/fruitbaked.jpeg";
            imgElement1.style.display = "block";
            // FRUIT + SIMMERED
        } else if ((input1_number === 1 || input1_number === 7 || input1_number === 8 || input1_number === 11 || input1_number === 20 || input1_number === 23) && input2_number === 19) {
            imgElement2.src = "cookingmama/fruitsimmered.jpeg";
            imgElement2.style.display = "block";
            // MEAT + GRILLED
        } else if ((input1_number === 2 || input1_number === 3 || input1_number === 4 || input1_number === 16 || input1_number === 17 || input1_number === 18 || input1_number === 22) && input2_number === 7) {
            imgElement3.src = "cookingmama/meatgrilled.jpeg";
            imgElement3.style.display = "block";
            // MEAT + SIMMERED
        } else if ((input1_number === 2 || input1_number === 3 || input1_number === 4 || input1_number === 16 || input1_number === 17 || input1_number === 18 || input1_number === 22) && input2_number === 19) {
            imgElement4.src = "cookingmama/meatballssimmeredoption.jpeg";
            imgElement4.style.display = "block";
            // MEAT + BAKED
        } else if ((input1_number === 2 || input1_number === 3 || input1_number === 4 || input1_number === 16 || input1_number === 17 || input1_number === 18 || input1_number === 22) && input2_number === 2) {
            imgElement5.src = "cookingmama/meatbaked.jpeg";
            imgElement5.style.display = "block";
            // MEAT + FRIED
        } else if ((input1_number === 2 || input1_number === 3 || input1_number === 4 || input1_number === 16 || input1_number === 17 || input1_number === 18 || input1_number === 22) && input2_number === 6) {
            imgElement6.src = "cookingmama/meatfried.jpeg";
            imgElement6.style.display = "block";
            // VEGGIES + SIMMERED
        } else if ((input1_number === 10 || input1_number === 12 || input1_number === 14 || input1_number === 25 || input1_number === 26) && input2_number === 19) {
            imgElement7.src = "cookingmama/veggiessimmered.jpeg";
            imgElement7.style.display = "block";
            // VEGGIES + BAKED
        } else if ((input1_number === 10 || input1_number === 12 || input1_number === 14 || input1_number === 25 || input1_number === 26) && input2_number === 2) {
            imgElement8.src = "cookingmama/veggiesbaked.jpeg";
            imgElement8.style.display = "block";
            // VEGGIES + GRILLED
        } else if ((input1_number === 10 || input1_number === 12 || input1_number === 14 || input1_number === 25 || input1_number === 26) && input2_number === 7) {
            imgElement9.src = "cookingmama/veggiesgrilled1.webp";
            imgElement9.style.display = "block";
            // VEGGIES + FRIED
        } else if ((input1_number === 10 || input1_number === 12 || input1_number === 14 || input1_number === 25 || input1_number === 26) && input2_number === 6) {
            imgElement10.src = "cookingmama/veggiesfried.jpeg";
            imgElement10.style.display = "block";
            // SEAFOOD + BAKED
        } else if ((input1_number === 5 || input1_number === 6 || input1_number === 13 || input1_number === 15 || input1_number === 19 || input1_number === 21) && input2_number === 2) {
            imgElement11.src = "cookingmama/seafoodbaked.jpeg";
            imgElement11.style.display = "block";
            // SEAFOOD + GRILLED
        } else if ((input1_number === 5 || input1_number === 6 || input1_number === 13 || input1_number === 15 || input1_number === 19 || input1_number === 21) && input2_number === 7) {
            imgElement12.src = "cookingmama/seafoodgrilled1.webp";
            imgElement12.style.display = "block";
            // SEAFOOD + FRIED
        } else if ((input1_number === 5 || input1_number === 6 || input1_number === 13 || input1_number === 15 || input1_number === 19 || input1_number === 21) && input2_number === 6) {
            imgElement13.src = "cookingmama/seafoodfried.jpeg";
            imgElement13.style.display = "block";
            // SEAFOOD + SIMMERED
        } else if ((input1_number === 5 || input1_number === 6 || input1_number === 13 || input1_number === 15 || input1_number === 19 || input1_number === 21) && input2_number === 19) {
            imgElement14.src = "cookingmama/seafoodsimmered1.jpeg";
            imgElement14.style.display = "block";
            // FAIL 
        } else {
            imgElement15.src = "angrymama.gif";
            imgElement15.style.display = "block";
        }
    }
    // } else {
    //     alert("Please enter a valid letter (A-Z) for food and (B, S, G, F) for preparation");
    // }
    // } else {
    //     alert("Please enter a valid preparation method (B, S, G, F).");
    // }
}
