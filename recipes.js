var MyRecipes = (function(){

    var getRecipes = function(){
        var recipes = [
            {
                "name": "Chocolate Chip Cookies",
                "image": "img/cookies.jpg",
                "ingredients": [
                    { "name":"butter", "qty":1, "qtyType": "cup" },
                    { "name":"sugar", "qty":1, "qtyType": "cup" },
                    { "name":"brown sugar", "qty":1, "qtyType": "cup" },
                    { "name":"vanilla extract", "qty":2, "qtyType": "tsp" },
                    { "name":"eggs", "qty":2, "qtyType": "large" },
                    { "name":"AP flour", "qty":3, "qtyType": "cups" },
                    { "name":"baking soda", "qty":1, "qtyType": "tsp" },
                    { "name":"baking powder", "qty":1.5, "qtyType": "tsp" },
                    { "name":"salt", "qty":1, "qtyType": "tsp" },
                    { "name":"chocolate chips", "qty":2, "qtyType": "cups" }
                ],
                "instructions": [
                    "Preheat oven to 375 degrees F.",
                    "Line a baking pan with parchment paper and set aside.",
                    "In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.",
                    "Cream together butter and sugars until combined. Beat in eggs and vanilla until fluffy.",
                    "Mix in the dry ingredients until combined.",
                    "Add 12 oz package of chocolate chips and mix well.",
                    "Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies).",
                    "Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown. Let them sit on the baking pan for 2 minutes before removing to cooling rack."
                ] 
            },
            {
                "name": "Country Fried Chicken",
                "image": "/img.friedchicken.jpg",
                "ingredients": [
                    { "name":"chicken breast", "qty":4, "qtyType": "" },
                    { "name":"buttermilk", "qty":2, "qtyType": "cups" },
                    { "name":"eggs", "qty":3, "qtyType": "large" },
                    { "name":"milk", "qty":1.5, "qtyType": "cup" },
                    { "name":"flour", "qty":2, "qtyType": "cups" },
                    { "name":"paprika", "qty":1, "qtyType": "Tbl" },
                    { "name":"cayenne pepper", "qty":1.5, "qtyType": "tsp" },
                    { "name":"garlic powder", "qty":1.5, "qtyType": "tsp" },
                    { "name":"salt", "qty":0, "qtyType": "to taste" },
                    { "name":"reserved pan drippings", "qty":0.25, "qtyType": "cup" },
                    { "name":"reserved flour mixture", "qty":4, "qtyType": "Tbl" },
                    { "name":"chicken broth", "qty":2, "qtyType": "cups" },
                    { "name":"milk", "qty":0.25, "qtyType": "cup" },
                    { "name":"salt", "qty":0, "qtyType": "to taste" },
                    { "name":"pepper", "qty":0, "qtyType": "to taste" }
                ],
                "instructions": [
                    "Pound each chicken breast half flat so it is even in thickness, do this carefully, you want it flat but not so thin that it tear (each chicken piece should be about the  size of your hand or slightly smaller).",
                    "Place chicken pieces in a gallon-sized Ziploc back and pour buttermilk over. Press as much air as you can out of the bag, seal, and place in refrigerator for at least 3 hours, or overnight.",
                    "In a shallow dish, whisk together eggs and milk, set aside.",
                    "In a separate shallow dish combine flour, paprika, cayenne, garlic powder, and salt and pepper. Stir until well combined and then remove about 4 Tbsp. of the dry mixture and set aside, this will be used for the gravy later.",
                    "Remove chicken from Ziploc, shake off excess buttermilk, and dredge each piece evenly with four mixture. Once coated with flour, lightly shake off excess, dip in egg/milk mixture, then place in back in flour mixture, giving it a double coating of flour.",
                    "Set chicken aside on a platter or on wax paper until ready to fry.",
                    "Add oil to a large skillet until it is about 1/4-inch full. Heat oil on medium-high heat until it reaches 350-degrees.",
                    "Add each piece of chicken to the oil without overcrowding, you may have to do this in batches for about 3-4 minutes on each side or until cooked through and crispy and golden on the outside. Place cooked chicken on a cooling rack on top of a baking sheet to catch excess oil. Place in warm oven about 200-degrees to keep warm until the rest of the chicken is done and you are ready to serve.",
                    "Drain off all but about 1/4 c. of the oil from the pan. Whisk reserved flour mixture into the oil until the four has absorbed the oil. Slowly whisk in the chicken broth and bring to a boil.",
                    "Whisk constantly and reduce heat to a simmer. Once the gravy starts to thicken, slowly add milk you may not need all of it to thin to desired consistency, whisking constantly. Add salt and  pepper to taste. Serve over chicken."
                ]
            },
            {
                "name": "Green Beans",
                "image": "img/greenbeans.jpg",
                "ingredients": [
                    { "name":"bacon", "qty":6, "qtyType": "slices" },
                    { "name":"green beans", "qty":2, "qtyType": "lbs" },
                    { "name":"yellow onion", "qty":0.5, "qtyType": "cup" },
                    { "name":"chicken broth", "qty":1.5, "qtyType": "cups" },
                    { "name":"salt", "qty":0, "qtyType": "to taste" },
                    { "name":"pepper", "qty":0, "qtyType": "to taste" }
                ],
                "instructions": [
                    "Cut the bacon into small pieces and cook over medium heat in a heavy 3 qt saucepan until the bacon is fully rendered.",
                    "DO NOT remove any of the bacon grease - it's what makes these green beans so amazing!" ,
                    "Add the onions and saute with bacon until transparent.",
                    "Add green beans and pepper and stir making sure the bacon drippings are getting mixed in well." ,
                    "Add chicken broth and reduce heat to low.",
                    "Cover and continue cooking the green beans for 30 minutes up to two hours, stirring occasionally. Make sure there is liquid in the bottom of your pot so that the beans don’t get scorched.",
                    "Check for seasoning levels and add salt and pepper if necessary."
                ]
            }
        ];
        return recipes;
    }

    return{
        getRecipes: getRecipes
    };
    
}());