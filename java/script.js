document.getElementById('cat-generater').addEventListener("click",generatecat)

function generatecat()
{
    var image = document.createElement('img');
    var div = document.getElementById('cat-gen');
    image.src = ('https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small')
    div.append(image)
}