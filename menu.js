var menu = (function(){
    
    var init = function(){
        //get data
        var recipes = MyRecipes.getRecipes();
        recipes.forEach(r => {
            buildRecipe(r);
        });
    }

    var buildRecipe = function(recipe){
        var el = document.getElementById("menu_recipes");
        var currentHtml = el.innerHTML;

        var newRecipe = "<div class='recipe'>"+
            "<h2>"+recipe.name+"</h2>";
        
        newRecipe += "<ul>";
        recipe["ingredients"].forEach(i =>{
            newRecipe += "<li>"+i.name+" "+ i.qty + " " +i.qtyType+ "</li>";    
        });
        newRecipe += "</ul>";
        
        newRecipe += "</div>";

        el.innerHTML = currentHtml + newRecipe;
    }

    init();
}());
